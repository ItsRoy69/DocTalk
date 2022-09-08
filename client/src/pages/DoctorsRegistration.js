import React, { useState, useEffect } from "react";
import { RiHospitalLine } from 'react-icons/ri';
import { FaStethoscope } from 'react-icons/fa';
import { BsPersonSquare,BsTelephoneFill,BsGlobe,BsBuilding } from 'react-icons/bs';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../styles/PatientsRegistration.css";


function DoctorsRegistration() {

    const [formData, setFormData] = useState();
    const [name,setName] = useState();
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

        const myRequest = new Request("http://localhost:5000/doctor-signup",request);
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
            name: name,
            country: country,
            phone: phone,
            city: city,
            hospital_name: hospitalName,
            speciality: speciality
        })
    },[name,country,phone,city,hospitalName,speciality]);

    const image_size = 30;

    return (
        <>
            <Navbar/>
            <div className='patients-registration'>
                <h2 className='heading'>Add Yourself as Doctor</h2>
                <form onSubmit={(e)=>{handleSubmit(); e.preventDefault();}} className='patients-registration-form'>
                    <div className="input-field">
                        <div className="input-image">
                            <BsPersonSquare size={image_size} color="#0603E6"/>
                        </div>
                        <input value={name} type="text" onChange={(e)=>{setName(e.target.value)}} placeholder='Name'/>
                    </div>
                    <div className="input-field">
                        <div className="input-image">
                            <BsGlobe size={image_size} color="#0603E6"/>
                        </div>
                        <input value={country} type="text" onChange={(e)=>{setCountry(e.target.value)}} placeholder='Country'/>
                    </div>
                    <div className="input-field">
                        <div className="input-image">
                        <BsTelephoneFill size={image_size} color="#0603E6"/>
                        </div>
                        <input value={phone} type="text" onChange={(e)=>{setPhone(e.target.value)}} placeholder='Phone'/>
                    </div>
                    <div className="input-field">
                        <div className="input-image">
                        <BsBuilding size={image_size} color="#0603E6"/>
                        </div>
                        <input value={city} type="text" onChange={(e)=>{setCity(e.target.value)}} placeholder='City'/>
                    </div>
                    <div className="input-field">
                        <div className="input-image">
                        <RiHospitalLine size={image_size} color="#0603E6"/>
                        </div>
                        <input value={hospitalName} type="text" onChange={(e)=>{setHospitalName(e.target.value)}} placeholder='Hospital Name'/>
                    </div>
                    <div className="input-field">
                        <div className="input-image">
                        <FaStethoscope size={image_size} color="#0603E6"/>
                        </div>
                        <input value={speciality} type="text" onChange={(e)=>{setSpecialty(e.target.value)}} placeholder='Speciality'/>
                    </div>
                    <div className="btn-field">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
            <Footer/>
        </>
  )
};

export default DoctorsRegistration;
