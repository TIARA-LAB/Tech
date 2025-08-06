
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Portal from './Portal.jsx';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Event from './Event';
import Explore from './Explore.jsx';

const App = () => {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Register', href: '/register' },
    { label: 'Login', href: '/login' },
    { label: 'Event', href: '/Event' },
    { label: 'Explore', href: '/explore' }
  ];

  
  
  return (
    
    <Router>
      <Navbar links={navLinks} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/portal" element={<Portal />} />
        </Routes>
      </div>
    </Router>
    
  );
};

export default App;
