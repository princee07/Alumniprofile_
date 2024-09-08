import React from 'react';
import './EducationalDetails.css'; // Ensure this file has the necessary styling

const EducationalDetails = () => {
  return (
    <div className="educational-details-section">
      <h2>Educational Details</h2>
      <div className="educational-details-content">
        <img src="path/to/education-logo.jpg" alt="Education Logo" className="education-logo" /> {/* Replace with actual logo */}
        <div className="education-info">
          <p className="institution-name">Satyug Darshan Institute of Engineering and Technology</p>
          <p className="degree">B.Tech in Computer Science Engineering</p>
        </div>
      </div>
    </div>
  );
};

export default EducationalDetails;
