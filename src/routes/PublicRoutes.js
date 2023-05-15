import LoginScreen from '../components/LoginScreen/LoginScreen';
import { Routes, Route, Navigate } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailsContainer/ItemDetailsContainer';
import RegisterScreen from '../components/RegisterScreen/RegisterScreen';
import Question from '../components/PreguntasFrecuentes/PreguntasFrecuentes';

const PublicRoutes = () => {

    return (
        <Routes>
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/preguntas-frecuentes' element={<Question />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route path='/details/:itemId' element={<ItemDetailContainer />} />
            <Route path='*' element={<Navigate to={"/"} />} />
        </Routes>
    )
}

export default PublicRoutes