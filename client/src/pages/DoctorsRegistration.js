import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../styles/DoctorsRegistration.css";
import user from '../assets/images/user.png';
import emailImg from '../assets/images/email.png';
import passwordImg from '../assets/images/password.png';
import countryImg from '../assets/images/country.png';
import cityImg from '../assets/images/city.png';
import phoneImg from '../assets/images/phone.png';
import hospitalImg from '../assets/images/hospital1.png';
import specialityImg from '../assets/images/stethoscope.png';


function DoctorsRegistration() {

    const [formData, setFormData] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [country,setCountry] = useState();
    const [phone,setPhone] = useState();
    const [city,setCity] = useState();
    const [hospitalName,setHospitalName] = useState();
    const [speciality,setSpecialty] = useState();

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

        const myRequest = new Request("http://localhost:5000/doctor",request);
        fetch(myRequest).then(function (response) {
            return response;
        }).then(function (response) {
            console.log(response);
        }).catch(function (e) {
            console.log(e);
        });
    };

    useEffect(()=>{
        setFormData({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            country: country,
            phone: phone,
            city: city,
            hospital_name: hospitalName,
            speciality: speciality
        })
    },[firstName, lastName, email, password,country,phone,city,hospitalName,speciality]);

    return (
        <>
            <Navbar/>
            <div className='doctors-registration'>
                <p className='heading'>Add Yourself as Doctor</p>
                    <form onSubmit={(e)=>{handleSubmit(); e.preventDefault();}} className='registration-body'>
                        <div className="doctors-registration-form">
                            <div className="input-field">
                                <img src={user} alt="first-name"/>
                                <input value={firstName} type="text" onChange={(e)=>{setFirstName(e.target.value)}} placeholder='First Name'/>
                            </div>
                            <div className="input-field">
                                <img src={user} alt="last-name"/>
                                <input value={lastName} type="text" onChange={(e)=>{setLastName(e.target.value)}} placeholder='Last Name'/>
                            </div>
                            <div className="input-field">
                                <img src={emailImg} alt="email"/>
                                <input value={email} type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
                            </div>
                            <div className="input-field">
                                <img src={passwordImg} alt="password"/>
                                <input value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
                            </div>
                            <div className="input-field">
                                <img src={countryImg} alt="country"/>
                                <input value={country}Img type="text" onChange={(e)=>{setCountry(e.target.value)}} placeholder='Country'/>
                            </div>
                            <div className="input-field">
                                <img src={phoneImg} alt="phone"/>
                                <input value={phone} type="text" onChange={(e)=>{setPhone(e.target.value)}} placeholder='Phone'/>
                            </div>
                            <div className="input-field">
                                <img src={cityImg} alt="city"/>
                                <input value={city} type="text" onChange={(e)=>{setCity(e.target.value)}} placeholder='City'/>
                            </div>
                            <div className="input-field">
                                <img src={hospitalImg} alt="hospital"/>
                                <input value={hospitalName} type="text" onChange={(e)=>{setHospitalName(e.target.value)}} placeholder='Hospital Name'/>
                            </div>
                            <div className="input-field">
                                <img src={specialityImg} alt="specialty"/>
                                <input value={speciality} type="text" onChange={(e)=>{setSpecialty(e.target.value)}} placeholder='Speciality'/>
                            </div>
                        </div>
                        <div className="btn-field">
                            <button className="register-button" type="submit">Register</button>
                        </div>
                    </form>

            </div>
            <Footer/>
        </>
)
};

export default DoctorsRegistration;
