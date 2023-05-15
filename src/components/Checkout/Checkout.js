import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { LoginContext } from "../../context/LoginContext"
import { Link, Navigate } from "react-router-dom"
import { writeBatch, collection, where, documentId, addDoc, getDocs, query, updateDoc, arrayUnion, doc } from "firebase/firestore"
import { db } from "../../firebase/config"
import './Checkout.scss';
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    nombre: Yup.string()
        .required("Este campo es requerido")
        .min(3, "Mínimo 3 caracteres")
        .max(30, "Máximo 30 caracteres"),
    direccion: Yup.string()
        .required("Este campo es requerido")
        .min(6, "Mínimo 6 caracteres")
        .max(30, "Máximo 30 caracteres"),
    email: Yup.string()
        .email("El email es incorrecto")
        .required("Este campo es obligatorio")
})

const Checkout = () => {
    const { user } = useContext(LoginContext)
    const { cart, totalCarrito, vaciarCarrito, removerItem } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)
    const [orderError, setOrderError] = useState(false)

    const [outOfStock, setOutOfStock] = useState([])

    const generarOrden = async (values) => {
        const orden = {
            cliente: values,
            items: cart,
            total: totalCarrito(),
            fyh: new Date(),
            id: null
        }

        const batch = writeBatch(db)

        const ordersRef = collection(db, "orders")
        const produtosRef = collection(db, "productos")
        const userRef = doc(collection(db, "usersData"), user.uid);
        const q = query(produtosRef, where(documentId(), "in", cart.map(item => item.id)))

        const noStocks = []

        const productos = await getDocs(q)

        const addOrder = async (id, userRef) => {
            await updateDoc(userRef, {
                orders: arrayUnion(id)
            });
        }

        productos.docs.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id)

            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                noStocks.push(item)
            }
        })

        if (noStocks.length === 0) {
            await batch.commit()
            const { id } = await addDoc(ordersRef, orden)
            const docRef = doc(collection(db, "orders"), id);
            await updateDoc(docRef, { id: id });
            setOrderId(id)
            addOrder(id, userRef)
            vaciarCarrito()
        } else {
            setOutOfStock(prev => prev.concat(noStocks));
            await setOrderError(true)
            noStocks.forEach(item => {
                removerItem(item.id);
            });
        }
    }

    if (orderId) {
        return (
            <div className="checkout-container">
                <div className="checkout">
                    <h2>Tu compra se registró exitosamente!</h2>
                    <hr />
                    <p>Puedes ver como va tu paquete en la sección ordenes.</p>
                    <p>Tu código de orden: <strong>{orderId}</strong></p>
                    <div className="btn-container">
                        <Link to="/" className="btn">Salir</Link>
                        <Link to="/orders" className="btn">Ver paquete</Link>
                    </div>
                </div>
            </div>
        )
    }

    if (orderError) {
        return (
            <div className="checkout-container">
                <div className="checkout">
                    <h2>Lamentamos informarle que los siguientes productos se encuentran sin stock:</h2>
                    <p>{outOfStock.map(i => i.title).join(', ')}</p>
                    <p>Estos productos serán retirados de su carrito.</p>
                    <Link to="/" className="btn">Salir</Link>
                </div>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="checkout-container">
            <div className="checkout">
                <h2>Ingresa tus datos</h2>

                <Formik
                    validationSchema={schema}
                    initialValues={{
                        nombre: user.name,
                        direccion: '',
                        email: user.email
                    }}
                    onSubmit={generarOrden}
                >
                    {({ values, errors, handleChange, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                value={values.nombre}
                                type="text"
                                className="check-input"
                                placeholder="Tu nombre"
                                onChange={handleChange}
                                name="nombre"
                            />
                            {errors.nombre && <p style={{ color: 'red' }}>{errors.nombre}</p>}

                            <input
                                value={values.direccion}
                                type="text"
                                className="check-input"
                                placeholder="Tu direccion"
                                name="direccion"
                                onChange={handleChange}
                            />
                            {errors.direccion && <p style={{ color: 'red' }}>{errors.direccion}</p>}

                            <input
                                value={values.email}
                                type="email"
                                className="check-input"
                                placeholder="Tu email"
                                name="email"
                                onChange={handleChange}
                            />
                            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}


                            <button className="btn btn-primary" type="submit">Enviar</button>
                        </form>)}
                </Formik>


            </div>
        </div>
    )
}

export default Checkout