import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import WeatherDisplay from './WeatherDisplay';

const AppShell = () => {
  return (
      <Routes>
        <Route path="/registration" element={<RegistrationForm />} />
        {/* <Route path="/weather" element={<WeatherDisplay />} /> */}
      </Routes>
  );
};

export default AppShell;
