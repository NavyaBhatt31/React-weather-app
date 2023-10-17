import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './App.css';

const RegistrationForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitHandler = (data) => {
    // Call the onSubmit prop to handle the registration data in the parent component
    onSubmit(data);

    // Redirect to the weather page
    navigate('/weather');
  };

  return (
    <div className="App">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
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
    </div>
  );
};

export default RegistrationForm;
