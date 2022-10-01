const express = require("express");
const router = express.Router();
const {Hospital} = require("../models/Hospital");

//* Route 1
router.get("/hospitals", async (req, res) => {
  try {
    const allhospital = await Hospital.find({});
    return res.json(allhospital);
  } catch (error) {
    return res.status(500);
  }
});

//* Route 2
router.post("/hospitals", async (req, res) => {
  try {
    const { name, phone, city, address, country, hospital_name,beds_available } = req.body.formData;
    const hospitaldata = new Hospital({
      name: name,
      phone: phone,
      city: city,
      address: address,
      hospital_name: hospital_name,
      country: country,
      beds_available: beds_available,
    });
    await hospitaldata.save();
    res.status(200).json(hospitaldata);
  } catch (e) {
    res.status(500)
    console.log(`Error in creating a event: ${e}`);
  }
});

module.exports = router;
