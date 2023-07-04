// Projects.js
import React, { useState } from 'react';
import FDMLogo from '../assets/FDMLogo.jpg'; // adjust the path as needed
import weatherAppLogo from '../assets/weatherAppLogo.jpg'; // adjust the path as needed


const projectData = [
  { id: 1, 
    name: 'FDM Flat Finder', 
    description: 'This is a university project tasked by FDM given to me. The task was developed to allow FDM consultants to advertise there properties to rent, and also allow them to look for properties. Similiar to existing websites such as rightmove but this platform is exclusive to FDM consultants. How this platform works is by consultants having there own profiles and login credentials. By using a login system each user will have there own unique website. As consultants can list their own property, other users can see who has submited that listing and can reach out to them for further information using the rent application form. Furthermore all rent applications sent to a listing can be linked back to a consultant. This gives the whole experience a personal touch as all actions can be traced back to a consultant. All the listings are externally saved and fetched from a mongo Database. This ensures real time updates to the data being displayed on the website.', image: FDMLogo 
  },

  { id: 2, 
    name: 'Student Weather App', 
    description: 'This project is a basic weather app with additional unique functions such as calculating the perfect time of day to study outside it based of user preferences. This project is targeted towards helping students in their day-to-day life.', 
    image: weatherAppLogo 
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
        <button onClick={closeModal}>Close</button>
        <h3>{selectedProject.name}</h3>
        <p>{selectedProject.description}</p>
        </div>
        )}
    </section>
  );
};

export default Projects;

