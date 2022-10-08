import React from "react";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/OxygenSupplier.css";

import OxygenSupplier from "../components/OxygenSupply.js";
import { oxygenSuppliers } from "../data/oxygenSuppliers.js";
// import { banner } from "../data/oxygenSupplier";

import { BsSearch as Search } from "react-icons/bs";
import CreatableSelect from "react-select/creatable";

const getDistinctLocations = (data) => {
  const allZones = [].concat(
    data.map((oxygenSupplier) => oxygenSupplier.location.city)
  );
  let distinctSet = new Set(allZones);
  return [...distinctSet].map((zone) => ({ value: zone, label: zone }));
};

const OxygenSupplierPage = () => {
  document.title = "Oxygen Supplier | DocTalk";

  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false); // Later controlled by states when fetching from database
  const Zones = getDistinctLocations(oxygenSuppliers);
  const [locatedOxygenSuppliers, setLocatedOxygenSuppliers] = useState([]);

  useEffect(() => {
    onChangeLocatedOxygenSuppliers();
  }, [location]);

  const onChangeLocatedOxygenSuppliers = () => {
    setLoading(true); // start fetching from DB
    setLocatedOxygenSuppliers(
      location
        ? oxygenSuppliers.filter(
            (oxygenSupplier) => oxygenSupplier.location.city === location
          )
        : []
    );
    setLoading(false); // completed fetch from DB
  };

  const handleSelect = (e) => {
    if (!e) {
      setLocation("");
    } else {
      setLocation(e.value);
    }
  };

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 2000); // Loading time to mimic database fetching time
  // }, [loading]);

  return (
    <>
      <Navbar />

      <div className="head-container">
        <div className="search-container">
          <div className="p-2 bd-highlight">
            <h3 className="oxygenSupplierHeading">
              Available Oxygen Suppliers
            </h3>
          </div>
          <div className="p-2 bd-highlight">
            <div className="searchBar">
              <Search className="searchIcon" size="35" color="#0603E6" />
              <CreatableSelect
                className="oxygenSupplierSelectBox"
                onChange={handleSelect}
                placeholder="Select a location"
                options={Zones}
                // menuPortalTarget={document.querySelector("body")}
                isClearable
              />
            </div>
          </div>
        </div>
      </div>

      <div className="loading-container">
        {loading ? (
          <h5 style={{ textAlign: "center" }}>Loading...</h5>
        ) : locatedOxygenSuppliers.length ? (
          locatedOxygenSuppliers.map((item) => (
            <OxygenSupplier oxygenSupplier={item} key={item._id} />
          ))
        ) : (
          <h5 style={{ textAlign: "center" }}>
            Currently no Oxygen Suppliers or Services were found in the selected
            region.
          </h5>
        )}
      </div>

      <Footer />
    </>
  );
};

export default OxygenSupplierPage;
