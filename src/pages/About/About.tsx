import React from 'react';
import './styles.css';

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">VIN Decoder</h1>
      <p className="about-desc">
        <b>VIN Decoder</b> — це сучасний веб-додаток для розшифровки VIN-кодів автомобілів.
        Ви можете швидко отримати детальну інформацію про транспортний засіб, а також переглянути історію останніх запитів.
      </p>
      <div className="about-block">
        <h2>Можливості:</h2>
        <ul>
          <li>Декодування VIN-коду</li>
          <li>Перегляд історії запитів</li>
          <li>Детальна інформація про змінні</li>
          <li>Зручний інтерфейс</li>
        </ul>
      </div>
      <div className="about-block">
        <h2>Технології:</h2>
        <ul>
          <li>React</li>
          <li>Zustand</li>
          <li>Vite</li>
        </ul>
      </div>
    </div>
  );
}
