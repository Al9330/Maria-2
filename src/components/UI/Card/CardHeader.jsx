import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
          <li><NavLink to="/project" activeClassName="active">Projects</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
