import Navbar from './components/Navbar/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import PreguntasFrecuentes from './components/PreguntasFrecuentes/PreguntasFrecuentes.js';
import Contacto from './components/Contacto/Contacto.js';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/productos/:categoryId' element={<ItemListContainer />} />
        <Route path='/preguntas-frecuentes' element={<PreguntasFrecuentes/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='*' element={<Navigate to={"/"} />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
