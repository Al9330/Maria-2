// HomePage.js
import React from 'react';
import Particle from '../components/Particle';
import backgroundImage from '../assets/earth.jpg';
import Footer from '../components/Footer'; // Importa el componente Footer desde su ruta de archivo
import '../styles/home.css';

import { Fade, Roll, LightSpeed } from 'react-reveal';

function HomePage() {
  return (
    <div className="background-container" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Particle />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <Fade Rotate left cascade>
            <h1 className="display-4 animated-text">Welcome to My Portfolio</h1>
          </Fade>
          <Roll bottom>
            <p className="animated-paragraph">Hello!👋 This is my online portfolio.</p>
          </Roll>
          <LightSpeed left>
            <p className="animated-paragraph">Here you'll find information about me and my projects.</p>
            <p className="animated-paragraph">Explore and discover more!</p>
          </LightSpeed>
        </div>
      </div>
      {/* Agrega el componente de Footer al final de tu página */}
      <Footer />
    </div>
  );
}

export default HomePage;
