import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import banner from "../assets/images/ambulance_banner.jpg"
import "../styles/Ambulances.css"
import { BsSearch, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"
import ambulances from "../components/Ambulances"
import React, { useState } from "react"

import CreatableSelect from "react-select/creatable"

const Locations = [
	{ value: "Kolkata", label: "Kolkata" },
	{ value: "Siliguri", label: "Siliguri" },
	{ value: "North 24 Pgns", label: "North 24 Pgns" },
]

const default_image = "https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-realistic-medical-ambulance-material-ambulanceambulancerealisticrealistic-ambulance-png-image_630012.jpg"
const Ambulances = () => {
	const [location, setLocation] = useState(null)
	const ambulance = ambulances[0]
	return (
		<>
			<Navbar />
			<div className="heading__lcp">
				<img src={banner} alt="heading" width="600" style={{ filter: "none" }} />
			</div>
			<div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
				<div className="drop-down">
					<h2 className="heading">Available Ambulance Providers</h2>
				</div>
				<div className="input_container_name" style={{ width: 500, zIndex: 999, alignItems: "center" }}>
					<BsSearch size={40} color="#0603E6" />
					<div style={{ width: 450 }}>
						<CreatableSelect
							menuPortalTarget={document.querySelector("body")}
							isClearable
							onChange={e => setLocation(e.value)}
							onInputChange={e => {}}
							options={Locations}
							placeholder="Select Location"
						/>
					</div>
				</div>
			</div>
			{ambulances.map(ambulance => (
				<div className="ambulances" style={{ position: "relative" }} key={ambulance._id}>
					<div className="doctors-details">
						<div className="details" style={{ width: "100%" }}>
							<h5
								style={{
									fontWeight: 900,
									textTransform: "uppercase",
									fontSize: "2.5em",
									textAlign: "center",
								}}
							>
								{ambulance.name}
							</h5>
							<h5>+91 {ambulance.phoneNo}</h5>
							<h5>Address: {ambulance.location.address}</h5>
							<h5 style={{ color: ambulance.charges === "Free" ? "#00ee00" : "white" }}>
								Charges: {ambulance.charges !== "Free" && "₹"}
								{ambulance.charges}
							</h5>
							<h5>Zone: {ambulance.location.zone}</h5>
							<div style={{ display: "flex" }}>
								<h5 style={{ paddingRight: 5, paddingTop: 2 }}>Rating:</h5>
								{<Ratings rating={ambulance.rating} />}
							</div>
						</div>

						<img src={ambulance.image || default_image} alt="ambulance" style={{ width: 200, borderRadius: 20, position: "absolute", top: 27, right: 20 }} />
					</div>
				</div>
			))}
			<Footer />
		</>
	)
}

const Ratings = ({ rating }) => {
	const full_stars = Math.floor(rating)
	const half_rating = full_stars !== rating
	return (
		<div>
			{[...Array(full_stars)].map((_, index) => (
				<BsStarFill key={index} color="gold" size="1.2em" />
			))}
			{half_rating && <BsStarHalf color="gold" size="1.2em" />}
		</div>
	)
}

export default Ambulances
