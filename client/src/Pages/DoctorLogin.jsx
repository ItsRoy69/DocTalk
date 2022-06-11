import React from "react";
import './DoctorLogin.css';
import Logo from '../images/DocTalk.jpeg'

const DoctorLogin = () => {

    const specializations = ["General Physician", "Ear-Nose-Throat (ENT) Specialist", "Gynecologist", "Obstetrician", "Laparoscopic Surgeon", "General Surgeon", "Proctologist", "Hair Transplant Surgeon", "Plastic Reconstruction Surgeon", "Plastic Surgeon", "Cosmetologist", "Liver Transplant Surgeon", "Hepato-Biliary-Pancreatic", "Urologist"]

    return (
        <div className="login">
                <img className="logo" src={Logo} alt="DocTalk Logo" />
            <div className="container">
                <form>
                    <input type="text" name="firstname" placeholder="First Name" />
                    <input type="text" name="lastname" placeholder="Last Name" />
                    <input type="text" name="hospital" placeholder="Hospital" />
                    <select name="Specialization">
                        <option value="">Select Specialization</option>
                        {specializations.map((specialization, index) => 
                            <option key={index} value={specialization}>{specialization}</option>
                        )}
                    </select>
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <input type="text" name="location" placeholder="Exact Location" />
                    <button type="submit" className="submitBTN">Submit</button>
                </form>
            </div>
        </div>
    );

}

export default DoctorLogin;