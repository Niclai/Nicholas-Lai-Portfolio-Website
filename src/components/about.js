import React from 'react';
import profilePic from '../assets/portraitPic.jpg'; 
import linkedInLogo from '../assets/linkedin.png'; 
import githubLogo from '../assets/github.png'; 


const About = () => (
  <section id="about">
    <h2>About Me</h2>
    <div className="about-content">
      <img src={profilePic} alt="Profile" className="profile-pic"/>
        <p>Hello! I'm a Computer Science student in my final year at Queen Mary University of London with a passion for software development.
            I thrive in problem-solving and developing efficient, high-quality solutions. Currently, I am seeking a challenging role where
            I can contribute my skills, learn, and grow. My experiences thus far with university and personal projects have given me a solid foundation in programming concepts, 
            and I am eager to bring that knowledge into a professional setting.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/nicholas-gy-lai/" target="_blank" rel="noopener noreferrer">
          <img src={linkedInLogo} alt="LinkedIn" className="social-link" />
        </a>
        <a href="https://github.com/Niclai" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="social-link" />
        </a>
      </div>
    </div>
  </section>
);

export default About;


