import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import "../styles/Medicines.css";

const Medicines = () => {
  const ENDPOINT_BACKEND = "http://localhost:5000";
  const [medsData, setMedsData] = useState([]);

  useEffect(() => {
    axios.get(`${ENDPOINT_BACKEND}/meds`).then((resp) => {
      setMedsData(resp.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Medicines</h1>
      <div className="med-container">
        <div className="med-cards">
          {medsData.map((med) => (
            <div className="med-card">
              <img
                src="https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="med"
              />
              <div className="med-card-body">
                <h2>{med.medName}</h2>
                <p>{med.description}</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3 style={{ color: "gray" }}>RS.{med.price}</h3>
                    <button className="med-buy-btn">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Medicines;
