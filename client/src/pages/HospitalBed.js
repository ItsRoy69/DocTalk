import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import "../styles/HospitalBed.css";

const HospitalBed = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        HospitalBeds
      </div>
      <Footer />
    </>
  )
}

export default HospitalBed
