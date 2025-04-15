import React from 'react';

function ProjectItem({ project }) {
  return (
    <div className="project-item">
      <h3>{project.name}</h3>
      <div>
        {project.technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
