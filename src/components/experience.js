// Experience.js
import React from 'react';
import '../styles.css';
import { useState } from 'react';

import FerrariLogo from '../assets/ferrari.png'; 
import ThermoFisherLogo from '../assets/thermofisher.jpg'; 


const experienceData = [
    { id: 1, 
      classname: 'Ferrari',
      name: 'Ferrari', 
      description: [
        'During my work experience at Ferrari, I had the opportunity to engage in two key areas: examining real-time engine data and developing systematic production methods.',
        'Firstly, I utilized Excel to analyze real-time engine data, enabling me to conduct diagnostic assessments and calculate optimal efficiency. This involved carefully examining the data and applying analytical techniques to identify any potential issues or areas for improvement. By leveraging Excels capabilities, I was able to generate meaningful insights that contributed to enhancing engine performance.',
        'In addition, I played a role in improving production processes at Ferrari. I developed systematic production methods, which I later presented to the manufacturing team. This involved evaluating existing procedures and identifying areas where streamlining and optimization could be implemented. Through my analysis and innovative thinking, I proposed new methods that aimed to enhance productivity and efficiency in the manufacturing process.',
        'Overall, my work experience at Ferrari encompassed analyzing real-time engine data using Excel for diagnostic purposes and developing systematic production methods for the manufacturing team. These experiences allowed me to contribute to improving efficiency and performance in a highly esteemed automotive company like Ferrari.'
      ], 
      image: FerrariLogo,
    },
  
    { id: 2, 
      className: 'ThermoFisher',
      name: 'ThermoFisher Scientific', 
      description: [
        'During my work experience at ThermoFisher Scientific, I contributed to improving operational efficiency in drug development through two key responsibilities.',
        'Firstly, I created workflow diagrams, including PERT/flow charts, to evaluate experimental drugs and enhance work efficiency by identifying potential bottlenecks and streamlining processes.',
        'Secondly, I conducted hypothesis testing to assess the effectiveness of developing drugs, designing controlled experiments, gathering data, and performing statistical analyses to inform decision-making and guide further research efforts.',
        'These contributions allowed me to make a meaningful impact on optimizing operations and making informed decisions in drug development at ThermoFisher Scientific.',
      ],
      image: ThermoFisherLogo,
    },
    
    // Add more projects as necessary...
  ];
  
  const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);
  
    const openModal = (experience) => {
      setSelectedExperience(experience);
    };
  
    const closeModal = () => {
      setSelectedExperience(null);
    };
  
    return (
      <section id="experience">
          <h2>My Experience</h2>
  
  
          <div className="experience-container">
              {experienceData.map((experience) => (
                  <button 
                      key={experience.id} 
                      onClick={() => openModal(experience)}
                      className="experience-button"
                  >
                  <div 
                      className="experience-image"
                      style={{ backgroundImage: `url(${experience.image})` }}
                  />
              </button>
          ))}
      </div>
  
      {selectedExperience && (
        <div className="modal">
            <div className="modal-header">
                <h3>{selectedExperience.name}</h3>
                <button className="close-button" onClick={closeModal}>X</button>
            </div>
            {selectedExperience.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
      )}
      </section>
    );
  };
  
  export default Experience;
