// Data for Oxygen Suppliers

export const banner = require("../assets/images/oxygenSupplierBannerImage.jpg"); 

export const oxygenSupplierImage = require("../assets/images/oxygenTank.jpg")

export const oxygenSuppliers = [
	{
		// Sample Data
		_id: 10001,
		name: "Red Cross Medical Oxygen Suppliers",
		hospital: "Red Cross Nursing Home",
		phone: "9898989898",
		location: {
			address: "near ICE Factory, Jaffarpur Chal Bazar, Jaffarpur Panchanantala, Barrackpore, West Bengal 700122",
			country: "India",
			city: "Kolkata",
		},
		available: 160,
		charges: "1600/Cylinder",
		rating: 4.9,
	},
]

export default oxygenSuppliers;