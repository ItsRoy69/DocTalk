import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import "../styles/RegHospitalBed.css";

import { BsPersonSquare,BsTelephoneFill,BsGlobe,BsBuilding,BsFillHouseFill} from 'react-icons/bs';
import { FaBed, FaRegHospital} from "react-icons/fa";

const image_size = 30;

function RegHospitalBed() {
  return (
    <>
        <Navbar/>
        <div className='hospital-bed-registration'>
            <h2 className='heading'>Hospital Bed Supplier Registration</h2>
            <form className='hospital-bed-registration-form'>
                <div className="input-field">
                    <div className="input-image">
                    <BsPersonSquare size={image_size} color="#0603E6"/>
                    </div>
                    <input type="text" placeholder='Name'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <FaRegHospital size={image_size} color="#0603E6"/>
                    </div>
                    <input type="text" placeholder='Hospital Name'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <BsTelephoneFill size={image_size} color="#0603E6"/>
                    </div>
                    <input type="text" placeholder='Phone'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <BsFillHouseFill size={image_size} color="#0603E6"/>
                    </div>
                    <input type="text" placeholder='Address'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <BsGlobe size={image_size} color="#0603E6"/>
                    </div>
                    <input type="text" placeholder='Country'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <BsBuilding size={image_size} color="#0603E6"/>
                    </div>
                    <input type="text" placeholder='City'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <FaBed size={image_size} color="#0603E6"/>
                    </div>
                    <input type="text" placeholder='Beds Available'/>
                </div>
                <div className="btn-field">
                    <button>Register</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default RegHospitalBed
