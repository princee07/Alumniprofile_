import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/currentjob" className="nav-link">
          Current Job
        </NavLink>
        <NavLink to="/educationaldetails" className="nav-link">
          Education
        </NavLink>
        <NavLink to="/socialmedialinks" className="nav-link">
          Links
        </NavLink>
        
      </nav>
      
    </div>
   
  );
  
};

export default Navbar;
