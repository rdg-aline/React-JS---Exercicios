import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      
        <NavLink to="/" exact>Home</NavLink>
       
    </div>
  );
}

export default Header;