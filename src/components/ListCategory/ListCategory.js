import { Link } from "react-router-dom"

const ListCategory = () => {

    return (
        <div className="list-container">
                <h2 className="list-container__title">Categorías</h2>
                <div className='buttons-category'>
                    <Link to={`/productos/`} className='category_btn'>Todas</Link>
                    <Link to={`/productos/Ciencia-Ficcion`} className='category_btn'>Ciencia Ficción</Link>
                    <Link to={`/productos/Fantasia`} className='category_btn'>Fantasía</Link>
                    <Link to={`/productos/Historia`} className='category_btn'>Historia</Link>
                    <Link to={`/productos/Romance`} className='category_btn'>Romance</Link>
                    <Link to={`/productos/Ciencia`} className='category_btn'>Ciencia</Link>
                    <Link to={`/productos/Cocina`} className='category_btn'>Cocina</Link>
                    <Link to={`/productos/Terror`} className='category_btn'>Terror</Link>
                </div>
        </div>
    )
}

export default ListCategory