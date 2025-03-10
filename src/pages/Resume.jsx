import React from 'react';
import { studies, experiences } from '../data/resume'
import '../styles.css'

function Resume() {
  return (
    <>
    <h3>Studies:</h3>
    {studies.map((studie) => (
        <ul className='resumeList' key={studie.id}>
          <li>Title: {studie.title}</li>
          <li>Institution: {studie.institution}</li>
          <li>Date: {studie.date}</li>
        </ul>
    ))}
    <h3>Experiences:</h3>
    {experiences.map((experience) => (
        <ul className='resumeList' key={experience.id}>
          <li>Title: {experience.title}</li>
          <li>Company: {experience.company}</li>
          <li>Date: {experience.date}</li>
        </ul>
    ))}
  </>
  );
}

export default Resume;
