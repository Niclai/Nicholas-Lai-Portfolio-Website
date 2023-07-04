// Education.js

import React from 'react';
import './componentsCSS/educationCSS.css';
import UniversityImage from '../assets/university.jpg';

const Education = () => (
  <section id="education" className="education-section">
    <h2>Education</h2>
    <img src={UniversityImage} alt="Queen Mary University of London" className="university-image" />
    <h3>Queen Mary University of London, BSc Computer Science</h3>
    <h4>Relevant Modules:</h4>
    <ul>
      <li>Software Engineering</li>
      <li>Further Object Oriented Programming</li>
      <li>Big Data Processing</li>
      <li>Computability, Complexity and Algorithms</li>
      <li>Database Systems</li>
    </ul>
    <p>
      I'm currently in my final year of study and have a strong passion for software development.
      My academic experience has equipped me with a solid foundation in computer science,
      and I'm particularly interested in applying the principles of software engineering and object-oriented programming to solve complex problems.
    </p>
  </section>
);

export default Education;
