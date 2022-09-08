import React from "react";
import { Link } from "react-router-dom";
import "../styles/Signup.css";
import doctor from '../assets/images/doctor1.png';
import donor from '../assets/images/donor.png';
import patient from '../assets/images/patient.png';

export default function SigninForm(){
    return(
        <div className="signin-container">
            <div className="signin-form">
                <p className="welcome-text">Welcome back to DocTalk</p>
                <p className="signin-text">Signin as a</p>
                <div className="user-types">
                    <Link to="/login/doctor"><div className="user-type"><img alt="doctor" src={doctor}/>Doctor</div></Link>
                    <Link to="/login/donor"><div className="user-type"><img alt="donor" src={donor}/>Donor</div></Link>
                    <Link to="/login/patient"><div className="user-type"><img alt="patient" src={patient}/>Patient</div></Link>
                </div>
            </div>
        </div>
    )
};
