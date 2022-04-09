import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './Services.css'

const Services = () => {
  return (
      <div className="services">
          <div className="container px-4 py-5" id="services">
            <h1>Services</h1>
            <hr class="solid" />
            <div className="servicecard">
              <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 align-items-stretch py-5">

                <div className="col p-2">
                    <div className="card1 card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                          <h2>Plasma Donors</h2>
                            <Link to="/plasma" className="btn btn-primary btn-lg px-4 mt-2 mb-5" target="_parent" role="button">
                                View
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col p-2">
                    <div className="card2 card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h2>Hospital Beds</h2>
                            <Link to="/hospitalbeds" className="btn btn-secondary btn-lg px-4 mt-2 mb-5"  target="_parent" role="button">
                                View
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col p-2">
                    <div className="card3 card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h2>Oxygen Suppliers</h2>
                            <Link to="/oxygensupply" className="btn btn-info btn-lg px-4 mt-2 mb-5" target="_parent" role="button">
                                View
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col p-2">
                    <div className="card4 card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h2>Meds Suppliers</h2>
                            <Link to="/medssupply" className="btn btn-success btn-lg px-4 mt-2 mb-5"  target="_parent" role="button">
                                View
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col p-2">
                    <div className="card5 card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h2>Ambulance Providers</h2>
                            <Link to="/ambulanceprovider" className="btn btn-danger btn-lg px-4 mt-2 mb-5"  target="_parent" role="button">
                                View
                            </Link>
                        </div>
                    </div>
                </div>
              </div>
            </div>

          </div>
      </div>
  );
};

export default Services;
