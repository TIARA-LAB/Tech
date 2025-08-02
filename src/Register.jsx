
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    skill: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    const alreadyExists = existingUsers.find(user => user.email === formData.email);
    if (alreadyExists) {
      alert('User already exists!');
      return;
    }

    existingUsers.push(formData);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Registration successful!');
    navigate('/login'); // redirect to login after register
  };

  return (
    <div className="auth-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input name="fullName" value={formData.fullName} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <label>Skill/Interest</label>
        <input name="skill" value={formData.skill} onChange={handleChange} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
