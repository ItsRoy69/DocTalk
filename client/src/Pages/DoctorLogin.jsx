import React from "react";
import './DoctorLogin.scss';
import Logo from '../images/DocTalk.jpeg'

const DoctorLogin = () => {


    return (
        <div className="login">
                <img className="logo" src={Logo} alt="DocTalk Logo" />
            <div className="container">
                <form>
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit" className="submitBTN">Login</button>
                </form>
            </div>
        </div>
    );

}

export default DoctorLogin;