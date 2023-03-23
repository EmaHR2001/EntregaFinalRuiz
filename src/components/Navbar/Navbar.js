import './Navbar.css';
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to={`/`} className='inicio_btn'>CosmicBook</Link>
                </div>
                <div className="navbar-menu">
                    <Link to={`/preguntas-frecuentes`} className='section_btn'>Preguntas Frecuentes</Link>
                    <Link to={`/contacto`} className='section_btn'>Contacto</Link>
                </div>
                <div>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;