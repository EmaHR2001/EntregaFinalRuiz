import './ItemListContainer.css'

const ItemListContainer = () => {

    return (
        <div className="list-container">
            <h2 className="list-container__title">Categorías</h2>
            <div className='buttons-category'>
                <button className='button-cat'>Ciencia Ficción</button>
                <button className='button-cat'>Fantasía</button>
                <button className='button-cat'>Historia</button>
                <button className='button-cat'>Ciencia</button>
            </div>
        </div>
    )
}

export default ItemListContainer