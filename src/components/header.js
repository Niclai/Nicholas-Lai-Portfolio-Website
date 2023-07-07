// Header.js
import React from 'react';
import { Link } from "react-scroll";

import linkedInLogo from '../assets/linkedin.png'; 
import githubLogo from '../assets/github.png'; 

const Header = () => (
  <header className="header">
    <div className="social-links">
      <a href="https://www.linkedin.com/in/nicholas-gy-lai/" target="_blank" rel="noopener noreferrer">
        <img src={linkedInLogo} alt="LinkedIn" className="social-link" />
      </a>
      <a href="https://github.com/Niclai" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="GitHub" className="social-link" />
      </a>
    </div>
    <h1>Nicholas Lai</h1>
    <nav>
      <Link to="about" smooth={true} offset={-100}>About</Link>
      <Link to="education" smooth={true} offset={-110}>Education</Link>
      <Link to="projects" smooth={true} offset={-100}>Projects</Link>
      <Link to="experience" smooth={true} offset={-100}>Experience</Link>
      <Link to="skills" smooth={true} offset={-90}>Skills</Link>
      <Link to="contact" smooth={true} offset={-100}>Contact</Link>
    </nav>
  </header>
);

export default Header;

