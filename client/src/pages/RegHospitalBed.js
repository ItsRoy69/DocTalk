import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../styles/RegHospitalBed.css";
import user from '../assets/images/user.png';
import countryImg from '../assets/images/country.png';
import cityImg from '../assets/images/city.png';
import phoneImg from '../assets/images/phone.png';
import hospitalImg from '../assets/images/hospital1.png';
import addressImg from '../assets/images/address.png';
import hospitalbed from '../assets/images/hospital-bed.png';

function RegHospitalBed() {
    return (
    <>
        <Navbar/>
        <div className='hospital-bed-registration'>
            <h2 className='heading'>Hospital Bed Supplier Registration</h2>
            <form className='registration-body'>
                <div className='hospital-bed-registration-form'>
                    <div className="input-field">
                        <img src={user} alt="first-name"/>
                        <input type="text" placeholder='Name'/>
                    </div>
                    <div className="input-field">
                        <img src={hospitalImg} alt="hospital"/>
                        <input type="text" placeholder='Hospital Name'/>
                    </div>
                    <div className="input-field">
                        <img src={phoneImg} alt="phone"/>
                        <input type="text" placeholder='Phone'/>
                    </div>
                    <div className="input-field">
                        <img src={addressImg} alt="address"/>
                        <input type="text" placeholder='Address'/>
                    </div>
                    <div className="input-field">
                        <img src={countryImg} alt="country"/>
                        <input type="text" placeholder='Country'/>
                    </div>
                    <div className="input-field">
                        <img src={cityImg} alt="city"/>
                        <input type="text" placeholder='City'/>
                    </div>
                    <div className="input-field">
                        <img src={hospitalbed} alt="hospitalbed"/>
                        <input type="text" placeholder='Beds Available'/>
                    </div>
                </div>
                <div className="btn-field">
                    <button className='register-button'>Register</button>
                </div>
            </form>
        </div>
        <Footer/>
    </>
  )
}

export default RegHospitalBed
