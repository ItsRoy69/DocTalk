import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import headingPhoto from "../assets/images/heading.png"
import Services1 from "../assets/images/service1.png"
import Services2 from "../assets/images/service2.png"
import Services3 from "../assets/images/service3.png"
import Services4 from "../assets/images/service4.png"
import Services5 from "../assets/images/service5.png"
import Services6 from "../assets/images/service6.png"
import contact from "../assets/images/contact.png"
import helpingHand1 from "../assets/images/helpingHand1.png"
import helpingHand2 from "../assets/images/helpingHand2.png"
import helpingHand3 from "../assets/images/helpingHand3.png"
import helpingHand4 from "../assets/images/helpingHand4.png"
import helpingHand5 from "../assets/images/helpingHand5.png"
import helpingHand6 from "../assets/images/helpingHand6.png"
import user from '../assets/images/user.png';
import emailImg from '../assets/images/email.png';
import subject from '../assets/images/subject.png';
import message from '../assets/images/message.png';
import { Link } from "react-router-dom"
import "../styles/Home.css"

const ServiceCard = ({ title, image, link }) => (
	<div className="service-box" style={{ backgroundImage: `url(${image})` }}>
		<h3 style={{ color: "#FFFFFF", fontWeight: "500", zIndex: "2" }}>{title}</h3>
		<div className="overlay" />
		<Link className="view-btn" to={`/${link}`}>
			View
		</Link>
	</div>
)

const HelpingCard = ({ title, image, hover, desc, link }) => (
	<div className="helping-box">
		<div className="image-container">
			<img className="bottom" src={image} alt={title} />
			<img className="top" src={hover} alt={title} />
		</div>
		<h5>{title}</h5>
		<p>{desc}</p>
		<Link className="view-btn" to={`/${link}`}>
			Contact
		</Link>
	</div>
)

const Home = () => (
	<>
		<Navbar />
		<div className="container">
			<div className="heading">
				<div className="heading__info">
					<div className="heading__info__title">DocTalk</div>
					<div className="heading__info__subtitle">MedHelp just a click away...</div>
					<button className="heading__info__cta">Get In Touch</button>
				</div>
				<div className="heading__lcp">
					<img src={headingPhoto} alt="heading" width="600" height="600" />
				</div>
			</div>
			<div className="aboutus" id="about">
				<h4>About Us</h4>
				<div className="aboutus-container">
					<p className="aboutus-text">
						DocTalk is your ultimate medical help space. Here, at DocTalk you will be helped with all the services catering towards the medical field like Plasma donors' hospital beds
						oxygen suppliers medicine suppliers and ambulance providers. DocTalk is your one step solution. Just log into your account and book your appointment right away. you can even
						call us for your appointment, and we will get back to you shortly.
					</p>
				</div>
			</div>
			<div className="services" style={{ paddingTop: 10 }}>
				<h4>Services</h4>
				<div className="services-container">
					<ServiceCard title="Plasma Donor" image={Services1} link="plasmadonor" />
					<ServiceCard title="Hospital Bed" image={Services2} link="hospitalbed" />
					<ServiceCard title="Oxygen Supplier" image={Services3} link="osupplier" />
					<ServiceCard title="Ambulances" image={Services4} link="ambulances" />
					<ServiceCard title="Medicines" image={Services5} link="medicines" />
					<ServiceCard title="Doctors" image={Services6} link="doctors" />
				</div>
			</div>
			<div className="helping-hand">
				<h4>Helping Hand</h4>
				<div className="helping-container">
					<HelpingCard
						title="Ambulance"
						image={helpingHand1}
						hover={Services4}
						desc="Sometimes booking an ambulance might be a very hectic task as ambulances might not be available while you are in an emergency. To make matters a bit better for everyone
								list an ambulance provider down below."
						link="regambulances"
					/>
					<HelpingCard
						title="Oxygen"
						image={helpingHand2}
						hover={Services3}
						desc="In the era of the pandemic of Covid-19, the world has seen a shortage of oxygen supply. To put an end to it we request you to click the button below to list an oxygen
								supplier you know of."
						link="regoxygensuppliers"
					/>
					<HelpingCard
						title="Plasma"
						image={helpingHand3}
						hover={Services1}
						desc="Every drop off the plasma you donate can help a person to come back from doom’s door. So, for the sake of a human life, a life which you will be able to save only if
								you just step up and donate. click on the button below to add yourself or someone you know who is willing to donate plasma onto our list of plasma donors."
						link="donateplasma"
					/>
					<HelpingCard
						title="Medicines"
						image={helpingHand4}
						hover={Services5}
						desc="In there of everything being online why will one have to go to the pharmacy to pick up the medicines? Add yourself by clicking the button below, or someone you know of
								as a medicine supplier so that the ones in need can get their medicines supplied to them."
						link="regmedicines"
					/>
					<HelpingCard
						title="Doctor"
						image={helpingHand5}
						hover={Services6}
						desc="In this 21st Century, you can also register yourself as a doctor if you are licensed. You can help millions of people through consultation by registering under this
								website."
						link="doctorsregistration"
					/>
					<HelpingCard
						title="Hospital Beds"
						image={helpingHand6}
						hover={Services2}
						desc="For the sake of a human life, a life which you will be able to save only if you just step up and donate. click on the button below to add yourself or someone you know
								who is willing to donate plasma onto our list of plasma donors."
						link="reghospitalbed"
					/>
				</div>
			</div>
			<div className="contact" id="contact">
				<div className="contact__heading">Contact Us</div>
				<div className="contact__main">
					<div className="contact__form">
						<div className="input__name">
							<div className="input_container">
								<img src={user} alt="first-name"/>
								<input type="text" className="contact__form__name" placeholder="FirstName" />
							</div>
							<div className="input_container">
								<img src={user} alt="last-name"/>
								<input type="text" className="contact__form__name" placeholder="LastName" />
							</div>
						</div>
						<div className="input_container">
							<img src={emailImg} alt="email"/>
							<input type="email" className="contact__form__email" placeholder="Email" />
						</div>
						<div className="input_container">
							<img src={subject} alt="subject"/>
							<input type="text" className="contact__form__subject" placeholder="Subject" />
						</div>
						<div className="input_container">
							<img src={message} alt="message"/>
							<textarea className="contact__form__message" placeholder="Message" />
						</div>
						<button className="contact__form__button" type="submit">
							Contact
						</button>
					</div>
					<div className="contact__rightImage">
						<img src={contact} alt="contact-us" width="500" height="500" />
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</>
)

export default Home;
