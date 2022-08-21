import React from "react";
import "../styles/HospitalBed.css";

function HospitalBedDetails({ name, src }) {
  return (
    <div className="hospital-beds-details">
      <>
        <img src={src} title={name} alt={name} class="responsive-image"/>
        <div className="hospital-beds-title">
          <div className="hospital-beds-title-name">{name}</div>
        </div>
      </>
    </div>
  );
}

export default HospitalBedDetails;
