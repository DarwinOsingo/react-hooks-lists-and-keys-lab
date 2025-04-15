import React from 'react';
import NavBar from './NavBar';
import ProjectList from './ProjectList';

function App() {
  const projects = [
    {
      id: 1,
      name: 'Build Portfolio',
      technologies: ['React', 'CSS', 'JavaScript'],
    },
    {
      id: 2,
      name: 'E-commerce App',
      technologies: ['Node.js', 'Express', 'MongoDB'],
    },
    {
      id: 3,
      name: 'Game Dev',
      technologies: ['Unity', 'C#'],
    },
  ];

  return (
    <div>
      <NavBar />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
