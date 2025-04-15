
import React from 'react';
import ProjectItem from './ProjectItem';

function ProjectList({ projects }) {
  return (
    <section>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </section>
  );
}

export default ProjectList;
