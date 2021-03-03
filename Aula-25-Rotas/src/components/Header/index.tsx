import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (

        <div>
            <ul id="menu">
                <li className="menu_link">     <Link to="/">Home</Link> </li>
                <li className="menu_link">     <Link to="/contato">Contato</Link></li>
                <li className="menu_link">     <Link to="/portifolio">Portifolio</Link>   </li>
            </ul>
        </div>
    )
}

export default Header;