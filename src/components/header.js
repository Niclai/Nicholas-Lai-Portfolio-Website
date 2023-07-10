import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-scroll";
import { useState } from 'react';
import linkedInLogo from '../assets/linkedin.png'; 
import githubLogo from '../assets/github.png'; 

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!isOpen);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
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

      <div className="hide-on-desktop">
        <Menu isOpen={isOpen} onStateChange={({ isOpen }) => setOpen(isOpen)} right width={'40%'}>
          <Link to="about" className="menu-item" smooth={true} offset={-100} onClick={closeMenu}>About</Link>
          <Link to="education" className="menu-item" smooth={true} offset={-110} onClick={closeMenu}>Education</Link>
          <Link to="projects" className="menu-item" smooth={true} offset={-100} onClick={closeMenu}>Projects</Link>
          <Link to="experience" className="menu-item" smooth={true} offset={-100} onClick={closeMenu}>Experience</Link>
          <Link to="skills" className="menu-item" smooth={true} offset={-90} onClick={closeMenu}>Skills</Link>
          <Link to="contact" className="menu-item" smooth={true} offset={-100} onClick={closeMenu}>Contact</Link>
        </Menu>
      </div>

      <nav className={`hide-on-mobile ${isOpen ? "open" : ""}`}>
        <Link to="about" smooth={true} offset={-100}>About</Link>
        <Link to="education" smooth={true} offset={-110}>Education</Link>
        <Link to="projects" smooth={true} offset={-100}>Projects</Link>
        <Link to="experience" smooth={true} offset={-100}>Experience</Link>
        <Link to="skills" smooth={true} offset={-90}>Skills</Link>
        <Link to="contact" smooth={true} offset={-100}>Contact</Link>
      </nav>

      {/* Use button tag as the action to open up the hamburger menu */}
      <button className={`hamburger-button ${isOpen ? "open" : ""}`} onClick={handleMenuClick}>
        <span></span>
      </button>

      <style jsx>{`
        .header {
          top: 0;
          width: 100%;
          background: #474747;
          color: #f5f5f5;
          text-align: center;
          z-index: 1000;
        }

        .social-links {
          align-items: center;
        }

        .social-link {
          width: 80px;
          height: auto;
          margin-right: 0px;
        }

        
        
        nav {
          margin-top: 0;
        }

        nav a {
          color: #f5f5f5;
          margin: 0 15px;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        nav a:hover {
          color: #FFC371;
        }

        .hide-on-desktop {
          display: none;
        }

        .hide-on-mobile {
          display: block;
        }

        .hamburger-button {
          display: none;
        }

        @media screen and (max-width: 767px) {
          .hide-on-desktop {
            display: block;
          }

          .hide-on-mobile {
            display: none;
          }

          nav {
            transition: color 0.3s ease;
            margin-top: 45px
            background-color: rgba(0, 0, 0, 0.8); /* Adjust the alpha value as per your preference */
          }

          nav a {
            color: #f5f5f5;
            background-color: rgba(0, 0, 0, 0.5); /* Adjust the alpha value as per your preference */
            transition: color 0.3s ease;
          
          }

          .hamburger-button {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 20px;
            right: 10px;
            width: 40px;
            height: 40px;
            cursor: pointer;
            background-color: #474747;
            border-radius: 20%;
          }

          .hamburger-button span {
            display: block;
            width: 30px;
            height: 4px;
            background-color: #f5f5f5;
            margin-bottom: 6px;
            transition: background-color 0.3s ease;
          }

          .hamburger-button.open span {
            background-color: #FFC371;
          }

          .hamburger-button:hover span {
            background-color: #FFC371;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
