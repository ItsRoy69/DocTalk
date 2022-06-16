import React from 'react'
import "../styles/Services.css";
import Background1 from '../assets/images/service1.png';
import Background2 from '../assets/images/service2.png';
import Background3 from '../assets/images/service3.png';
import Background4 from '../assets/images/service4.png';
import Background5 from '../assets/images/service5.png';
import Background6 from '../assets/images/service6.png';


function Services() {
  return (
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
  )
}

export default Services