import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader.js";

const Home = lazy(() => import("./pages/Home.jsx"));
const PlasmaDonor = lazy(() => import("./pages/PlasmaDonor.js"));
const HospitalBed = lazy(() => import("./pages/HospitalBed.js"));
const OxygenSupplier = lazy(() => import("./pages/OxygenSupplier.js"));
const Ambulances = lazy(() => import("./pages/Ambulances.jsx"));
const Doctors = lazy(() => import("./pages/Doctors.js"));
const Medicines = lazy(() => import("./pages/Medicines.js"));
const DonatePlasma = lazy(() => import("./pages/DonatePlasma.js"));
const RegHospitalBed = lazy(() => import("./pages/RegHospitalBed.js"));
const RegOxygenSupply = lazy(() => import("./pages/RegOxygenSupply.js"));
const RegAmbulance = lazy(() => import("./pages/RegAmbulance.js"));
const RegMedicine = lazy(() => import("./pages/RegMedicine.js"));
const PatientsRegistration = lazy(() => import("./pages/PatientsRegistration.js"));
const DoctorsRegistration = lazy(() => import("./pages/DoctorsRegistration.js"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop.js"));
const Signup = lazy(() => import("./pages/Signup"));
const Signin = lazy(() => import("./pages/Signin.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));

const App = () => {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<Loader />}>
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
            <Route exact path="/regoxygensuppliers" element={<RegOxygenSupply />} />
            <Route exact path="/regambulances" element={<RegAmbulance />} />
            <Route exact path="/regmedicines" element={<RegMedicine />} />
            <Route exact path="/patientsregistration" element={<PatientsRegistration />} />
            <Route exact path="/doctorsregistration" element={<DoctorsRegistration />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
