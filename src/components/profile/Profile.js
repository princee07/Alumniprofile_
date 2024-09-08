import React from 'react';
import './Profile.css'; // Import the CSS file

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-photo">
          <img src="path/to/photo.jpg" alt="Profile" /> {/* Replace with actual photo */}
        </div>
        <div className="profile-info">
          <div className="profile-header">
            <h2>Sana Sharma</h2>
            <span className="profile-pronouns">(She/Her)</span>
          </div>
          <p>Learning Software Development</p>
          <p>UG CSE Engineer at SDIET</p>
          <p>Skills: React, C++</p>
          <div className="college-info">
            <img src="path/to/college-logo.jpg"  /> {/* Replace with actual logo */}
            <p>College Name</p>
          </div>
          <div className="follow-message-buttons">
            <button className="follow-button">Follow</button>
            <button className="message-button">Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
