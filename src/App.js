import React, { useState } from 'react';
import './App.css';
import RegistrationForm from './RegistrationForm';
import WeatherDisplay from './WeatherDisplay';
import { getWeatherData } from './data/weatherapi';
import AppShell from './AppShell';
import { BrowserRouter as Router } from 'react-router-dom'; // Add this line

function App() {
  const [registrationData, setRegistrationData] = useState(null);
  const [weatherdata, setWeatherData] = useState(null);

  const handleRegistrationSubmit = (data) => {
    setRegistrationData(data);
    getWeatherData(data.city)
      .then((weather) => setWeatherData(weather))
      .catch((error) => console.log(error.message));
  };

  return (
    <Router> {/* Wrap the entire App component with Router */}
      <div className="App">
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
