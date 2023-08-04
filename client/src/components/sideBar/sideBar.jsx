import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './Sidebar.css'; 

export default function Sidebar() {

  return (
<nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">logo</a>
        <ul className="nav-menu">
          <li className="nav-item"><a href="/home">Inicio</a></li>
          <li className="nav-item"><a href="/detail">Perfil</a></li>
          <li className="nav-item"><a href="/servicios">Servicios</a></li>
          <li className="nav-item"><a href="/contacto">Backout</a></li>
        </ul>
      </div>
    </nav>
  );
}

