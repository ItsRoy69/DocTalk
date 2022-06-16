import React from 'react';
import { useState } from "react";

import logo from '../assets/images/logo.png';
import '../styles/Navbar.css';



const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false);


  return (
    <nav className="navbar">
      <div className="navbar__slogan">
        <div className="navbar__slogan__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__slogan__name">DocTalk</div>
      </div>
      <div className="navbar__links">
        <ul>
          <li>
            <a href="/" >Home</a>
          </li>
          <li>
            <a href="/" >About Us</a>
          </li>
          <li>
            <a href="/" >Donors</a>
          </li>
          <li>
            <a href="/" >Donate</a>
          </li>
          <li>
            <a href="/" >Doctors</a>
          </li>
          <li>
            <a href="/" >Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar__hamburger-menu" onClick={() => setShowMenu(value => !value)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navbar__mobile-side-nav ${showMenu ? "navbar__mobile-side-nav--show":''}`}>
        <ul>
          <div className="navbar__mobile-side-nav__exit" onClick={() => setShowMenu(false)}>X</div>
          <li>
            <a href="/" >Home</a>
          </li>
          <li>
            <a href="/" >About Us</a>
          </li>
          <li>
            <a href="/" >Donors</a>
          </li>
          <li>
            <a href="/" >Donate</a>
          </li>
          <li>
            <a href="/" >Doctors</a>
          </li>
          <li>
            <a href="/" >Contact</a>
          </li>
        </ul>
      </div>
      <div className={`navbar__shadow ${showMenu ? "navbar__shadow--show":''}`} onClick={() => setShowMenu(false)}></div>
    </nav>
  )
}

export default Navbar
