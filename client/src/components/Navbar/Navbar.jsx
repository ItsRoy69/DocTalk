import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import innerLogo from "../../images/inner-logo.png";
import outerLogo from "../../images/outer-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

import { BrowserRouter as Route, Link } from "react-router-dom";

const Navbar = () => {
  const [closedNavbar, setClosedNavbar] = useState(true);
  
  return (
    <>
      <div
        className="navbar"
        style={
          window.innerWidth <= 881
            ? closedNavbar
              ? { gap: "0" }
              : { gap: "2rem" }
            : {}
        }
      >
        <div className="brand">
          <div className="logo">
            <img
              src={innerLogo}
              alt=""
              style={{ zIndex: "100" }}
              className="img1"
            />
            <img src={outerLogo} alt="" className="img2" />
          </div>
          <h3 style={{ marginBottom: "0.3rem" }}>DocTalk</h3>
        </div>
        <div
          className="navbar-content"
          style={
            window.innerWidth <= 881
              ? closedNavbar
                ? { height: "0" }
                : { height: "21rem" }
              : {}
          }
        >
          <ul
            style={
              window.innerWidth <= 881
                ? closedNavbar
                  ? { opacity: "0" }
                  : { opacity: "1" }
                : {}
            }
          >
            <li>
              <Link to={"/"} className="navbar-links">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/"} className="navbar-links">
                About Us
              </Link>
            </li>
            <li>
              <Link to={"/"} className="navbar-links">
                Donors
              </Link>
            </li>
            <li>
              <Link to={"/"} className="navbar-links">
                Donate
              </Link>
            </li>
            <li>
              <Link to={"/"} className="navbar-links">
                Doctors
              </Link>
            </li>
            <li>
              <Link to={"/"} className="navbar-links">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {window.innerWidth <= 881 && (
          closedNavbar ? 

          <div
            className="hamburger-menu"
            onClick={() => {
              setClosedNavbar(false);
            }}
          >
            <GiHamburgerMenu size={28} />
          </div>:
          <ImCross size={28}  className="hamburger-menu"
          onClick={() => {
            setClosedNavbar(true);
          }}/>
        )}
      </div>
    </>
  );
};

export default Navbar;
