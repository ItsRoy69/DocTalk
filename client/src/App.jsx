import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./Pages/Landingpage";
import DoctorLogin from "./Pages/DoctorLogin";
import DoctorRegistration from "./Pages/DoctorRegister";
import Plasmadonor from "./Pages/Plasmadonor";
import Hospitalbeds from "./Pages/Hospitalbeds";
import Oxygensuppliers from "./Pages/Oxygensupply";
import Medssuppliers from "./Pages/Medssuppliers";
import Ambulanceprovider from "./Pages/Ambulanceproviders";
import Plasmadonorcontact from "./Pages/Plasmadonorcontact";
import Hospitalbedcontact from "./Pages/Hospitalbedcontact";
import Oxygensupplycontact from "./Pages/Oxygensupplycontact";
import Medssuppliercontact from "./Pages/Medssuppliercontact";
import Ambulanceprovidercontact from "./Pages/Ambulanceprovidercontact";
import Contact from "./Pages/Contact";
import { useEffect } from "react";
import Docstate from "./context/Docstate";

function App() {
    return (
        <>
            <Docstate>
                <Router>
                    {/* <Navbar /> */}
                    <Switch>
                        <Route path="/" exact component={LandingPage} />
                        <Route path="/doctor/login" component={DoctorLogin} />
                        <Route path="/doctor/register" component={DoctorRegistration} />
                        <Route path="/plasma" exact component={Plasmadonor} />
                        <Route path="/hospitalbeds" exact component={Hospitalbeds} />
                        <Route path="/oxygensupply" exact component={Oxygensuppliers} />
                        <Route path="/medssupply" exact component={Medssuppliers} />
                        <Route
                            path="/ambulanceprovider"
                            exact
                            component={Ambulanceprovider}
                        />
                        <Route
                            path="/plasmadonorcontact"
                            exact
                            component={Plasmadonorcontact}
                        />
                        <Route
                            path="/hospitalbedcontact"
                            exact
                            component={Hospitalbedcontact}
                        />
                        <Route
                            path="/oxygensupplycontact"
                            exact
                            component={Oxygensupplycontact}
                        />
                        <Route
                            path="/medssupplycontact"
                            exact
                            component={Medssuppliercontact}
                        />
                        <Route
                            path="/ambulanceprovidercontact"
                            exact
                            component={Ambulanceprovidercontact}
                        />
                        <Route path="/contact" exact component={Contact} />
                    </Switch>
                </Router>
            </Docstate>

        </>
    );
}

export default App;
