import Navbar from "../components/Navbar"
import Ambulance from "../components/Ambulance"
import Footer from "../components/Footer"
import "../styles/Ambulances.css"
import { BsSearch as Search } from "react-icons/bs"
import { banner, ambulances } from "../data/ambulance"
import { useState, useEffect } from "react"
import CreatableSelect from "react-select/creatable"

const getDistinctLocations = data => {
	const allZones = [].concat(data.map(ambulance => ambulance.location.city))
	const distinctSet = new Set(allZones)
	return [...distinctSet].map(zone => ({ value: zone, label: zone }))
}

const Ambulances = () => {
	document.title = "Ambulances | DocTalk"
	const [location, setLocation] = useState(null)
	const [loading, setLoading] = useState(false) // Later controlled by states when fetching from database
	const Zones = getDistinctLocations(ambulances)
	const locatedAmbulances = location ? ambulances.filter(ambulance => ambulance.location.city === location) : ambulances
	const handleSelect = e => {
		setLoading(true)
		setLocation(e?.value)
	}

	useEffect(() => {
		setTimeout(() => setLoading(false), 2000) // Loading time to mimic database fetching time
	}, [loading])

	return (
		<>
			<Navbar />
			<div className="banner">
				<img src={banner} alt="banner" />
			</div>
			<div className="container">
				<div className="container-heading">
					<h2 className="heading">Available Ambulance Providers</h2>
					<div className="searchbar">
						<Search size={40} color="#0603E6" />
						<div style={{ maxWidth: 450, width: "100%" }}>
							<CreatableSelect placeholder="Select Region" isClearable onChange={handleSelect} options={Zones} menuPortalTarget={document.querySelector("body")} />
						</div>
					</div>
				</div>

				{loading ? (
					<h5 style={{ textAlign: "center" }}>Loading...</h5>
				) : locatedAmbulances.length ? (
					locatedAmbulances.map(item => <Ambulance ambulance={item} key={item._id} />)
				) : (
					<h5 style={{ textAlign: "center" }}>Currently no ambulance services were found in the selected region</h5>
				)}
			</div>
			<Footer />
		</>
	)
}

export default Ambulances
