import React, { useState } from 'react';
import Profile from './components/profile/Profile'; // Profile component
import About from './components/Abouts/About'; // About component
import CurrentJob from './components/CurrentJob/CurrentJob'; // Current Job component
import EducationalDetails from './components/EducationalDetails/EducationalDetails'; // Educational Details component
import SocialMediaLinks from './components/SocialMediaLinks/SocialMediaLinks'; // Social Media Links component
import './App.css'; // Main styling

function App() {
  const [activeSection, setActiveSection] = useState(''); // Empty string means all content is shown

  const handleNavLinkClick = (section) => {
    setActiveSection(section); // Show only the clicked section
  };

  return (
    <div className="app-container">
      {/* Profile Section */}
      <Profile />

      {/* Navigation Links */}
      <nav className="nav-links">
        <button
          className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => handleNavLinkClick('about')}
        >
          About
        </button>
        <button
          className={`nav-link ${activeSection === 'currentjob' ? 'active' : ''}`}
          onClick={() => handleNavLinkClick('currentjob')}
        >
          Current Job
        </button>
        <button
          className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
          onClick={() => handleNavLinkClick('education')}
        >
          Education
        </button>
        <button
          className={`nav-link ${activeSection === 'links' ? 'active' : ''}`}
          onClick={() => handleNavLinkClick('links')}
        >
          Links
        </button>
      </nav>

      {/* Routes for the Components */}
      <div className="content-section">
        {(!activeSection || activeSection === 'about') && <About />}
        {(!activeSection || activeSection === 'currentjob') && <CurrentJob />}
        {(!activeSection || activeSection === 'education') && <EducationalDetails />}
        {(!activeSection || activeSection === 'links') && <SocialMediaLinks />}
      </div>
    </div>
  );
}

export default App;
