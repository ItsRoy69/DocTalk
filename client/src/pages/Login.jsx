import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

function Login() {
    return (
        <div className='form-container'>
            <Navbar/>
            <LoginForm/>
            <Footer/>
        </div>
    );
};

export default Login;
