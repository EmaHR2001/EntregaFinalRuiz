import './ItemListContainer.scss';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ListCategory from '../ListCategory/ListCategory';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import ItemList from '../ItemList/ItemList';
import ItemListLoader from '../ItemListLoader/ItemListLoader';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, "productos")
        const q = categoryId
            ? query(productosRef, where("category", "array-contains", categoryId))
            : productosRef

        getDocs(q)
            .then((res) => {
                setProductos(res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
            .finally(() => setLoading(false))

    }, [categoryId])

    return (
        <main className='itemlistcontainer'>
            <ListCategory />
            <div className="itemlist-container">
                <h2 className="itemlist-title">Productos</h2>
                {loading
                    ? <ItemListLoader/>
                    : <ItemList items={productos}/>
                }
            </div>
        </main>
    );
}

export default ItemListContainer;