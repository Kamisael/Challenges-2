import React from 'react';
import './App.css';

const Navbar = ({ setPage }) => {
  return (
    <nav>
      <ul>
        <li>
          <button className="nav-button" onClick={() => setPage('Home')}>
            Home
          </button>
        </li>
        <li>
          <button className="nav-button" onClick={() => setPage('About')}>
            About
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
