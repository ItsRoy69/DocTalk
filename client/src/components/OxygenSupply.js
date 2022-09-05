// Oxygen Supplier Component 

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

import "../styles/OxygenSupplier.css"

import { oxygenSupplierImage } from "../data/oxygenSuppliers.js";

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
};

const OxygenSupplierCharge = ({ amount }) => {
	const isFree = amount === "Free"
	return (
		<h5 style={{ color: isFree ? "#00ee00" : "white" }}>
			Charges: {isFree ? amount : "₹"}
			{!isFree && amount}
		</h5>
	)
};

const OxygenSupply = ({ oxygenSupplier }) => {
	const {
		name,
		phone,
		hospital,
		location: { address, city, country },
		charges,
		available,
		rating,
	} = oxygenSupplier;

	return (
		<div className="oxygenSupplier">
			<div className="oxygenSupplier-container">
				<h5 className="supplier-name">{name}</h5>
				<div className="details">
					<div className="info">
						<div style={{ cursor: "pointer" }}>
							<Phone size="1.2em" />
							<h5 onClick={() => navigator.clipboard.writeText(phone)}>+91 {phone}</h5>
						</div>
						<div>
							<Hospital size="1.5em" />
							<h5 style={{ paddingRight: 5 }}>Hospital: </h5>
							<h5> {hospital}</h5>
						</div>
						<div className="address">
							<Pin size="1.5em" />
							<h5>Address: </h5>
							<h5> {address}</h5>
						</div>
						<div>
							<Cash size="1.5em" />
							<OxygenSupplierCharge amount={charges} />
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
					<img src={oxygenSupplierImage} alt="OxygenSupplierImage" />
				</div>
			</div>
		</div>
	)
}

export default OxygenSupply;