import React from 'react'; 
import ProjectCards from '../pages/ProjectCards';
import portfolio from '../data/portfolio.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/portfolio.css'; 
import Footer from '../components/Footer'; 

function Portfolio() {
  return (
    <section className="container">
      <div className="project">
        <h2 className="top-title">Bootcamp Portfolio🚀</h2>
        <hr></hr>
      </div>
      
      <div className="wrapper">
        <div className="row">
          {portfolio.slice(0, 2).map((project) => (
            <div key={project.id} className="col-md-6 mb-4">
              <ProjectCards
                image={project.image}
                name={project.name}
                github={project.github}
                deploy={project.deploy}
                topics={project.topics}
              />
            </div>
          ))}
        </div>
        <div className="row">
          {portfolio.slice(2, 4).map((project) => (
            <div key={project.id} className="col-md-6 mb-4">
              <ProjectCards
                image={project.image}
                name={project.name}
                github={project.github}
                deploy={project.deploy}
                topics={project.topics}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Agrega el componente de Footer al final de tu página */}
      <Footer />
    </section>
  );
}

export default Portfolio;
