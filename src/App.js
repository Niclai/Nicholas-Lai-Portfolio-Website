// App.js
import React from 'react';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Education from './components/education';
import Experience from './components/experience';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <About />
        <Education />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
