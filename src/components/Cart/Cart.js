import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const Cart = () => {
    const { cart, vaciarCarrito, removerItem, totalCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>No tienes productos agregados</h2>
                <hr/>
                <Link className="btn btn-primary" to="/">Volver</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map((item) => ( 
                    <div key={item.id}>
                        <img src={item.image}/>
                        <h4>{item.title}</h4>
                        <button onClick={() => removerItem(item.id)} className="btn btn-danger"></button> 
                        {/*
                        <div>
                            <small>Cantidad: {item.cantidad} Precio un: {item.price}</small>
                        </div>
                        <p>Precio total: {item.price * item.cantidad}</p>
                        <hr/> */}
                    </div>
                ))
            }

            <h3>TOTAL: {totalCarrito()}</h3>
            <button onClick={vaciarCarrito} className="btn btn-danger m-2">Vaciar carrito</button>
            <Link to="/checkout" className="btn btn-success m-2">Terminar mi compra</Link>
        </div>
    )
}

export default Cart