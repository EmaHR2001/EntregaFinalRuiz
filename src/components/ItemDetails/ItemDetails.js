import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { LoginContext } from "../../context/LoginContext"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetails.scss';

const ItemDetails = ({ item }) => {
    const { user } = useContext(LoginContext)
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const elementosCat = item.category.map((elemento, indice) => {
        return <p className="category" key={indice}>{elemento}</p>;
    });

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }

    return (
        <div className="details-container">
            <div className="details details__img">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="details details__info">
                <h2>{item.title}</h2>
                <h3>{item.autor}</h3>
                <div className="category__container">{elementosCat}</div>
                <p>{item.description}</p>
            </div>
            <div className="details details__buy">
                <div className="buy__price">
                    <h3>${item.price}</h3>
                    <p>Envió Gratis</p>
                </div>
                <div className="buy__info">
                    <div className="envio">
                        <i className="fa-solid fa-truck-fast"></i>
                        <p><span>Recíbelo Mañana.</span> Entrega en menos de 7 días.</p>
                    </div>
                    <div className="local">
                        <i className="fa-solid fa-store"></i>
                        <p>Búscalo en todas nuestras librerías.<span> Recógelo Gratis.</span></p>
                    </div>
                </div>
                {
                    user.logged === true
                        ? isInCart(item.id)
                            ? <Link to="/cart" className="btn btn__cart">Terminar mi compra</Link>
                            : item.stock > 0 ? <ItemCount stock={item.stock} cantidad={cantidad} setCantidad={setCantidad} agregar={handleAgregar}/>
                                            : <p className="no-stock">Sin stocks. Por favor vuelva más tarde.</p>
                            : <Link to="/login" className="btn btn__login">Inicia sesión para comprar</Link>
                }
            </div>
        </div >
    )
}

export default ItemDetails