import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap'; 
import logo from '../assets/pngaaa.com-2507896.png'; 
import '../components/styles/navbar.css'; 

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Función para manejar el evento de scroll
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Función para manejar el evento de abrir/cerrar el menú en dispositivos móviles
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className={`justify-content-center ${scrolled ? 'navbar-scrolled' : ''}`}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" height="30" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleMenu} />
        <Navbar.Collapse id="navbar-nav" className={`justify-content-center ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={toggleMenu}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={toggleMenu}>About me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
