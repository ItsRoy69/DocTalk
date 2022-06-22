import React from 'react'
import "../styles/DoctorsDetails.css";
// import doctor from "../assets/images/Doctor.png";

function DoctorsDetails({name,phone,hospitalName,speciality,country,city,image}) {
  return (
    <div className='doctors-details'>
        <div className="details">
            <h5>Name : {name}</h5>
            <h5>phone : {phone}</h5>
            <h5>Hospital Name : {hospitalName}</h5>
            <h5>Speciality : {speciality}</h5>
            <h5>Country : {country}</h5>
            <h5>City : {city}</h5>
        </div>
        <div className="doctor-image">
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default DoctorsDetails