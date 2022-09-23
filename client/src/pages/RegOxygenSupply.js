import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../styles/RegOxygenSupply.css";
import user from '../assets/images/user.png';
import countryImg from '../assets/images/country.png';
import cityImg from '../assets/images/city.png';
import phoneImg from '../assets/images/phone.png';
import addressImg from '../assets/images/address.png';

const RegOxygenSupply = () => {
    return (
    <>
        <Navbar />

            <div className='oxygen-supplier'>
                <h2 className='heading'>Oxygen Supplier Registration</h2>
                <form className='registration-body'>
                    <div className='oxygen-supplier-form'>
                        <div className="input-field">
                            <img src={user} alt="first-name"/>
                            <input type="text" placeholder='Name'/>
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
                    </div>
                    <div className="btn-field">
                        <button className='register-button'>Register</button>
                    </div>
                </form>
            </div>

    <Footer />
    </>
)
}

export default RegOxygenSupply;
