import { Link } from "react-router-dom"

const BookCard = ( {item} ) => {

    return (
        <div className='card'>
            <img className='card__img' src={item.imagen}/>
            <h3 className='card__title'>{item.title}</h3>
            <h4 className="card__autor">{item.autor}</h4>
            <p className="card__price">${item.price}</p>
            <p className="card__category">{item.category}</p>
            <Link to={`/detail/${item.id}`} className='card__btn'>Ver más</Link>
        </div>
    )
}

export default BookCard