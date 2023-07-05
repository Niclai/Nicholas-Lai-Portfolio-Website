// Skills.js
import React from 'react';
import './componentsCSS/skillsCSS.css';


const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML", "PHP", "Git & GitHub", "Python", "Java", "SQL", "C#", "MongoDB"];

const Skills = () => (
  <section id="skills" className='skills-section'>
    <h2>Skills</h2>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </section>
);

export default Skills;
