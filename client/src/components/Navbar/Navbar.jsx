import React from 'react';
import './Navbar.css'
import doctalk from '../../images/DocTalk.jpeg';

import { BrowserRouter as Route, Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <div style={{ paddingLeft: "40px", paddingRight: "90px" }} >
                <nav className="navbar navbar-expand-lg navbar-light " >
                    <div className="container-fluid">
                        <h3 className="navbar-brand"><Link className="header" to={"/"}><img src={doctalk} alt="Image"/></Link></h3>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-ul">
                                <li className="nav-item home" >
                                    <Link to={"/"} className="navbar-link">Home</Link>
                                </li>
                                <li className="nav-item home" >
                                    <Link to={"/contact"} className="navbar-link">About Us</Link>
                                </li>

                                <li class="nav-item dropdown home">
                                    <p className="navbar-link dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown">Donors</p>

                                    <ul class="dropdown-menu">
                                      <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/medssupply">Meds Suppliers</a></li>
                                      <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/ambulanceprovider">Ambulance Providers</a></li>
                                      <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/plasma">Plasma Donors</a></li>
                                      <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/oxygensupply">Oxygen Suppliers</a></li>
                                      <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/hospitalbeds">Hospital Beds</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown home">
                                    <p className="navbar-link dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown">Donate</p>

                                    <ul class="dropdown-menu">
                                      <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/medssupplycontact">Send Meds</a></li>
                                      <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/ambulanceprovidercontact">Send Ambulance</a></li>
                                      <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/plasmadonorcontact">Send Plasma</a></li>
                                      <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/oxygensupplycontact">Send Oxygen</a></li>
                                      <li style={{ margin: "0px" }} ><a class="dropdown-item" href="/hospitalbedcontact">Send Hospital Beds</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
