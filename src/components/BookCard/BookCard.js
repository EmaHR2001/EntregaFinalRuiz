import './BookCard.css'
import imagen from '../../assets/imgs/imagen1.jpeg'

const BookCard = () => {

    return (
        <div className='card'>
            <img className='card-img' src={imagen} alt="libro"></img>
            <h3>Book</h3>
            <p>Price: $$$</p>
        </div>
    )
}

export default BookCard