const express = require("express");
const router = express.Router();
const {Meds} = require("../models/Meds");

//* Route 1
router.get("/meds", async (req, res) => {
  try {
    const allmeds = await Meds.find({});
    return res.json(allmeds);
  } catch (error) {
    return res.status(500);
  }
});

//   mname: "", pname: "", ph: "", address: "", city: "")

//* Route 2
router.post("/meds", async (req, res) => {
  try {
    const { name, phone, city, address, country } = req.body.formData;
    const medsdata = new Meds({
      name: name,
      phone: phone,
      city: city,
      address: address,
      country: country,
    });
    await medsdata.save();
    res.status(200).json(medsdata);
  } catch (e) {
    res.status(500);
    console.log(`Error in creating a event: ${e}`);
  }
});

module.exports = router;
