import React,{useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import user from '../assets/images/user.png';
import countryImg from '../assets/images/country.png';
import cityImg from '../assets/images/city.png';
import phoneImg from '../assets/images/phone.png';
import hospitalImg from '../assets/images/hospital1.png';
import addressImg from '../assets/images/address.png';
import ambulance from '../assets/images/ambulance.png';

import "../styles/RegAmbulance.css";

const RegAmbulance = () => {
    const [formData, setFormData] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();
    const [address, setAddress] = useState();
    const [hospital_name, setHospital_Name] = useState();
    const [ambulances_available, setAmbulances_Available] = useState();

    useEffect(()=>(
        setFormData({
            name: name,
            phone: phone,
            city: city,
            address: address,
            hospital_name: hospital_name,
            country: country,
            ambulances_available: ambulances_available,
        })
    ),[name, phone, city, address, hospital_name, country, ambulances_available])

    function handleSubmit(){
        const request = {
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type': 'application/json'
            },
            redirect:'follow',
            referrerPolicy:'no-referrer',
            body: JSON.stringify({formData})
        };

        const myRequest = new Request("http://localhost:5000/ambulance",request);
        fetch(myRequest).then(function (response) {
            return response;
        }).then(function (response) {
            console.log(response);
        }).catch(function (e) {
            console.log(e);
        });
    }
    
    return (
    <>
        <Navbar />
        <div className='ambulance-registration'>
            <h2 className='heading'>Ambulance Supplier Registration</h2>
            <form className='registration-body' onSubmit={(e)=>{handleSubmit(); e.preventDefault();}}>
                <div className='ambulance-registration-form'>
                    <div className="input-field">
                        <img src={user} alt="first-name"/>
                        <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='Name'/>
                    </div>
                    <div className="input-field">
                        <img src={hospitalImg} alt="hospital"/>
                        <input value={hospital_name} onChange={(e)=> setHospital_Name(e.target.value)} type="text" placeholder='Hospital Name'/>
                    </div>
                    <div className="input-field">
                        <img src={phoneImg} alt="phone"/>
                        <input value={phone} onChange={(e)=> setPhone(e.target.value)} type="text" placeholder='Phone'/>
                    </div>
                    <div className="input-field">
                        <img src={addressImg} alt="address"/>
                        <input value={address} onChange={(e)=> setAddress(e.target.value)} type="text" placeholder='Address'/>
                    </div>
                    <div className="input-field">
                        <img src={countryImg} alt="country"/>
                        <input value={country} onChange={(e)=> setCountry(e.target.value)} type="text" placeholder='Country'/>
                    </div>
                    <div className="input-field">
                        <img src={cityImg} alt="city"/>
                        <input value={city} onChange={(e)=> setCity(e.target.value)} type="text" placeholder='City'/>
                    </div>
                    <div className="input-field">
                        <img src={ambulance} alt="ambulance"/>
                        <input value={ambulances_available} onChange={(e)=> setAmbulances_Available(e.target.value)} type="text" placeholder='Ambulances Available'/>
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

export default RegAmbulance;
