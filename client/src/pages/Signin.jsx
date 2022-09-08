import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SigninForm from '../components/SigninForm';

function Signin() {
    return (
        <div className='form-container'>
            <Navbar/>
            <SigninForm/>
            <Footer/>
        </div>
    )
};

export default Signin;
