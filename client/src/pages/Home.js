import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import headingPhoto from "../assets/images/heading.png";
import Services1 from "../assets/images/service1.png";
import Services2 from "../assets/images/service2.png";
import Services3 from "../assets/images/service3.png";
import Services4 from "../assets/images/service4.png";
import Services5 from "../assets/images/service5.png";
import Services6 from "../assets/images/service6.png";
import contact from "../assets/images/contact.png";
import helpingHand1 from "../assets/images/helpingHand1.png";
import helpingHand2 from "../assets/images/helpingHand2.png";
import helpingHand3 from "../assets/images/helpingHand3.png";
import helpingHand4 from "../assets/images/helpingHand4.png";
import helpingHand5 from "../assets/images/helpingHand5.png";
import helpingHand6 from "../assets/images/helpingHand6.png";
import { BsPersonSquare,BsEnvelopeFill,BsFillBookmarkFill,BsMessenger } from 'react-icons/bs';

import { Link } from "react-router-dom";

import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="heading">
          <div className="heading__info">
            <div className="heading__info__title">DocTalk</div>
            <div className="heading__info__subtitle">
              MedHelp just a click away...
            </div>
            <button className="heading__info__cta">Get In Touch</button>
          </div>
          <div className="heading__lcp">
            <img src={headingPhoto} alt="heading" width="600" height="600" />
          </div>
        </div>
        <div className="about">About</div>
        <div className="services">
          <h4>Services</h4>
          <div className="services-container">
            <div
              className="service-box"
              style={{ backgroundImage: `url(${Services1})` }}
            >
              <h3 style={{ color: "#FFFFFF", fontWeight: "500", zIndex: "2" }}>
                Plasma Donor
              </h3>  
              <div className="overlay"></div>
              <Link className="view-btn" to={"/plasmadonor"}>View</Link>
            </div>
            <div
              className="service-box"
              style={{ backgroundImage: `url(${Services2})` }}
            >
              <h3 style={{ color: "#FFFFFF", fontWeight: "500", zIndex: "2" }}>
                Hospital Beds
              </h3>
              <div className="overlay"></div>
              <Link className="view-btn" to={"/hospitalbed"}>View</Link>
            </div>
            <div
              className="service-box"
              style={{ backgroundImage: `url(${Services3})` }}
            >
              <h3 style={{ color: "#FFFFFF", fontWeight: "500", zIndex: "2" }}>
                Oxygen Supplier
              </h3>
              <div className="overlay"></div>
              <Link className="view-btn" to={"/osupplier"}>View</Link>
            </div>
            <div
              className="service-box"
              style={{ backgroundImage: `url(${Services4})` }}
            >
              <h3 style={{ color: "#FFFFFF", fontWeight: "500", zIndex: "2" }}>
                Ambulances
              </h3>
              <div className="overlay"></div>
              <Link className="view-btn" to={"/ambulances"}>View</Link>
            </div>
            <div
              className="service-box"
              style={{ backgroundImage: `url(${Services5})` }}
            >
              <h3 style={{ color: "#FFFFFF", fontWeight: "500", zIndex: "2" }}>
                Medicines
              </h3>
              <div className="overlay"></div>
              <Link className="view-btn" to={"/medicines"}>View</Link>
            </div>
            <div
              className="service-box"
              style={{ backgroundImage: `url(${Services6})` }}
            >
              <h3 style={{ color: "#FFFFFF", fontWeight: "500", zIndex: "2" }}>
                Doctors
              </h3>
              <div className="overlay"></div>
              <Link className="view-btn" to={"/doctors"}>View</Link>
            </div>
          </div>
        </div>
        <div className="helping-hand">
          <h4>Helping Hand</h4>
          <div className="helping-container">
            <div className="helping-box">
              <div className="image-container">
                <img src={helpingHand1} alt="" />
              </div>
              <h5>Ambulance</h5>
              <p>
                Sometimes booking an ambulance might be a very hectic task as
                ambulances might not be available while you are in an emergency.
                To make matters a bit better for everyone list an ambulance
                provider down below.
              </p>
              <Link className="view-btn" to={"/regambulances"}>Contact</Link>
            </div>
            <div className="helping-box">
              <div className="image-container">
                <img src={helpingHand2} alt="" />
              </div>
              <h5>Oxygen</h5>
              <p>
                In the era of the pandemic of Covid-19, the world has seen a
                shortage of oxygen supply. To put an end to it we request you to
                click the button below to list an oxygen supplier you know of.
              </p>
              <Link className="view-btn" to={"/regoxygensuppliers"}>Contact</Link>
            </div>
            <div className="helping-box">
              <div className="image-container">
                <img src={helpingHand3} alt="" />
              </div>
              <h5>Plasma</h5>
              <p>
                Every drop off the plasma you donate can help a person to come
                back from doom’s door. So, for the sake of a human life, a life
                which you will be able to save only if you just step up and
                donate. click on the button below to add yourself or someone you
                know who is willing to donate plasma onto our list of plasma
                donors.
              </p>
              <Link className="view-btn" to={"/donateplasma"}>Contact</Link>
            </div>
            <div className="helping-box">
              <div className="image-container">
                <img src={helpingHand4} alt="" />
              </div>
              <h5>Medicines</h5>
              <p>
                In there of everything being online why will one have to go to
                the pharmacy to pick up the medicines? Add yourself by clicking
                the button below, or someone you know of as a medicine supplier
                so that the ones in need can get their medicines supplied to
                them.
              </p>
              <Link className="view-btn" to={"/regmedicines"}>Contact</Link>
            </div>
            <div className="helping-box">
              <div className="image-container">
                <img src={helpingHand5} alt="" />
              </div>
              <h5>Doctor</h5>
              <p>
                In this 21st Century, you can also register yourself as a doctor
                if you are licensed. You can help millions of people through
                consultation by registering under this website.
              </p>
              <Link className="view-btn" to={"/doctorsregistration"}>Contact</Link>
            </div>
            <div className="helping-box">
              <div className="image-container">
                <img src={helpingHand6} alt="" />
              </div>
              <h5>Hospital Beds</h5>
              <p>
                For the sake of a human life, a life which you will be able to
                save only if you just step up and donate. click on the button
                below to add yourself or someone you know who is willing to
                donate plasma onto our list of plasma donors.
              </p>
              <Link className="view-btn" to={"/reghospitalbed"}>Contact</Link>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="contact__heading">Contact Us</div>
          <div className="contact__main">
            <div className="contact__form">
              <div className="input_container_name">
                <BsPersonSquare size={40} color="#0603E6"/>
                <input
                  type="text"
                  className="contact__form__name"
                  placeholder="Name"
                />
              </div>
              <div className="input_container_mail">
                <BsEnvelopeFill size={40} color="#0603E6"/>
                <input
                  type="text"
                  className="contact__form__email"
                  placeholder="Email"
                />
              </div>

              <div className="input_container">
                <BsFillBookmarkFill size={40} color="#0603E6"/>
                <input
                  type="text"
                  className="contact__form__subject"
                  placeholder="Subject"
                />
              </div>
              <div className="input_container">
                <BsMessenger size={40} color="#0603E6"/>
                <textarea
                  className="contact__form__message"
                  placeholder="Message"
                />
              </div>
              <button className="contact__form__button" type="submit">
                Contact
              </button>
            </div>
            <div className="contact__rightImage">
              <img src={contact} alt="contact-us" width="500" height="500" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
