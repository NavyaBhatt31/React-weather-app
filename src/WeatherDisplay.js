import React from 'react';
import './App.css';

const WeatherDisplay = ({ name, weatherdata }) => {
  if (!weatherdata || !weatherdata.weather) {
    // Handle the case where weatherdata is null or undefined
    return <div>No weather data available</div>;
  }

  return (
    <div className="App">
      <h2>Hey! {name.charAt(0).toUpperCase() + name.slice(1)} </h2>
      <h3>Live Weather Condition in {weatherdata.name}</h3>
      <div className="weather-icon">
        <img src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} alt="imgicon" />
      </div>
      <h3>{weatherdata.weather[0].main}</h3>
      <div className="temprature">
        <h1>{parseFloat(weatherdata.main.temp - 273.15).toFixed(1)}&deg;C</h1>
      </div>
      <div className="location">
        <h3><i className="fa fa-street-view"></i>{weatherdata.name} | {weatherdata.sys.country}</h3>
      </div>
      <div className="temprature-range">
        <h6>Min: {parseFloat(weatherdata.main.temp_min - 273.15).toFixed(1)}&deg;C 
          || Max: {parseFloat(weatherdata.main.temp_max - 273.15).toFixed(1)}&deg;C 
          || Humidity: {weatherdata.main.humidity}%
        </h6>
      </div>
    </div>
  );
};

export default WeatherDisplay;
