import React, { useContext } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { Link } from "react-router-dom";
import Doccontext from '../context/Doccontext';
import { uploadDoctor } from '../service/DoctalkApi';



const Doctorcontact = () => {

  const context = useContext(Doccontext);
  const { doctor, setdoctor } = context;

  const handleChange = (e) => {
    setdoctor({ ...doctor, [e.target.name]: e.target.value });


  };

  const handleclick = async (e) => {
    const medsdata = await uploadDoctor()
    if (medsdata.data.status === 200) {
      alert("DATA ADDED !! ")
      console.log(medsdata);
    }

  }

  return (
    <>
      <Navbar />
      <div className="medssuppliercontact" style={{ "background-color": "#C9ECFF" }}>
        <div className="container mt-1 p-4">
          <form className="border p-4 " style={{ "background-color": "#b3cfe4" }}>
            <h1 className="display-6 fw-bold mark text-center mb-5" style={{ "background-color": "#b3cfe4" }} onClick={() => { handleclick() }} >
              Add a Speciality Doctor Contact
            </h1>
            <div className="form mb-4">
              <label for="inputSpeciality" className="form-label"><b>Speciality</b></label>
              <select id="inputSpeciality" className="form-select p-2">
                <option selected>Select Area of Specialization</option>
                <option>General Physician</option>
                <option>Ear-Nose-Throat (ENT) Specialist</option>
                <option>Gynecologist</option>
                <option>Obstetrician</option>
                <option>Laparoscopic Surgeon</option>
                <option>Proctologist</option>
                <option>Hair Transplant Surgeon</option>
                <option>Plastic Reconstruction Surgeon</option>
                <option>Plastic Surgeon</option>
                <option>Cosmetologist</option>
                <option>Liver Transplant Surgeon</option>
                <option>Hepato-Biliary-Pancreatic</option>
                <option>Urologist</option>
              </select>
            </div>

            <div className="form mb-4">
              <label for="floatingInput" className="p-1"><b>Doctor Name *</b></label>
              <input type="text" className="form-control" id="floatingInput" name='dname' value={doctor.dname} onChange={handleChange} />
            </div>

            <div className="form mb-4">
              <label for="floatingInput" className="p-1"><b>Phone Number *</b></label>
              <input type="text" maxlength="10" className="form-control" id="floatingInput" placeholder="+91 XXXXXXXXXXXX" name='ph' value={doctor.ph} onChange={handleChange} />
            </div>

            <div className="form mb-4">
              <label for="floatingInput" className="p-1"><b>Address *</b></label>
              <input type="text" className="form-control" id="floatingInput" name='address' value={doctor.address} onChange={handleChange} />
            </div>

            <div className="form mb-4">
              <label for="inputState" className="form-label p-1"><b>Choose your City *</b></label>
              <select id="inputState" className="form-select p-2">
                <option selected>Kolkata</option>
                <option>Delhi</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
                <option>Chennai</option>
                <option>Mumbai</option>
              </select>
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
            <button className="button" href="#" type="submit" >
              Submit
            </button>
            <Link to="/doctorinfo">
              <button className="buttoned" href="#" type="submit">
                View all Available Doctors 
              </button>
            </Link>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Doctorcontact;
