import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from '../components/ItemDetailsContainer/ItemDetailsContainer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import Contacto from '../components/Contacto/Contacto';
import Question from '../components/PreguntasFrecuentes/PreguntasFrecuentes';


const PrivateRoutes = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={ <ItemListContainer/> }/>
                <Route path='/productos/:categoryId' element={ <ItemListContainer/> }/>
                <Route path='/details/:itemId' element={ <ItemDetailsContainer/> } />
                <Route path='/preguntas-frecuentes' element={ <Question/> } />
                <Route path='/contacto' element={ <Contacto/> } />
                <Route path='/cart' element={ <Cart/> } />
                <Route path='*' element={ <Navigate to={"/"}/> }/>
            </Routes>
        </>
    )
}

export default PrivateRoutes