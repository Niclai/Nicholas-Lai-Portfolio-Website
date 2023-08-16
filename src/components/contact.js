// Contact.js
import React from 'react';
import './componentsCSS/contactCSS.css';
import Resume from '../assets/cv s.pdf';
import CVIcon from '../assets/resume.png';

const Contact = () => (
  <section id="contact" className='contact-section'>
    <h2>Contact Me</h2>
    <p>You can reach me at n.lai8@outlook.com</p>
    <p>Feel free to take a look at my resume: 
      <a href={Resume} download="Nicholas_Lai_Resume.pdf">
        <img src={CVIcon} alt="CV Icon" style={{ width: "60px", height: "auto", marginLeft: "20px" }}/>
      </a>
    </p>
  </section>
);

export default Contact;
