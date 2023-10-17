// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file
import RegistrationForm from './RegistrationForm';
import WeatherDisplay from './WeatherDisplay';
import { getWeatherData } from './data/weatherapi';
import AppShell from './AppShell';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [registrationData, setRegistrationData] = useState(null);
  const [weatherdata, setWeatherData] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Fetch a random background image on component mount
    fetchRandomBackground();
  }, []);

  const fetchRandomBackground = () => {
    const numImagesAvailable = 1000; // Adjust this number based on the available images on Unsplash
    const randomImageIndex = Math.floor(Math.random() * numImagesAvailable);

    fetch(`https://source.unsplash.com/collection/your-collection-id/?sig=${randomImageIndex}`)
      .then((response) => {
        setBackgroundImage(response.url);
      });
  };

  const handleRegistrationSubmit = (data) => {
    setRegistrationData(data);
    getWeatherData(data.city)
      .then((weather) => setWeatherData(weather))
      .catch((error) => console.log(error.message));
  };

  return (
    <Router>
      <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {!registrationData ? (
          <RegistrationForm onSubmit={handleRegistrationSubmit} />
        ) : (
          <WeatherDisplay name={registrationData.name} weatherdata={weatherdata} />
        )}
        <AppShell />
      </div>
    </Router>
  );
}

export default App;
