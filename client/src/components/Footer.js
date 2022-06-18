import React from "react";
import "../styles/Footer.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-logo-container">
          <div className="logo-title">
            <div className="footer-logo">
              <img src={logo} alt="logo" />
            </div>
            <h2>DocTalk</h2>
          </div>
          <p>MedHelp just a click away</p>
        </div>
        <div className="footer-section">
          <h4 style={{ fontSize: "32px",fontWeight:"700" }}>Services</h4>
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
          <h4 style={{ fontSize: "32px",fontWeight:"700" }}>Help</h4>
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
            <Link to="/">Ambulances </Link>
          </p>
          <p>
            <Link to="/">Medicine Supply </Link>
          </p>
          <p>
            <Link to="/">Register as Doctor </Link>
          </p>
        </div>
        <div className="footer-section">
          <h4 style={{ fontSize: "32px",fontWeight:"700" }}>Links</h4>
          <p>
            <Link to="/">Instagram</Link>
          </p>
          <p>
            <Link to="/">Facebook</Link>
          </p>
          <p>
            <Link to="/">Twitter </Link>
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Footer;
