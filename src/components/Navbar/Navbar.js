import './Navbar.css';

function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        CosmicBook
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/">
                            Inicio
                        </a>
                        <a className="navbar-item" href="/">
                            Preguntas Frecuentes
                        </a>
                        <a className="navbar-item" href="/">
                            Contacto
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;