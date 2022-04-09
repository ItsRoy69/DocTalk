import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ambulanceproviders = () => {
  return (
    <>
      <Navbar/>
        <div className="ambulanceproviders" style={{"background-color": "#C9ECFF"}}>
          <div class="container pt-5">
            <p class="display-6 fw-bold m-auto">Available Ambulance Service Providers</p>
            <br/>
            <p class="lead m-auto">
                Available Ambulance providers around you:
            </p>
          </div>

          <div class="container">
            <div class="row">
              <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-3 mb-4 p-3">
                <a class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Select Your City from the dropdown
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                    <li><a class="dropdown-item active" href="#">Kolkata</a></li>
                    <li><a class="dropdown-item" href="#">Delhi</a></li>
                    <li><a class="dropdown-item" href="#">Bangalore</a></li>
                    <li><a class="dropdown-item" href="#">Hyderabad</a></li>
                    <li><a class="dropdown-item" href="#">Chennai</a></li>
                    <li><a class="dropdown-item" href="#">Mumbai</a></li>
                </ul>

                <a class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" href="#" id="refresh-button" role="button">
                    Refresh Page
                </a>
              </div>
            </div>
          </div>

          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="staticBackdropLabel">Page Status</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Page Refreshed...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Okay</button>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="table-responsive">
              <table class="table table-hover border-danger">
                <thead class="table text-white" style={{"background-color": "#2FA4FF"}}>
                  <th style={{"paddingLeft": "15px"}}>Driver Name</th>
                  <th>Mobile No</th>
                  <th>Address</th>
                  <th>Ambulance Number</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Rishav Talpade</td>
                    <td>9876543210</td>
                    <td>Behala, Kolkata</td>
                    <td>WB-01 KOL 5644</td>
                  </tr>
                  <tr>
                    <td>Joy Nandan</td>
                    <td>9876543210</td>
                    <td>Dharavi, Mumbai</td>
                    <td>MH-01 G 5644</td>
                  </tr>
                  <tr>
                    <td>Rohan Sinha</td>
                    <td>9876543210</td>
                    <td>Delhi</td>
                    <td>DL-01 XR 5644</td>
                  </tr>
                  <tr>
                    <td>Jitesh Rana</td>
                    <td>1234567890</td>
                    <td>Behala, Kolkata</td>
                    <td>WB-01 KOL 5669</td>
                </tr>
               </tbody>
              </table>
            </div>
            <p class="lead mt-5">To Share any Information related to Ambulance Service Providers</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-3 mb-3">
              <Link to="/ambulanceprovidercontact">
                <button className="buttons">Add Information about Ambulance Service Provider</button>
              </Link>
            </div>
          </div>
          <Footer/>
        </div>
      </>
  );
};

export default ambulanceproviders;
