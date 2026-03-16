import React from 'react';
import Navigation from './Navigation';
import './Header.css';

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <span className="header-title">VIN Decoder</span>
        <Navigation />
      </div>
    </header>
  );
}
