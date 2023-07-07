// Projects.js
import React, { useState } from 'react';
import '../styles.css';
import FDMLogo from '../assets/FDMLogo.jpg'; // adjust the path as needed
import weatherAppLogo from '../assets/weatherAppLogo.jpg'; // adjust the path as needed
import githubLogo from '../assets/github.png'; // adjust the path as needed


import FDMLogin from '../assets/FDMLogin.jpg';
import FDMhomePage from '../assets/FDMhomePage.jpg';
import FDMsearch from '../assets/FDMsearch.jpg';
import FDMfooter from '../assets/FDMfooter.jpg';
import FDMsubmitListing from '../assets/FDMsubmitListing.jpg';
import FDMwatchlist from '../assets/FDMwatchlist.jpg';

import SWAdisplay from '../assets/SWAdisplay.jpg';
import SWAhome from '../assets/SWAhome.jpg';
import SWAsettings from '../assets/SWAsettings.jpg';



const projectData = [
  { id: 1, 
    classname: 'FDM-project',
    name: 'FDM Flat Finder', 
    description: [
      'This is a university project tasked by FDM given to me. The task was developed to allow FDM consultants to advertise there properties to rent, and also allow them to look for properties. Similiar to existing websites such as rightmove but this platform is exclusive to FDM consultants. How this platform works is by consultants having there own profiles and login credentials. By using a login system each user will have there own unique website. As consultants can list their own property, other users can see who has submited that listing and can reach out to them for further information using the rent application form. Furthermore all rent applications sent to a listing can be linked back to a consultant. This gives the whole experience a personal touch as all actions can be traced back to a consultant. All the listings are externally saved and fetched from a mongo Database. This ensures real time updates to the data being displayed on the website.',
      'Technologies used: ',
      'React, Python, Javascript, MongoDB, PyMongo'
    ], 
    image: FDMLogo,
    images: [FDMLogin, FDMhomePage, FDMsearch, FDMfooter, FDMsubmitListing, FDMwatchlist]
  },

  { id: 2, 
    className: 'SWA-project',
    name: 'Student Weather App', 
    description: [
      'The StudyWeather App is a weather application specifically designed for students who value optimal studying conditions. This innovative app goes beyond the conventional weather forecast by utilizing user-specific inputs to calculate and notify you about the next best study session based on your preferences.',
      'Customized Study Preferences:',
      'The StudyWeather App starts by understanding your unique study preferences. Upon signing up, you will be prompted to input your desired studying conditions, such as temperature, humidity, and weather conditions (sunny, cloudy, rainy, etc.). By tailoring the app to your specific needs, it ensures an ideal environment for focused and productive study sessions.',
      'Intelligent Calculation:',
      'Utilizing cutting-edge algorithms, the StudyWeather App analyzes real-time weather data obtained through Google APIs. It cross-references this data with your personalized study preferences to calculate the next best study session for you. The app takes into account various factors, including temperature, humidity, weather patterns, and your specified conditions, to determine the most suitable time to study.',
      'Notification System:',
      'The StudyWeather App keeps you informed about the ideal study sessions through its comprehensive notification system. You can set preferences for receiving notifications based on your availability and study schedule. The app ensures you never miss an opportune time to hit the books.',
      'Regular Weather Functionality:',
      'In addition to its unique study-centric features, the StudyWeather App also provides traditional weather information. You can check the current weather conditions, hourly and daily forecasts, and receive severe weather alerts to plan your day accordingly. The integration of Google APIs ensures accurate and up-to-date weather data at your fingertips.',
      'Technologies used: ',
      'TypeScript, React, CSS, GoogleAPI'
    ],
    image: weatherAppLogo,
    images: [SWAdisplay, SWAhome, SWAsettings] 
  },
  
  // Add more projects as necessary...
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects">
        <h2>My Projects</h2>

        <div className="github-link">
          <p>All projects can be found on my GitHub:</p>
          <a href="https://github.com/Niclai" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub Logo" />
          </a>
        </div>

        <div className="project-container">
            {projectData.map((project) => (
                <button 
                    key={project.id} 
                    onClick={() => openModal(project)}
                    className="project-button"
                >
                <div 
                    className="project-image"
                    style={{ backgroundImage: `url(${project.image})` }}
                />
                <span className="project-name">{project.name}</span>
            </button>
        ))}
    </div>

    {selectedProject && (
      <div className="modal">
        <div className="modal-header">
          <h3>{selectedProject.name}</h3>
          <button className="close-button" onClick={closeModal}>X</button>
        </div>
        {selectedProject.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {selectedProject.images.map((image, index) => (
          <img key={index} 
          src={image} 
          alt="" 
          className={selectedProject.id === 1 ? "fdm-project" : "weather-app-project"} />
        ))}
      </div>
    )}
    </section>
  );
};

export default Projects;

