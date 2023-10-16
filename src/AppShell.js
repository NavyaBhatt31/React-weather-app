import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import WeatherDisplay from './WeatherDisplay';

const AppShell = () => {
  return (
    <Router>
      <Routes>
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/weather" element={<WeatherDisplay />} />
      </Routes>
    </Router>
  );
};

export default AppShell;
