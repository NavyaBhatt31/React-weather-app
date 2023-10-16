// WeatherDisplay.js
import React from 'react';
import './App.css';

const WeatherDisplay = ({ name, weatherdata }) => {
  return (
    <div className="App">
      {/* Your Weather Display JSX */}
      <div>
        <p>Hi, {name}</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
