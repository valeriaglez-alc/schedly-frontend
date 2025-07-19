import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="nav-left">
          <a href="#">Registrar taller</a>
          <a href="#">Registrar Centro</a>
          <a href="#">Calendario de Actividades</a>
        </div>

        <div className="logo-container">
          <img src="/Schedly.svg" alt="Logo" className="logo-image" />
        </div>

        <div className="nav-right">
          <i className="fas fa-search"></i>
          <i className="fas fa-user"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
