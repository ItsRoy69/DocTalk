import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/images/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" style={{ color: "inherit" }}>
        <div className="navbar__slogan">
          <div className="navbar__slogan__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar__slogan__name">DocTalk</div>
        </div>
      </Link>
      <div className="navbar__links">
        <ul>
          <li>
            <HashLink smooth to="/#home">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about">
              About Us
            </HashLink>
          </li>
          <li>
            <Link to="/plasmaDonor">Donors</Link>
          </li>
          <li>
            <Link to="/doctors">Doctors</Link>
          </li>
          <li>
            <HashLink smooth to="/#contact">
              Contact
            </HashLink>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
      <div
        className="navbar__hamburger-menu"
        onClick={() => setShowMenu((value) => !value)}
      >
        <div className="navbar__hamburger-menu-container">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={`navbar__mobile-side-nav ${
          showMenu ? "navbar__mobile-side-nav--show" : ""
        }`}
      >
        <div
          className="navbar__mobile-side-nav__exit"
          onClick={() => setShowMenu(false)}
        >
          X
        </div>
        <div className="navbar__mobile-side-nav-container">
          <ul>
            <li>
              <HashLink
                smooth
                to="/#home"
                onClick={() => setShowMenu(!showMenu)}
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#about"
                onClick={() => setShowMenu(!showMenu)}
              >
                About Us
              </HashLink>
            </li>
            <li>
              <Link to="/plasmaDonor">Donors</Link>
            </li>
            <li>
              <Link to="/doctors">Doctors</Link>
            </li>
            <li>
              <HashLink
                smooth
                to="/#contact"
                onClick={() => setShowMenu(!showMenu)}
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`navbar__shadow ${showMenu ? "navbar__shadow--show" : ""}`}
        onClick={() => setShowMenu(false)}
      ></div>
    </nav>
  );
};

export default Navbar;
