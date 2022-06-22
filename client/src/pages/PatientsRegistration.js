import React from 'react'
import Navbar from '../components/Navbar'
import "../styles/PatientsRegistration.css";
import name from "../assets/images/PersonSquare.png";
import country from "../assets/images/Globe.png";
import phone from "../assets/images/TelephoneFill.png";
import city from "../assets/images/Building.png";
import address from "../assets/images/HouseFill.png";
import bloodGroup from "../assets/images/DropletHalf.png";
import mail from "../assets/images/EnvelopeFill.png";

function PatientsRegistration() {
  return (
    <>
        <Navbar/>
        <div className='patients-registration'>
            <h2 className='heading'>Add Yourself as Plasma Donor</h2>
            <form className='patients-registration-form'>
                <div className="input-field">
                    <div className="input-image">
                        <img src={name} alt="" />
                    </div>
                    <input type="text" placeholder='Name'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                        <img src={country} alt="" />
                    </div>
                    <input type="text" placeholder='Country'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                        <img src={phone} alt="" />
                    </div>
                    <input type="text" placeholder='Phone'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                        <img src={city} alt="" />
                    </div>
                    <input type="text" placeholder='City'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                        <img src={address} alt="" />
                    </div>
                    <input type="text" placeholder='Address'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                        <img src={bloodGroup} alt="" />
                    </div>
                    <input type="text" placeholder='Blood Group'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                        <img src={mail} alt="" />
                    </div>
                    <input type="text" placeholder='Mail'/>
                </div>
                <div className="btn-field">
                    <button>Register</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default PatientsRegistration