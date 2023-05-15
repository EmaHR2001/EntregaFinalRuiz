const ItemListLoader = () => {
    const cartLoader = Array.from({ length: 10 }, (_, index) => (
        <div key={index} className='loader-card'>
            <div className="loader loader_one"></div>
            <div className="loader loader_two"></div>
            <div className="loader loader_three"></div>
            <div className="loader loader_four"></div>
        </div>
    ))

    return (
        <div className='item-list'>
            {cartLoader}
        </div>
    )
}

export default ItemListLoader