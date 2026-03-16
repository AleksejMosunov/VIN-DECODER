import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <span className="footer-title">VIN Decoder</span>
        <span className="footer-copy">© {new Date().getFullYear()} vin-decoder.app</span>
        <span className="footer-links">
          <a href="https://github.com/AleksejMosunov/VIN-DECODER" target="_blank" rel="noopener noreferrer">GitHub</a>
        </span>
      </div>
    </footer>
  );
}
