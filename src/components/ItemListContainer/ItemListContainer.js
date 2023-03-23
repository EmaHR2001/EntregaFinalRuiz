import './ItemListContainer.css';
import BookCard from '../BookCard/BookCard';
import MOCK_DATA from '../../data/MOCK_DATA.json';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const pedirDatos = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(MOCK_DATA)
                }, 1500)
            })
        }

        pedirDatos()
            .then((res) => {
                if (categoryId) {
                    setProductos(res.filter((prod) => prod.category === categoryId))
                } else {
                    setProductos(res)
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <main className='inicio-container'>
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
            <div className=''>
                <div className='cards-container'>
                    {
                        loading
                            ? Array.from({ length: 20 }, (_, i) => (
                                <div key={i} className='card'>
                                    <p>Cargando...</p>
                                </div>
                            ))
                            : productos.map((producto) => <BookCard key={producto.id} item={producto} />)
                    }
                </div>
            </div>
        </main>
    );
}

export default ItemListContainer;