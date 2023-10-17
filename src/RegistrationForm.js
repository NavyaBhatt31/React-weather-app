// RegistrationForm.js

import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './App.css';

const RegistrationForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmitHandler = (data) => {
    onSubmit(data);
    navigate('/weather');
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="form">
      <h2>Registration Form</h2>

      <label>Name:</label>
      <input type="text" {...register('name', { required: true })} />
      {errors.name && <p className="error">Name is required</p>}

      <label>Gender:</label>
      <select {...register('gender', { required: true })}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
      </select>
      {errors.gender && <p className="error">Please select a gender</p>}

      <label>City:</label>
      <input type="text" {...register('city', { required: true })} />
      {errors.city && <p className="error">City is required</p>}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
