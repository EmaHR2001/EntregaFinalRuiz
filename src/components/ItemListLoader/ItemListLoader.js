const ItemListLoader = () => {
    const cartLoader = Array.from({ length: 10 }, (_, index) => (
        <div key={index} className='card'>
            <img className='card__img' src="" alt="imagen" />
            <h3 className='card__title'>cargando</h3>
            <h4 className="card__autor">cargando</h4>
            <p className="card__price">cargando</p>
        </div>
    ))

    return (
        <div className='item-list'>
            {cartLoader}
        </div>
    )
}

export default ItemListLoader