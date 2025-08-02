import React, { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css'
import './App.css'
import App from './App.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Event from './Event.jsx';
import Home from './Home.jsx';
import Explore from './Explore.jsx';
import Portal from './Portal.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App/> 
    
  </StrictMode>,
)
