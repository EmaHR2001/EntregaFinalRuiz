import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from '../components/ItemDetailsContainer/ItemDetailsContainer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import Question from '../components/PreguntasFrecuentes/PreguntasFrecuentes';
import Checkout from '../components/Checkout/Checkout';
import OrdersList from '../components/OrdersList/OrdersList';


const PrivateRoutes = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={ <ItemListContainer/> }/>
                <Route path='/productos/:categoryId' element={ <ItemListContainer/> }/>
                <Route path='/details/:itemId' element={ <ItemDetailsContainer/> } />
                <Route path='/preguntas-frecuentes' element={ <Question/> } />
                <Route path='/cart' element={ <Cart/> } />
                <Route path='/checkout' element={ <Checkout/> } />
                <Route path='/orders' element={ <OrdersList/> } />
                <Route path='*' element={ <Navigate to={"/"}/> }/>
            </Routes>
        </>
    )
}

export default PrivateRoutes