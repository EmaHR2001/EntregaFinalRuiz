import { Link } from "react-router-dom"


const Item = ({ item }) => {

    const elementosCat = item.category.map((elemento, indice) => {
        return <p className="category" key={indice}>{elemento}</p>;
    });

    return (
        <div className='card' >
            <img className='card__img' src={item.image} alt="imagen" />
            <h3 className='card__title'>{item.title}</h3>
            <h4 className="card__autor">{item.autor}</h4>
            <p className="card__price">${item.price}</p>
            <div className="card__category">
                {elementosCat}
            </div>
            <Link to={`/details/${item.id}`} className='card__btn'>Ver más</Link>
        </div>
    )
}

export default Item