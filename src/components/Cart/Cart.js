import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import './Cart.scss';


const Cart = () => {
    const { cart, vaciarCarrito, removerItem, totalCarrito } = useContext(CartContext)

    const trimText = (itemText, num) => {
        return itemText.slice(0, num)
    }

    if (cart.length === 0) {
        return (
            <div className="noitem-alert">
                <h2>No tienes productos agregados</h2>
                <Link className="btn btn-primary" to="/">Volver</Link>
            </div>
        )
    }

    return (
        <div className="cart-container">
            <div className="cart-products">
                {
                    cart.map((item) => (
                        <div className="cart-products__item" key={item.id}>
                            <img alt={item.title} src={item.image} />
                            <div className="cart-products__info">
                                <h4>{item.title}</h4>
                                <h5>{item.format}</h5>
                                <p>{trimText(item.description, 300)}...</p>
                                <div className="buttons">
                                    <p>Copias: {item.cantidad}</p>
                                    <h3>${item.price}</h3>
                                    <button onClick={() => removerItem(item.id)} className="btn"><i className="fa-solid fa-trash-can"></i>Eliminar</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div>
                <div className="list">
                    <h2>Tu lista</h2>
                    <div>
                        {
                            cart.map((item) => (
                                <div className="list__cart" key={item.id}>
                                    <p>{trimText(item.title, 20)}...</p>
                                    <p>{item.cantidad}</p>
                                    <p>${item.price * item.cantidad}</p>
                                </div>
                            ))
                        }
                    </div>
                    <h3>TOTAL: ${totalCarrito()}</h3>
                    <div className="list__buttons">
                        <button onClick={vaciarCarrito} className="list-btn">Vaciar carrito</button>
                        <Link to="/checkout" className="list-btn">Terminar mi compra</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart