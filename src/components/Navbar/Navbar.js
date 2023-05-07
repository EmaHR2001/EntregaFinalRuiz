import { useContext } from 'react';
import './Navbar.scss';
import { Link } from "react-router-dom"
import { LoginContext } from '../../context/LoginContext';
import { CartContext } from '../../context/CartContext'

function Navbar() {
    const { totalCantidad, cart } = useContext(CartContext)
    const { user, logout } = useContext(LoginContext)

    return (
        <header>
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to={`/`} className='link link__inicio'>CosmicBook</Link>
                </div>
                <div className="navbar-menu">
                    <Link to={`/preguntas-frecuentes`} className='link link__enlace'>Preguntas Frecuentes</Link>
                    <Link to={`/contacto`} className='link link__enlace'>Contacto</Link>
                </div>
                {user.logged === true ?
                    <div className="nav__logged">
                        <h6>Bienvenido: {user.email}</h6>
                        <button className='btn btn-logout' onClick={logout}>Logout</button>
                        <Link to="/cart" className="">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span>{totalCantidad()}</span>
                        </Link>
                    </div>
                    :
                    <div>
                        <Link to={`/login`} className='link link__user'>Iniciar Sesión</Link>
                        <Link to={`/register`} className='link link__user'>Registrarse</Link>
                    </div>
                }
            </nav>
        </header>
    );
}

export default Navbar;