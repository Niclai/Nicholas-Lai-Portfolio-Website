// Skills.js
import React from 'react';

const skills = ["JavaScript", "React", "Node.js", "CSS", "HTML", "Python", "Java", "SQL", "MongoDB"];

const Skills = () => (
  <section>
    <h2>Skills</h2>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </section>
);

export default Skills;
