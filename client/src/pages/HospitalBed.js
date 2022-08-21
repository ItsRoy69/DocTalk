import { Select } from "antd";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/HospitalBed.css";
import hospitalBedData from "../data/hospitalBedData";
import HospitalBedDetails from "../components/HospitalBedDetails";
const { Option } = Select;

const HospitalBed = () => {
  const [secondColumnStart, setSecondColumnStart] = useState(
    Math.floor(hospitalBedData[0].hospitalBeds.length / 2)
  );
  const [hospitalBedDataList, setHospitalBedDataList] = useState(
    hospitalBedData[0].hospitalBeds
  );

  const handleChange = (value) => {
    const newHospitalBedDetailsArr = hospitalBedData.filter(
      (item) => item.hospitalName === value
    );

    setHospitalBedDataList(newHospitalBedDetailsArr[0].hospitalBeds);
    setSecondColumnStart(
      Math.floor(newHospitalBedDetailsArr[0].hospitalBeds.length / 2)
    );
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
      <div className="rows">
        <div className="column">
          {hospitalBedDataList.slice(0, secondColumnStart).map((item, idx) => {
            return <HospitalBedDetails {...item} key={idx} />;
          })}
        </div>
        <div className="column">
          {hospitalBedDataList.slice(secondColumnStart).map((item, idx) => {
            return <HospitalBedDetails {...item} key={idx} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HospitalBed;
