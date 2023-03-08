import './MainContent.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import BookCard from '../BookCard/BookCard';

const MainContent = ({ title }) => {
    return (
        <main className='main-container'>
            <div className=''>
                <h2>{title}</h2>
                <div className='cards-container'>
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
            </div>
            <ItemListContainer />
        </main>
    );
}

export default MainContent;