import React from "react";
import { Link } from "react-router-dom";
import "../styles/Signup.css";
import doctor from '../assets/images/doctor1.png';
import donor from '../assets/images/donor.png';
import patient from '../assets/images/patient.png';

export default function SignupForm(){
    return(
        <div className="signup-container">
            <div className="signup-form">
                <p className="welcome-text">Welcome to DocTalk</p>
                <p className="signup-text">Signup as a</p>
                <div className="user-types">
                    <Link to="/doctorsregistration"><div className="user-type"><img alt="doctor" src={doctor}/>Doctor</div></Link>
                    <Link to="/donateplasma"><div className="user-type"><img alt="donor" src={donor}/>Donor</div></Link>
                    <Link to="/patientsregistration"><div className="user-type"><img alt="patient" src={patient}/>Patient</div></Link>
                </div>
                <Link to="/signin"><p className="signin-route">Already have an account? Click here.</p></Link>
            </div>
        </div>
    )
};
