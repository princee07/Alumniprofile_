import React from 'react';
import './SocialMediaLinks.css'; // Ensure this file has the necessary styling

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links-section">
      <h2>Social Media Links</h2>
      <div className="social-media-links-content">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-media-link">
          <img src="path/to/linkedin-logo.png" alt="LinkedIn Logo" className="social-media-logo" /> {/* Replace with actual logo */}
          <span className="social-media-name">LinkedIn</span>
        </a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-media-link">
          <img src="path/to/github-logo.png" alt="GitHub Logo" className="social-media-logo" /> {/* Replace with actual logo */}
          <span className="social-media-name">GitHub</span>
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="social-media-link">
          <img src="path/to/twitter-logo.png" alt="Twitter Logo" className="social-media-logo" /> {/* Replace with actual logo */}
          <span className="social-media-name">Twitter</span>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
