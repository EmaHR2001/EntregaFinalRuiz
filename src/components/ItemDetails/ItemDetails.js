import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetails.scss';

const ItemDetails = ({ item }) => {
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
            <img src={item.image} alt={item.title} />
            <div className="details">
                <div>
                    <h2>{item.title}</h2>
                    <div>{elementosCat}</div>
                </div>
                <p>{item.description}</p>
                {
                    isInCart(item.id)
                        ? <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
                        : <ItemCount
                            stock={item.stock}
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            agregar={handleAgregar}
                        />
                }
            </div>
        </div >
    )
}

export default ItemDetails