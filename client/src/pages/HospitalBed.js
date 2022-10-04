import { Select } from "antd";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/HospitalBed.css";
import hospitalBedData from "../data/hospitalBedData";
import HospitalBedDetails from "../components/HospitalBedDetails";
const { Option } = Select;

const HospitalBed = () => {
  const [hospitalBedDataList, setHospitalBedDataList] = useState(
    hospitalBedData[0].hospitalBeds
  );

  const handleChange = (value) => {
    const newHospitalBedDetailsArr = hospitalBedData.filter(
      (item) => item.hospitalName === value
    );

    setHospitalBedDataList(newHospitalBedDetailsArr[0].hospitalBeds);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="drop-down">
          <h2 className="heading">Available Hospital Bed List</h2>
          <Select
            defaultValue="Grace Community Hospital"
            style={{
              width: 120,
            }}
            onChange={handleChange}
          >
            {hospitalBedData.map((item, idx) => {
              return (
                <Option key={idx} value={item.hospitalName}>
                  {item.hospitalName}
                </Option>
              );
            })}
          </Select>
        </div>
      </div>
      <div className="grid">
        <div className="row">
          {hospitalBedDataList.map((item, idx) => {
            return (
              <div className="col-4">
              <HospitalBedDetails {...item} key={idx} /> 
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HospitalBed;
