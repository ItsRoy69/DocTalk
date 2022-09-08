import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignupForm from '../components/SignupForm';

function Signup() {
  return (
      <div className='form-container'>
          <Navbar/>
          <SignupForm/>
          <Footer/>
      </div>
    );
};

export default Signup;
