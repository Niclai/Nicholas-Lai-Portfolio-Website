// Header.js
import React from 'react';
import { Link } from "react-scroll";

const Header = () => (
  <header>
    <h1>Nicholas Lai</h1>
    <nav>
      <Link to="about" smooth={true} offset={-100}>About</Link>
      <Link to="education" smooth={true} offset={-110}>Education</Link>
      <Link to="projects" smooth={true} offset={-100}>Projects</Link>
      <Link to="skills" smooth={true} offset={-90}>Skills</Link>
      <Link to="contact" smooth={true} offset={-100}>Contact</Link>

    </nav>
  </header>
);

export default Header;

