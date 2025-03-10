import React from 'react';
import projects from '../data/projects'
import '../styles.css'

function Projects() {

  return (
  <>
    {projects.map((project) => (
        <ul className='projectList' key={project.id}>
          <li>{project.name}</li>
          <li><img src="{project.image}" alt={project.name}/></li>
          <li>{project.description}</li>
          <li><a href={project.url} target="_blank">Project link</a></li>
        </ul>
    ))}
  </>
  );
}

export default Projects;
