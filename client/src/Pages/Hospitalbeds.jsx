import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const hospitalbeds = () => {
  return (
    <>
    <Navbar/>
      <div className="hospitalbeds" style={{"background-color": "#C9ECFF"}}>

          <div className="container pt-5">
            <p className="display-6 fw-bold m-auto">Available Hospital Beds</p>
            <br/>
            <p className="lead m-auto">
                Available hospital beds around you:
            </p>
        </div>

        <div className="container">
            <div className="row">
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3 mb-4 p-3">
                    <a className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
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


                    <a className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" href="#" id="refresh-button" role="button">
                        Refresh Page
                    </a>
                </div>
            </div>
        </div>


        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Page Status</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    Page Refreshed...
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Okay</button>
                </div>
            </div>
            </div>
        </div>


        <div className="container">
            <div className="table-responsive">
                <table className="table table-hover border-danger">
                    <thead className="table text-white" style={{"background-color": "#2FA4FF"}}>
                        <th style={{"paddingLeft": "15px"}}>Hospital Name</th>
                        <th>Contact Name</th>
                        <th>Phone No</th>
                        <th>Address</th>
                        <th>Beds</th>
                        <th>Time Submitted</th>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Ratna Hospital</td>
                            <td>Rinu Das</td>
                            <td>9876543210</td>
                            <td>Kolkata</td>
                            <td>100</td>
                            <td>2 days ago</td>
                        </tr>
                        <tr>
                            <td>Roxy Clinic</td>
                            <td>Renu Singh</td>
                            <td>9876543210</td>
                            <td>Punjab</td>
                            <td>50</td>
                            <td>5 days ago</td>
                        </tr>
                        <tr>
                            <td>Mumbai Hospital</td>
                            <td>Monal Kohli</td>
                            <td>9876543210</td>
                            <td>Mumbai</td>
                            <td>0</td>
                            <td>2 days ago</td>
                        </tr>
                        <tr>
                            <td>Bangalore Hospital</td>
                            <td>Nandini Verma</td>
                            <td>9876543210</td>
                            <td>Bangalore</td>
                            <td>4</td>
                            <td>6 days ago</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="lead mt-5">To Share any Information related to Available Hospital Beds</p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3 mb-3">
                <Link to="/hospitalbedcontact">
                    <button className="buttons">Add Information about Hospital Beds</button>
                </Link>
            </div>
        </div>
        <Footer/>

      </div>
      </>
  );
};

export default hospitalbeds;
