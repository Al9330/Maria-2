import React from 'react';
import Particle from '../components/Particle';
import backgroundImage from '../assets/earth.jpg'; 
import '../components/styles/HomePages.css'; 
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

          <footer className="footer bg-dark fixed-bottom">
            <a href="https://github.com/Pilar1936" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon"/></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
