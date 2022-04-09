import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { Link } from "react-router-dom";
import Doccontext from '../context/Doccontext';
import { uploadPlasma } from '../service/DoctalkApi';



const Plasmadonorcontact = () => {

  const context = useContext(Doccontext);
  const { plasmadonor, setplasmadonor } = context;

  const handleChange = (e) => {
    setplasmadonor({ ...plasmadonor, [e.target.name]: e.target.value });

  };

  const handleclick = async (e) => {
    const plasmadata = await uploadPlasma(plasmadonor)
    if (plasmadata.data.status === 200) {
      alert("DATA ADDED !! ")
      console.log(plasmadata);
    }

  }

  return (
    <>
      <Navbar />
      <div className="plasmadonorcontact" style={{ "background-color": "#C9ECFF" }}>
        <div className="container mt-1 p-4">
          <form className="border p-4 " style={{ "background-color": "#b3cfe4" }}>
            <h1 className="display-6 fw-bold mark text-center mb-5" style={{ "background-color": "#b3cfe4" }} >
              Add Yourself as a COVID-19 Plasma Donor
            </h1>

            <div className="form mb-4">
              <label for="floatingInput" className="p-1"><b>Name *</b></label>
              <input type="text" className="form-control" id="floatingInput" placeholder="Your Name..." name='name' value={plasmadonor.name}
                onChange={handleChange} />
            </div>

            <div className="form mb-4">
              <label for="floatingInput" className="p-1"><b>Phone Number *</b></label>
              <input type="text" maxlength="10" className="form-control" id="floatingInput" placeholder="+91 XXXXXXXXXXXX" name='ph' value={plasmadonor.ph}
                onChange={handleChange} />
            </div>

            <div className="form mb-4">
              <label for="inputState" className="form-label p-1"><b>Blood Group *</b></label>
              <select id="inputState" className="form-select">
                <option selected>Select your Blood Group</option>
                <option>A +</option>
                <option>A -</option>
                <option>B +</option>
                <option>B -</option>
                <option>O +</option>
                <option>O -</option>
                <option>AB +</option>
                <option>AB -</option>
              </select>
            </div>
            <div className="form mb-4">
              <label for="floatingInput" className="p-1"><b>When you were COVID Affected ? *</b></label>
              <input type="date" className="form-control" id="floatingInput" placeholder="Pick Date" name='cdate' value={plasmadonor.cdate}
                onChange={handleChange} />
            </div>

            <div className="form mb-4">
              <label for="floatingInput" className="p-1"><b>Address (optional)</b></label>
              <input type="text" className="form-control" id="floatingInput" name='address' value={plasmadonor.address}
                onChange={handleChange} />
            </div>

            <div className="form mb-4">
              <label for="inputState" className="form-label"><b>Choose your City *</b></label>
              <select id="inputState" className="form-select p-2">
                <option selected>Kolkata</option>
                <option>Delhi</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
                <option>Chennai</option>
                <option>Mumbai</option>
              </select>
            </div>

            <div className="form mb-4">
              <label for="floatingInput" className="p-1"><b>Pin Code</b></label>
              <input type="text" maxlength="6" className="form-control" id="floatingInput" placeholder="6 Digits only..." name='pincode' value={plasmadonor.pincode}
                onChange={handleChange} />
            </div>

            <div className="form-check mb-5">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
              <label className="form-check-label" for="invalidCheck">
                I hereby Agree to Terms and Conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
            <button className="button" href="#" type="submit" onClick={() => { handleclick() }}>
              Submit
            </button>
            <Link to="/plasma">
              <button className="buttoned" href="#" type="submit">
                View All Plasma Donors
              </button>
            </Link>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Plasmadonorcontact;
