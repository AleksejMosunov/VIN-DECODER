import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className='nav-container'>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/variables" className="nav-link">Variables</Link>
      <Link to="/about" className="nav-link">About</Link>
    </nav>
  );
}
