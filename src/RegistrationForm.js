import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const RegistrationForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');

  const handleRegister = () => {
    if (name && gender && city) {
      // Save registration data to local storage (example)
      saveRegistrationData({ name, gender, city });
      // Call the onSubmit prop to handle the registration data in the parent component
      onSubmit({ name, gender, city });

      // Redirect to the weather page
      navigate('/weather');
    }
  };

  const saveRegistrationData = (data) => {
    // Example: Save data to local storage
    localStorage.setItem('registrationData', JSON.stringify(data));
  };

  return (
    <div className="App">
      <h2>Registration Form</h2>

      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Gender:</label>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        {/* Options for gender */}
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
      </select>

      <label>City:</label>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegistrationForm;
