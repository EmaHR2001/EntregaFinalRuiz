import { useState } from 'react';
import { Link } from 'react-router-dom';

const ListCategory = () => {
    const [selectedLink, setSelectedLink] = useState('/productos');

    const handleLinkClick = (route) => {
        setSelectedLink(route);
    };

    return (
        <div className="category-list">
            <h2 className="category-list__title">Categorías</h2>
            <div className='buttons-category'>
                <Link to={`/productos/`} className={`category_btn ${selectedLink === '/productos' ? 'active' : ''}`} onClick={() => handleLinkClick('/productos')}>Todas</Link>
                <Link to={`/productos/Ficción`} className={`category_btn ${selectedLink === '/productos/Ficción' ? 'active' : ''}`} onClick={() => handleLinkClick('/productos/Ficción')}>Ciencia Ficción</Link>
                <Link to={`/productos/Fantasia`} className={`category_btn ${selectedLink === '/productos/Fantasia' ? 'active' : ''}`} onClick={() => handleLinkClick('/productos/Fantasia')}>Fantasía</Link>
                <Link to={`/productos/Historia`} className={`category_btn ${selectedLink === '/productos/Historia' ? 'active' : ''}`} onClick={() => handleLinkClick('/productos/Historia')}>Historia</Link>
                <Link to={`/productos/Romance`} className={`category_btn ${selectedLink === '/productos/Romance' ? 'active' : ''}`} onClick={() => handleLinkClick('/productos/Romance')}>Romance</Link>
                <Link to={`/productos/Clásico`} className={`category_btn ${selectedLink === '/productos/Clásico' ? 'active' : ''}`} onClick={() => handleLinkClick('/productos/Clásico')}>Clásico</Link>
                <Link to={`/productos/Literatura`} className={`category_btn ${selectedLink === '/productos/Literatura' ? 'active' : ''}`} onClick={() => handleLinkClick('/productos/Literatura')}>Literatura</Link>
                <Link to={`/productos/Terror`} className={`category_btn ${selectedLink === '/productos/Terror' ? 'active' : ''}`} onClick={() => handleLinkClick('/productos/Terror')}>Terror</Link>
                <Link to={`/productos/Humor`} className={`category_btn ${selectedLink === '/productos/Humor' ? 'active' : ''}`} onClick={() => handleLinkClick('/productos/Humor')}>Humor</Link>
                <Link to={`/productos/Infantil`} className={`category_btn ${selectedLink === '/productos/Infantil' ? 'active' : ''}`} onClick={() => handleLinkClick('/productos/Infantil')}>Infantil</Link>
            </div>
        </div>
    );
};

export default ListCategory