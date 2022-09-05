import React from 'react';
import { useState, useEffect } from "react";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import "../styles/OxygenSupplier.css";


import OxygenSupplier from "../components/OxygenSupply.js";
import {oxygenSuppliers} from "../data/oxygenSuppliers.js";
// import { banner } from "../data/oxygenSupplier";

import { BsSearch as Search } from "react-icons/bs";
import CreatableSelect from "react-select/creatable";

const getDistinctLocations = (data) => {
  const allZones = [].concat(data.map(oxygenSupplier => oxygenSupplier.location.city));
  const distinctSet = new Set(allZones);
  return [...distinctSet].map(zone => ({ value: zone, label: zone }));
};

const OxygenSupplierPage = () => {
  document.title = "Oxygen Supplier | DocTalk";
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false); // Later controlled by states when fetching from database
  const Zones = getDistinctLocations(oxygenSuppliers);
  const locatedOxygenSuppliers = location
    ? oxygenSuppliers.filter((oxygenSupplier) => oxygenSupplier.location.city === location)
    : oxygenSuppliers;
  const handleSelect = (e) => {
    setLoading(true);
    setLocation(e?.value);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Loading time to mimic database fetching time
  }, [loading]);

  return (
    <>
      <Navbar />

      <div className="container-fluid head-container">
        <h3 className="main-heading">Available Oxygen Suppliers</h3>
        <div className="searchBar">
          <Search size={40} color="#0603E6" />
          <div style={{ maxWidth: 450, width: "100%" }}>
            <CreatableSelect
              placeholder="Select Region"
              isClearable
              onChange={handleSelect}
              options={Zones}
              menuPortalTarget={document.querySelector("body")}
            />
          </div>
        </div>
      </div>

      <div className="container loading-container">
        {loading ? (
          <h5 style={{ textAlign: "center" }}>Loading...</h5>
        ) : locatedOxygenSuppliers.length ? (
          locatedOxygenSuppliers.map(item => 
            <OxygenSupplier oxygenSupplier={item} key={item._id} />
          )
        ) : (
          <h5 style={{ textAlign: "center" }}>
            Currently no Oxygen Suppliers or Services were found in the selected region. 
          </h5>
        )}
      </div>

      <Footer />
    </>
  );
};

export default OxygenSupplierPage;