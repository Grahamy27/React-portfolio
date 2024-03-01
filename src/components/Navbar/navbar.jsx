import React from 'react';
import './navbar.css';
import imagelogo from '../../assets/logo.png';

function Navbar() {
  return (
    <header>
      <h1>Graham McCullough Portfolio</h1>
      <nav className='navbar'>
        <div className='menu'>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;


