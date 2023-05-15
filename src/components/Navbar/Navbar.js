import { useContext } from 'react';
import './Navbar.scss';
import { Link } from "react-router-dom"
import { LoginContext } from '../../context/LoginContext';
import { CartContext } from '../../context/CartContext'

function Navbar() {
    const { totalCantidad } = useContext(CartContext)
    const { user, logout } = useContext(LoginContext)

    return (
        <header>
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to={`/`} className='link link__inicio'>CosmicBook</Link>
                </div>
                <div className="navbar-menu">
                    <Link to={`/preguntas-frecuentes`} className='link link__enlace'>Preguntas Frecuentes</Link>
                </div>
                {user.logged === true ?
                    <div className="nav__logged">

                        <div className='user'>
                            <div className='user__name'>
                                <i className="fa-solid fa-user"></i>
                                <h6>{user.name}</h6>
                            </div>
                            <div className='user__options'>
                                <Link to="/orders" className="options">Tus pedidos</Link>
                                <button className='options' onClick={logout}>Cerrar Sesión</button>
                            </div>
                        </div>

                        <Link to="/cart" className="link-cart">
                            <p>Ir al Carrito</p>
                            <span>{totalCantidad()}</span>
                        </Link>
                    </div>
                    :
                    <div className="nav__logged">
                        <Link to={`/login`} className="link-cart">Iniciar Sesión</Link>
                    </div>
                }
            </nav>
        </header>
    );
}

export default Navbar;