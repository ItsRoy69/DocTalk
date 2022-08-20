import React from "react";
import "../styles/Footer.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="logo-title-container">
					<Link to="/">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
          </div>
					</Link>
          <h3 style={{ fontSize: "25px", fontWeight: "700" }}>DocTalk</h3>
          <p>MedHelp Just A Click Away !</p>
        </div>

        <div className="footer-section">
          <h3 style={{ fontSize: "25px", fontWeight: "700" }}>Services</h3>
          <p>
            <Link to="/">Oxygen Supplier</Link>
          </p>
          <p>
            <Link to="/">Hospital Beds</Link>
          </p>
          <p>
            <Link to="/">Plasma Donors </Link>
          </p>
          <p>
            <Link to="/">Ambulance Provider </Link>
          </p>
          <p>
            <Link to="/">Medicines </Link>
          </p>
          <p>
            <Link to="/">Doctors </Link>
          </p>
        </div>
        <div className="footer-section">
          <h3 style={{ fontSize: "25px", fontWeight: "700" }}>Help</h3>
          <p>
            <Link to="/">Oxygen Supplier</Link>
          </p>
          <p>
            <Link to="/">Hospital Beds</Link>
          </p>
          <p>
            <Link to="/">Donate your Plasma </Link>
          </p>
          <p>
            <Link to="/ambulances">Ambulances </Link>
          </p>
          <p>
            <Link to="/">Medicine Supply </Link>
          </p>
          <p>
            <Link to="/doctorsregistration">Register as Doctor </Link>
          </p>
        </div>
        <div className="footer-section">
          <h3 style={{ fontSize: "25px", fontWeight: "700" }}>Social</h3>
          <p>
            <Link to="/">
              <FiInstagram /> Instagram
            </Link>
          </p>
          <p>
            <Link to="/">
              <FiFacebook /> Facebook
            </Link>
          </p>
          <p>
            <Link to="/">
              <FiTwitter /> Twitter{" "}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
