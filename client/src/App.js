import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import PlasmaDonor from "./pages/PlasmaDonor.js";
import HospitalBed from "./pages/HospitalBed.js";
import OxygenSupplier from "./pages/OxygenSupplier.js";
import Ambulances from "./pages/Ambulances.jsx";
import Doctors from "./pages/Doctors.js";
import Medicines from "./pages/Medicines.js";
import DonatePlasma from "./pages/DonatePlasma.js";
import RegHospitalBed from "./pages/RegHospitalBed.js";
import RegOxygenSupply from "./pages/RegOxygenSupply.js";
import RegAmbulance from "./pages/RegAmbulance.js";
import RegMedicine from "./pages/RegMedicine.js";
import PatientsRegistration from "./pages/PatientsRegistration.js";
import DoctorsRegistration from "./pages/DoctorsRegistration.js";
import ScrollToTop from "./components/ScrollToTop.js";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin.jsx";
import Login from "./pages/Login.jsx";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/plasmadonor" element={<PlasmaDonor />} />
          <Route exact path="/hospitalbed" element={<HospitalBed />} />
          <Route exact path="/osupplier" element={<OxygenSupplier />} />
          <Route exact path="/ambulances" element={<Ambulances />} />
          <Route exact path="/doctors" element={<Doctors />} />
          <Route exact path="/medicines" element={<Medicines />} />
          <Route exact path="/donateplasma" element={<DonatePlasma />} />
          <Route exact path="/reghospitalbed" element={<RegHospitalBed />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/login/:type" element={<Login />} />
          <Route exact path="/regoxygensuppliers" element={<RegOxygenSupply />}/>
          <Route exact path="/regambulances" element={<RegAmbulance />} />
          <Route exact path="/regmedicines" element={<RegMedicine />} />
          <Route exact path="/patientsregistration" element={<PatientsRegistration />}/>
          <Route exact path="/doctorsregistration" element={<DoctorsRegistration />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
