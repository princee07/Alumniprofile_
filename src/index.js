import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import the global styles including background color
import App from './App';

// Render the App component inside the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
