import "antd/dist/antd.css";
import { Select } from "antd";
import React, { useState } from "react";
import doctorsDetailsArr from "../components/DoctorsDetailsArr";
import "../styles/Doctors.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DoctorsDetails from "../components/DoctorsDetails";
const { Option } = Select;

const Doctors = () => {

  const [doctorsDetailsList,setDoctorsDetailsList] = useState(doctorsDetailsArr[0].doctors);

  const handleChange = (value) => {
    const newDoctorsDetailsArr = doctorsDetailsArr.filter((item)=>item.specializations === value);
    console.log(newDoctorsDetailsArr);
    setDoctorsDetailsList(newDoctorsDetailsArr[0].doctors);
  };
  return (
    <>
      <Navbar />
      <div className="container">

        <div className="drop-down">
          <h2 className="heading">Available Doctors List</h2>
          <Select
            defaultValue="General Physician"
            style={{
              width: 120,
            }}
            onChange={handleChange}
          >
            {
              doctorsDetailsArr.map((item,idx)=>{
                return <Option key={idx} value={item.specializations}>{item.specializations}</Option>
              })
            }
    
          </Select>
        </div>
        <div className="doctors-details-container">
          {
           doctorsDetailsList.map((item,idx)=>{
            return <DoctorsDetails {...item} key={idx}/>
           }) 
          }
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Doctors;
