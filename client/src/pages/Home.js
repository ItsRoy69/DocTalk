import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import headingPhoto from '../assets/images/heading.png';
import Background1 from '../assets/images/service1.png';
import Background2 from '../assets/images/service2.png';
import Background3 from '../assets/images/service3.png';
import Background4 from '../assets/images/service4.png';
import Background5 from '../assets/images/service5.png';
import Background6 from '../assets/images/service6.png';

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
              <div className="service-box" style={{backgroundImage:`url(${Background1})`}}>
                  <h3 style={{color:"#FFFFFF",fontWeight:"500",zIndex:"2"}}>Plasma Donor</h3>
                  <div className="overlay"></div>
                  <button className='view-btn'>View</button>
              </div>
              <div className="service-box" style={{backgroundImage:`url(${Background2})`}}>
                  <h3 style={{color:"#FFFFFF",fontWeight:"500",zIndex:"2"}}>Hospital Beds</h3>
                  <div className="overlay"></div>
                  <button className='view-btn'>View</button>
              </div>
              <div className="service-box" style={{backgroundImage:`url(${Background3})`}}>
                  <h3 style={{color:"#FFFFFF",fontWeight:"500",zIndex:"2"}}>Oxygen Supplier</h3>
                  <div className="overlay"></div>
                  <button className='view-btn'>View</button>
              </div>
              <div className="service-box" style={{backgroundImage:`url(${Background4})`}}>
                  <h3 style={{color:"#FFFFFF",fontWeight:"500",zIndex:"2"}}>Ambulances</h3>
                  <div className="overlay"></div>
                  <button className='view-btn'>View</button>
              </div>
              <div className="service-box" style={{backgroundImage:`url(${Background5})`}}>
                  <h3 style={{color:"#FFFFFF",fontWeight:"500",zIndex:"2"}}>Medicines</h3>
                  <div className="overlay"></div>
                  <button className='view-btn'>View</button>
              </div>
              <div className="service-box" style={{backgroundImage:`url(${Background6})`}}>
                  <h3 style={{color:"#FFFFFF",fontWeight:"500",zIndex:"2"}}>Doctors</h3>
                  <div className="overlay"></div>
                  <button className='view-btn'>View</button>
              </div>
          </div>
        </div>
        Be A Helping Hand
        Contact        
      </div>  
      <Footer />

    </>
  )
}

export default Home
