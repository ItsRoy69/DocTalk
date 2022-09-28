const express = require("express");
const router = express.Router();
const {Ambulance} = require("../models/Ambulance");

//* Route 1
router.get("/ambulance", async (req, res) => {
  try {
    const allambu = await Ambulance.find({});
    return res.json(allambu);
  } catch (error) {
    return res.status(500);
  }
});

//* Route 2
router.post("/ambulance", async (req, res) => {
  try {
    const { name, phone, city, address, country, hospital_name,ambulances_available } = req.body.formData;
    const ambulancedata = new Ambulance({
      name: name,
      phone: phone,
      city: city,
      address: address,
      hospital_name: hospital_name,
      country: country,
      ambulances_available: ambulances_available,
    });
    await ambulancedata.save();
    res.status(200).json(ambulancedata);
  } catch (e) {
    res.status(500)
    console.log(`Error in creating a event: ${e}`);
  }
});

module.exports = router;
