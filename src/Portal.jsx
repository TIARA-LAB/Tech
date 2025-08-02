
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Portal = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const logged = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!logged) {
      navigate('/login');
    } else {
      setUser(logged);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  return user ? (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome, {user.fullName}!</h1>
      <p>Email: {user.email}</p>
      <p>Skill: {user.skill}</p>
      <button onClick={logout}>Logout</button>
    </div>
  ) : null;
};

export default Portal;
