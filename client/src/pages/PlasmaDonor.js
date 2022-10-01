import React, { useState } from "react"
import "../styles/plasmadonors.css"
import donors from "../data/plasmadonors"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import AOS from "aos"
import "aos/dist/aos.css"
AOS.init()

const PlasmaDonor = () => {
  const [query, setQuery] = useState("")

  return (
    <>
      <Navbar />
      <div className="search-container">
        <h1 className="tc design">BECOME A DONOR TODAY</h1>
        {/* search by blood group or country*/}
        <div className="tc search">
          <input
            className="tc search-field"
            type="text"
            placeholder="search by blood group or country"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-field-button">Submit</button>
        </div>
      </div>

      {/* bubbles */}
      <div className="bubble-wrapper">
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
      </div>
      <section className="plasma-contanier">
        {donors
          .filter((donor) => {
            if (query === "") {
              return donor
            } else if (
              donor.blood.toLowerCase().includes(query.toLowerCase())
            ) {
              return donor
            } else if (
              donor.country.toLowerCase().includes(query.toLowerCase())
            ) {
              return donor
            }
          })
          .map((donor) => {
            return (
              <div data-aos="fade-up" key={donor.id} className="plasma-display">
                <div className="plasma-display-items">
                  <div className="img-container">
                    <img
                      id="display-img"
                      src="https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png"
                    />
                  </div>

                  <p>
                    Name :<span>{donor.fullname}</span>
                  </p>
                  <p>
                    Country :<span>{donor.country}</span>
                  </p>
                  <p>
                    Blood type :<span> {donor.blood}</span>
                  </p>
                </div>
              </div>
            )
          })}
      </section>

      <Footer />
    </>
  )
}

export default PlasmaDonor
