import React from 'react'
// RiHospitalLine
import { RiHospitalLine } from 'react-icons/ri';
import { FaStethoscope } from 'react-icons/fa';
import { BsPersonSquare,BsTelephoneFill,BsGlobe,BsBuilding } from 'react-icons/bs';
import Navbar from '../components/Navbar'
import "../styles/PatientsRegistration.css";


function DoctosRegistration() {
  return (
    <>
        <Navbar/>
        <div className='patients-registration'>
            <h2 className='heading'>Add Yourself as Doctor</h2>
            <form className='patients-registration-form'>
                <div className="input-field">
                    <div className="input-image">
                        <BsPersonSquare size={60} color="#0603E6"/>
                    </div>
                    <input type="text" placeholder='Name'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                        <BsGlobe size={60} color="#0603E6"/>
                    </div>
                    <input type="text" placeholder='Country'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <BsTelephoneFill size={60} color="#0603E6"/>
                    </div>
                    <input type="text" placeholder='Phone'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <BsBuilding size={60} color="#0603E6"/>
                    </div>
                    <input type="text" placeholder='City'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <RiHospitalLine size={60} color="#0603E6"/>
                    </div>
                    <input type="text" placeholder='Hospital Name'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <FaStethoscope size={60} color="#0603E6"/>
                    </div>
                    <input type="text" placeholder='Speciality'/>
                </div>
                <div className="btn-field">
                    <button>Register</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default DoctosRegistration