import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import "../styles/DonatePlasma.css";
import { BsPersonSquare,BsTelephoneFill,BsGlobe,BsBuilding,BsFillHouseFill,BsDropletHalf,BsEnvelopeFill } from 'react-icons/bs';

function DonatePlasma() {
  return (
    
    <>
        <Navbar/>
        <div className='donate-plasma'>
            <h2 className='heading'>Add Yourself as Plasma Donor</h2>
            <form className='donate-plasma-form'>
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
                    <BsFillHouseFill size={60} color="#0603E6"/>
                    </div>
                    <input type="text" placeholder='Address'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <BsDropletHalf size={60} color="#0603E6"/>
                    </div>
                    <input type="text" placeholder='Blood Group'/>
                </div>
                <div className="input-field">
                    <div className="input-image">
                    <BsEnvelopeFill size={60} color="#0603E6"/>
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

export default DonatePlasma
