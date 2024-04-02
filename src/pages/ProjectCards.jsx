import React from 'react';

function ProjectCards({ image, name, github, deploy, topics }) {
  return (
    <div className="project-card">
      <img src={image} alt={name} style={{ maxWidth: '100%', height: 'auto' }} />
      <h3>{name}</h3>
      <p>{topics}</p>
      <div className="buttons">
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        {deploy && <a href={deploy} target="_blank" rel="noopener noreferrer">Deploy</a>}
      </div>
    </div>
  );
}

export default ProjectCards;
