import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import headingPhoto from '../assets/images/heading.png';
import Services1 from '../assets/images/service1.png';
import Services2 from '../assets/images/service2.png';
import Services3 from '../assets/images/service3.png';
import Services4 from '../assets/images/service4.png';
import Services5 from '../assets/images/service5.png';
import Services6 from '../assets/images/service6.png';
import contact from '../assets/images/contact.png';

import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="heading">
          <div className="heading__info">
              <div className="heading__info__title">DocTalk</div>
              <div className="heading__info__subtitle">MedHelp just a click away...</div>
              <button className="heading__info__cta">Get In Touch</button>
          </div>
          <div className="heading__lcp">
              <img src={headingPhoto} alt="heading" width="600" height="600" />
          </div>
        </div>
        <div className="about">
          About
        </div>
        <div className='services'>
          <h4>Services</h4>
          <div className="services-container">
              <div className="service-box" style={{backgroundImage:`url(${Services1})`}}>
                  <h3 style={{color:"#FFFFFF",fontWeight:"500",zIndex:"2"}}>Plasma Donor</h3>
                  <div className="overlay"></div>
                  <button className='view-btn'>View</button>
              </div>
              <div className="service-box" style={{backgroundImage:`url(${Services2})`}}>
                  <h3 style={{color:"#FFFFFF",fontWeight:"500",zIndex:"2"}}>Hospital Beds</h3>
                  <div className="overlay"></div>
                  <button className='view-btn'>View</button>
              </div>
              <div className="service-box" style={{backgroundImage:`url(${Services3})`}}>
                  <h3 style={{color:"#FFFFFF",fontWeight:"500",zIndex:"2"}}>Oxygen Supplier</h3>
                  <div className="overlay"></div>
                  <button className='view-btn'>View</button>
              </div>
              <div className="service-box" style={{backgroundImage:`url(${Services4})`}}>
                  <h3 style={{color:"#FFFFFF",fontWeight:"500",zIndex:"2"}}>Ambulances</h3>
                  <div className="overlay"></div>
                  <button className='view-btn'>View</button>
              </div>
              <div className="service-box" style={{backgroundImage:`url(${Services5})`}}>
                  <h3 style={{color:"#FFFFFF",fontWeight:"500",zIndex:"2"}}>Medicines</h3>
                  <div className="overlay"></div>
                  <button className='view-btn'>View</button>
              </div>
              <div className="service-box" style={{backgroundImage:`url(${Services6})`}}>
                  <h3 style={{color:"#FFFFFF",fontWeight:"500",zIndex:"2"}}>Doctors</h3>
                  <div className="overlay"></div>
                  <button className='view-btn'>View</button>
              </div>
          </div>
        </div>
        Be A Helping Hand
        <div className="contact">
          <div className="contact__heading">Contact Us</div>
            <div className="contact__main">
              <div className="contact__form">
                <input
                  type="text"
                  className="contact__form__name"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="contact__form__email"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="contact__form__subject"
                  placeholder="Subject"
                />
                <textarea className="contact__form__message" placeholder="Message" />
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
  )
}

export default Home
