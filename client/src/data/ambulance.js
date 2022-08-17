export const banner = require("../assets/images/ambulance_banner.jpg")
export const ambulance_image = "https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-realistic-medical-ambulance-material-ambulanceambulancerealisticrealistic-ambulance-png-image_630012.jpg"

export const ambulances = [
	{
		_id: 10001,
		name: "Gobinda Ambulance Service",
		hospital: "Raiganj Nursing Home",
		phone: "098316 64489",
		location: {
			address: "near ICE Factory, Jaffarpur Chal Bazar, Jaffarpur Panchanantala, Barrackpore, West Bengal 700122",
			country: "India",
			city: "Kolkata",
		},
		available: 4,
		charges: "15,000",
		rating: 4.9,
	},
	{
		_id: 10002,
		name: "RajKumar Day Night Ambulance Service",
		hospital: "Rajnath Roy Speciality Care",
		phone: "098313 42643",
		location: {
			address: "MOHANPUR KUNDU BARI KALAYANI HIGH ROAD, NONA CHANDANPUKUR, West Bengal 700122",
			country: "India",
			city: "Kolkata",
		},
		available: 1,
		charges: "Free",
		rating: 3.2,
	},
	{
		_id: 10003,
		name: "Siliguri Ambulance Service",
		hospital: "Siliguri Municipal Hospital",
		phone: "073840 43332",
		location: {
			address: "Dist hospital, Ward 10, Janta Nagar, West Bengal 734001",
			country: "India",
			city: "Siliguri",
		},
		available: 3,
		charges: "14,000",
		rating: 5.0,
	},
	{
		_id: 10004,
		name: "Medilift Air Ambulance Service",
		hospital: "Utopean Mediacal Institute",
		phone: "073670 20595",
		location: {
			address: "Uttorayon Main Rd, Block A, Uttorayon Twp, West Bengal 734010",
			country: "India",
			city: "New Jalpaiguri",
		},
		available: 10,
		charges: "13,000",
		rating: 4.5,
	},
	{
		_id: 10005,
		name: "Falcon Emergency Air Ambulance",
		hospital: "Apolo Hospitals",
		phone: "073680 88573",
		location: {
			address: "Ward 1, Patiram Jote, Siliguri, West Bengal 734001",
			country: "India",
			city: "Dhanbad",
		},
		available: 6,
		charges: "10,000",
		rating: 3,
	},
	{
		_id: 10006,
		name: "North Star Hospital Ambulance Service",
		hospital: "Amri Medical Sciences",
		phone: "073680 88573",
		location: {
			address: "Ward 5, Patil Chandra Road, West Bengal 734014",
			country: "India",
			city: "Dankuni",
		},
		available: 1,
		charges: "Free",
		rating: 4.3,
	},
]

export default ambulances
