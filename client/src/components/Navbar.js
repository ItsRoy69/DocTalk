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
            <Link to="/">Home</Link>
          </li>
          <li>
            <HashLink  smooth to="/#about">
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
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <HashLink smooth to="/#contact">
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
      <div
        className="navbar__hamburger-menu"
        onClick={() => setShowMenu((value) => !value)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`navbar__mobile-side-nav ${
          showMenu ? "navbar__mobile-side-nav--show" : ""
        }`}
      >
        <ul>
          <div
            className="navbar__mobile-side-nav__exit"
            onClick={() => setShowMenu(false)}
          >
            X
          </div>
          <li>
            <Link to="/">Home</Link>
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
        </ul>
      </div>
      <div
        className={`navbar__shadow ${showMenu ? "navbar__shadow--show" : ""}`}
        onClick={() => setShowMenu(false)}
      ></div>
    </nav>
	)
};

export default Navbar;
