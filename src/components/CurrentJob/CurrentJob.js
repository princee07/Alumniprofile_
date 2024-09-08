import React from 'react';
import './CurrentJob.css'; // Ensure this file has the necessary styling

const CurrentJob = () => {
  return (
    <div className="current-job-section">
      <h2>Current Job</h2>
      <div className="current-job-content">
        <img src="path/to/company-logo.jpg" className="company-logo" /> {/* Replace with actual logo */}
        <div className="job-info">
          <p className="company-name">Tech Solutions Inc.</p>
          <p className="position">Software Developer</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentJob;
