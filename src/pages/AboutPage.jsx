import React from 'react';
import '../styles/about.css'; 
import { Fade, Roll } from 'react-reveal';
import mariaImage from '../assets/perfil.jpg'; 

// Importa tu SVG aquí
import reactIcon from '../assets/icons8-react-50.svg';
import javastIcon from '../assets/icons8-javascript-48.svg';
import htmltIcon from '../assets/icons8-html-48.svg';
import sqltIcon from '../assets/icons8-mysql-50.svg';

export default function AboutPage() {
  return (
    <div className="container pt-4">
      <div className="about-container">
        <div className="about-text">
          <Fade>
            <h2>Maria Jones</h2>
          </Fade>
          <Roll right>
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
              tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
              impedit suscipit sed magnam alias in, repellat expedita hic explicabo
              architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Velit voluptate exercitationem quaerat pariatur
              mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
              nostrum temporibus ad omnis nam rerum eligendi.
            </p>
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
              tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
              impedit suscipit sed magnam alias in, repellat expedita hic explicabo
              architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Velit voluptate exercitationem quaerat pariatur
              mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
              nostrum temporibus ad omnis nam rerum eligendi.
            </p>
          </Roll>
        </div>
        <Roll bottom>
          <div className="about-image">
            <img src={mariaImage} alt="Maria" /> {/* Si aún necesitas la imagen de María */}
          </div>
        </Roll>
      </div>

      {/* Contenedor para las imágenes a centrar */}
      <div className="image-container">
        <img src={reactIcon} alt="React Icon" />
        <img src={javastIcon} alt="javas Icon" />
        <img src={htmltIcon} alt="html Icon" />
        <img src={sqltIcon} alt="sql Icon"/>
      </div>
      
     {/* Footer */}
     <footer className="footer bg-dark fixed-bottom d-flex justify-content-center align-items-center">
        <a href="https://github.com/Pilar1936" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon"/></a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
      </footer>
    </div>
  );
}
