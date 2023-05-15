const ItemCount = ({ stock, cantidad, setCantidad, agregar }) => {

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }

    return (
        <div className='itemcount'>
            <div className='accountant'>
                <div className='accountant__container'>
                    <button
                        onClick={handleRestar}
                        className={cantidad === 1 ? 'count count-danger' : 'count count-primary'}
                        disabled={cantidad === 1 || stock === 0}
                    >
                        -
                    </button>

                    <span className="number">{cantidad}</span>

                    <button
                        onClick={handleSumar}
                        className={cantidad === stock ? "count count-danger" : "count count-primary"}
                        disabled={cantidad === stock || stock === 0}
                    >
                        +
                    </button>
                </div>
                <p className='stock'>Stocks: {stock}</p>
            </div>
            <div className='accountant__btn'>
                <button disabled={stock === 0} onClick={agregar} className="btn">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount