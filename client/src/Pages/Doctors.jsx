import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./Doctors.scss";
import { AiFillCaretRight } from "react-icons/ai";
import doctor from "../images/random-doctor.jpg";
import doctorDetailsArr from "../components/Doctors/doctorDetailsArr";

function Doctors() {
  
  const [doctorDetailsList,setDoctorDetailsList] = useState(doctorDetailsArr);
  const [currSelected,setCurrSelected] = useState(0);

  const specializationsArr = [
    "General Physician",
    "Ear-Nose-Throat(ENT)",
    "Gynecologist",
    "Obstetrician",
    "Laparoscopic Surgeon",
    "General Surgeon",
    "Proctologist",
    "Hair Transplant Surgeon",
    "Plastic Reconstruction Surgeon",
    "Plastic Surgeon",
    "Cosmetologist",
    "Liver Transplant Surgeon",
    "Hepato-Biliary-Pancreatic",
    "Urologist",
  ];

  const changeSpecialization = (value,idx)=>{
    const newDoctorDetailsList = doctorDetailsArr.filter((item)=>item.specializations==value);
    setDoctorDetailsList([...newDoctorDetailsList]);
    if(window.innerWidth<=920) window.scrollTo(0, 900);
    else window.scrollTo(0,300);
    setCurrSelected(idx);
  }

  return (
    <>
      <Navbar />
      <div className="doctors-container">
        <div className="banner">
          <h2>Doctors</h2>
        </div>
        <div className="doctor-names-container">
          <div className="left-container">
            <div className="heading">
              <h5>SPECIALIZATIONS</h5>
            </div>
            <div className="specializations">
              {specializationsArr.map((item, idx) => {
                return (
                  <div
                    className="specializations-name"
                    key={`specialization${idx}`}
                    onClick={()=>{changeSpecialization(item,idx)}}
                    style={idx===currSelected ? {background:"aliceblue"} : {}}
                  >
                    <p>{item}</p>
                    <AiFillCaretRight size={15} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right-container">
            {
              <h3>{doctorDetailsList[0].specializations}</h3>
            }
            <div className="doctor-details-container">
              {
                doctorDetailsList[0].doctors.map((item,idx)=>{
                  return (

                  <div className="doctor" key={`doctor${idx}`}>
                    <img src={item.image} alt="" />
                    <p style={{color: "#0076bd"}}>{item.name}</p>
                    <p>{item.qualification}</p>
                  </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Doctors;
