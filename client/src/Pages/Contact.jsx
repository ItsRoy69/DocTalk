import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.jpg';

import './Contact.css';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="about">
        <h1>About Us</h1>
        <div className="about__boxes">
          <div className="about__box">
            <div className="about__boximg">
              <img src={pic2} alt="servicesimg" />
            </div>
            <h2>Tamal Das</h2>
            <p>Backend Developer</p>
          </div>
          <div className="about__box">
            <div className="about__boximg">
              <img src={pic1} alt="aboutsimg" />
            </div>
            <h2>Jyotirmoy Roy</h2>
            <p>Team Lead & Developer</p>
          </div>
          <div className="about__box">
            <div className="about__boximg">
              <img src={pic3} alt="aboutsimg" />
            </div>
            <h2>Parna Chowdhury</h2>
            <p>Designer & Technical Writer</p>
          </div>
        </div>


      </div>
      <Footer />
    </>
  );
};

export default Contact;
