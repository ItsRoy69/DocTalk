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
} from "react-icons/bs";

import "../styles/OxygenSupplier.css";

import { oxygenSupplierImage } from "../data/oxygenSuppliers.js";

const Ratings = ({ rating }) => {
  const full_stars = Math.floor(rating);
  const half_rating = full_stars !== rating;
  return (
    <div>
      {[...Array(full_stars)].map((_, index) => (
        <Star key={index} color="gold" size="1.5em" />
      ))}
      {half_rating && <HalfStar color="gold" size="1.5em" />}
    </div>
  );
};

const OxygenSupplierCharge = ({ amount }) => {
  const isFree = amount === "Free";
  return (
    <h5
      style={{
        color: isFree ? "#00ee00" : "white",
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      Charges: {isFree ? amount : "₹"}
      {!isFree && amount}
    </h5>
  );
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
        <div className="d-flex bd-highlight">
          <div className="p-4 flex-fill bd-highlight">
            <h5 className="supplier-name">{name}</h5>
          </div>
          <div className="p-2 flex-fill bd-highlight">
            <div className="details">
              <div className="info">
                <div style={{ cursor: "pointer" }}>
                  <Phone size="2em" />
                  <h5
                    style={{ paddingLeft: 5, paddingRight: 5 }}
                    onClick={() => navigator.clipboard.writeText(phone)}
                  >
                    +91 {phone}
                  </h5>
                </div>
                <div>
                  <Hospital size="2em" />
                  <h5>Hospital: </h5>
                  <h5> {hospital}</h5>
                </div>
                <div>
                  <Pin size="2.5em" />
                  <h5 style={{ paddingLeft: 7, paddingRight: 3 }}>Address: </h5>
                  <h5> {address}</h5>
                </div>
                <div>
                  <Cash size="2em" />
                  <OxygenSupplierCharge amount={charges} />
                </div>
                <div>
                  <Number size="2em" />
                  <h5>
                    Available: {available} ambulance{available > 1 && "s"}
                  </h5>
                </div>
                <div>
                  <Zone size="2em" />
                  <h5>
                    Zone: {city}, {country}
                  </h5>
                </div>
                <div>
                  <h5 style={{ paddingLeft: 25, paddingRight: 10 }}>Rating:</h5>
                  <Ratings
                    style={{ paddingLeft: 5, paddingRight: 5 }}
                    rating={rating}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="oxygenSupplierImage flex-fill bd-highlight">
            <img
              src={oxygenSupplierImage}
              width={"auto"}
              height={"200px"}
              alt="OxygenSupplierImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OxygenSupply;
