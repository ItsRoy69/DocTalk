import React from "react";
import { Link } from "react-router-dom";
import "../styles/Signup.css"

export default function SignupForm(){
    return(
        <div className="signup-container">
            <div className="signup-form">
                <h1>Welcome to DocTalk</h1>
                <h3>Signup as a</h3>
                <div className="user-types">
                    <Link to="/doctorsregistration"><div className="user-type">Doctor</div></Link>
                    <Link to="/donateplasma"><div className="user-type">Donor</div></Link>
                    <Link to="/patientsregistration"><div className="user-type">Patient</div></Link>
                </div>
            </div>
        </div>
    )
};
