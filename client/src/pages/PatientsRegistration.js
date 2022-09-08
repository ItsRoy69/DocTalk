import React,{  useState, useEffect } from "react";
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import "../styles/PatientsRegistration.css";
import { BsPersonSquare,BsGlobe,BsEnvelopeFill } from 'react-icons/bs';

function PatientsRegistration() {

    const [formData, setFormData] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [illness, setIllness] = useState();
    const [exactLocation, setExactLocation] = useState();

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
        const myRequest = new Request("http://localhost:5000/register",request);
        fetch(myRequest).then(function (response) {
            return response;
        }).then(function (response) {
            console.log(response);
        }).catch(function (e) {
            console.log(e);
        });
    }

    useEffect(()=>{
        setFormData({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            illness: illness,
            exactLocation: exactLocation
        });
    },[firstName,lastName,email,password,illness,exactLocation]);

    const image_size = 30;

    return (
    <>
        <Navbar/>
        <div className='patients-registration'>
            <h2 className='heading'>Add Yourself as Plasma Donor</h2>
            <form onSubmit={(e)=>{handleSubmit(); e.preventDefault();}} className='patients-registration-form'>
                <div className="input-field">
                    <div className="input-image">
                    <BsPersonSquare size={image_size} color="#0603E6"/>
                    </div>
                    <input value={firstName} type="text" onChange={(e)=>{setFirstName(e.target.value)}} placeholder='First Name'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <BsPersonSquare size={image_size} color="#0603E6"/>
                    </div>
                    <input value={lastName} type="text" onChange={(e)=>{setLastName(e.target.value)}} placeholder='Last Name'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <BsEnvelopeFill size={image_size} color="#0603E6"/>
                    </div>
                    <input value={email} type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
                </div>
                <div className="input-field">
                    <input value={password} type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <BsGlobe size={image_size} color="#0603E6"/>
                    </div>
                    <input value={exactLocation} type="text" onChange={(e)=>{setExactLocation(e.target.value)}} placeholder='Exact Location'/>
                </div>
                <div className="input-field">
                    <input value={illness} type="text" onChange={(e)=>{setIllness(e.target.value)}} placeholder='Illness'/>
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

export default PatientsRegistration
