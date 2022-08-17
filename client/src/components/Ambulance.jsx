import {
	BsFillPinMapFill as Pin,
	BsStarFill as Star,
	BsStarHalf as HalfStar,
	BsFillTelephoneFill as Phone,
	BsCashStack as Cash,
	BsFillMapFill as Zone,
	BsFillBellFill as Number,
	BsBank as Hospital,
} from "react-icons/bs"
import "../styles/Ambulances.css"

import { ambulance_image } from "../data/ambulance"

const Ratings = ({ rating }) => {
	const full_stars = Math.floor(rating)
	const half_rating = full_stars !== rating
	return (
		<div>
			{[...Array(full_stars)].map((_, index) => (
				<Star key={index} color="gold" size="1.5em" />
			))}
			{half_rating && <HalfStar color="gold" size="1.5em" />}
		</div>
	)
}

const AmbulanceCharge = ({ amount }) => {
	const isFree = amount === "Free"
	return (
		<h5 style={{ color: isFree ? "#00ee00" : "white" }}>
			Charges: {isFree ? amount : "₹"}
			{!isFree && amount}
		</h5>
	)
}

const Ambulance = ({ ambulance }) => {
	const {
		name,
		phone,
		hospital,
		location: { address, city, country },
		charges,
		available,
		rating,
	} = ambulance

	return (
		<div className="ambulance">
			<div className="ambulance-container">
				<h5 className="name">{name}</h5>
				<div className="details">
					<div className="info">
						<div style={{ cursor: "pointer" }}>
							<Phone size="1.2em" />
							<h5 onClick={() => navigator.clipboard.writeText(phone)}>+91 {phone}</h5>
						</div>
						<div>
							<Hospital size="1.5em" />
							<h5 style={{ paddingRight: 5 }}>Hospital: </h5>
							<h5 style={{ textTransform: "uppercase" }}> {hospital}</h5>
						</div>
						<div className="address">
							<Pin size="1.5em" />
							<h5>Address: </h5>
							<h5> {address}</h5>
						</div>
						<div>
							<Cash size="1.5em" />
							<AmbulanceCharge amount={charges} />
						</div>
						<div>
							<Number size="1.5em" />
							<h5>
								Available: {available} ambulance{available > 1 && "s"}
							</h5>
						</div>
						<div>
							<Zone size="1.5em" />
							<h5>
								Zone: {city}, {country}
							</h5>
						</div>
						<div>
							<h5 style={{ paddingRight: 10 }}>Rating:</h5>
							<Ratings rating={rating} />
						</div>
					</div>
					<img src={ambulance_image} alt="ambulance" />
				</div>
			</div>
		</div>
	)
}

export default Ambulance
