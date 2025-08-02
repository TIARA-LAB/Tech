import React, { useState } from 'react';
import {Link} from 'react-router-dom';


const Navbar = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-brand">Tech Connect</div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
