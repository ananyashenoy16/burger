// Navbar.js

import React from 'react';

import '../css/Navbar.css';
import panda from '../images/burger3.webp';


function Navbar(){
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src={panda} 
          alt="Panda Logo"
          className="logo"
        />
        <span className="brand-name">Burger Bliss</span>
      </div>
       <ul className="nav-links">
        <li><a>Home</a></li>
        <li><a>About Us</a></li>
        <li><a  href="https://www.zomato.com/mangalore/delivery?dishv2_id=9055" target='_blank'>Order Now</a></li>
        <li><a >Contact</a></li>
      </ul> 
     
 </nav>

  );
    }

export default Navbar;
