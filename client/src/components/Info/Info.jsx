import React from 'react';
import './Info.css'
import { BrowserRouter as Route,Link } from "react-router-dom";

import service1 from '../../images/service1.jpg';
import service2 from '../../images/service2.jpg';
import service3 from '../../images/service3.jpg';
import service4 from '../../images/service4.png';
import service5 from '../../images/service5.jpg';
import arrow from '../../images/up-arrow.png';


const Info = () => {

  return (
      <>
        <div className="info"  style={{"background-color": "#59CBE8;"}}>
          <h1>Be a Helping Hand</h1>
          <div className="infos">
            <div className="inforight">
              <div className="headtext">
                <h2>Donate Plasma</h2>
              </div>
              <div className="paratext">
                <p>Every drop off the plasma you donate can help a person to come back from doom’s door. So, for the sake of a human life, a life which you will be able to save only if you just step up and donate. click on the button below to add yourself or someone you know who is willing to donate plasma onto our list of plasma donors. </p>
              </div>
              <button>
                <Link className="input" to="/plasmadonorcontact">Add a Plasma Donor</Link>
              </button>
            </div>
              <img src={service1} alt="serviceimg"/>
          </div>

          <div className="infos">
            <img src={service2} alt="serviceimg"/>
            <div className="infoleft">
              <div className="headtext">
                <h2>Hospital Beds</h2>
              </div>
              <div className="paratext">
                <p>During these tough times it is difficult to find hospital beds. To make it possible for those days where one had to run around the entire city in search for one hospital best for their loved ones, we would request you to add any hospital bed which are free, and you know of by clicking the button below. </p>
              </div>
              <button>
                <Link className="input" to="/hospitalbedcontact">Add a Hospital</Link>
              </button>
            </div>
          </div>

          <div className="infos">
            <div className="inforight">
              <div className="headtext">
                <h2>Medicine Suppliers</h2>
              </div>
              <div className="paratext">
                <p>In there of everything being online why will one have to go to the pharmacy to pick up the medicines? what if they are not well enough to collect their own medicines? Add yourself by clicking the button below, or someone you know of as a medicine supplier so that the ones in need can get their medicines supplied to them.</p>
              </div>
              <button>
                <Link className="input" to="/medssupplycontact">Add a Medicine</Link>
              </button>
            </div>
              <img src={service4} alt="serviceimg"/>
          </div>

          <div className="infos">
            <img src={service3} alt="serviceimg"/>
            <div className="infoleft">
              <div className="headtext">
                <h2> Oxygen Suppliers</h2>
              </div>
              <div className="paratext">
                <p>In the era of the pandemic of Covid-19, the world has seen a shortage of oxygen supply. To put an end to it we request you to click the button below to list an oxygen supplier you know of.</p>
              </div>
              <button>
                <Link className="input" to="/oxygensupplycontact">Add a Oxygen Supplier</Link>
              </button>
            </div>
          </div>

          <div className="infos">
            <div className="inforight">
              <div className="headtext">
                <h2>Ambulance Service Providers</h2>
              </div>
              <div className="paratext">
                <p>Sometimes booking an ambulance might be a very hectic task as ambulances might not be available while you are in an emergency. To make matters a bit better for everyone list an ambulance provider down below.</p>
              </div>
              <button>
                <Link className="input" to="/ambulanceprovidercontact">Add a Ambulance Provider</Link>
              </button>
            </div>
              <img src={service5} alt="serviceimg"/>
          </div>

        </div>

      </>
  );
};

export default Info;
