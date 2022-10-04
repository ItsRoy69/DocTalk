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
					<Link to="/" className="footer-img-link">
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
            <Link to="/osupplier">Oxygen Supplier</Link>
          </p>
          <p>
            <Link to="/hospitalbed">Hospital Beds</Link>
          </p>
          <p>
            <Link to="/plasmadonor">Plasma Donors </Link>
          </p>
          <p>
            <Link to="/ambulances">Ambulance Provider </Link>
          </p>
          <p>
            <Link to="/medicines">Medicines </Link>
          </p>
          <p>
            <Link to="/doctors">Doctors </Link>
          </p>
        </div>
        <div className="footer-section">
          <h3 style={{ fontSize: "25px", fontWeight: "700" }}>Help</h3>
          <p>
            <Link to="/regoxygensuppliers">Oxygen Supplier</Link>
          </p>
          <p>
            <Link to="/reghospitalbed">Hospital Beds</Link>
          </p>
          <p>
            <Link to="/donateplasma">Donate your Plasma </Link>
          </p>
          <p>
            <Link to="/regambulances">Ambulances </Link>
          </p>
          <p>
            <Link to="/regmedicines">Medicine Supply </Link>
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
