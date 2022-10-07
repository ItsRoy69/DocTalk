const express = require("express");
const router = express.Router();
const {Oxygen} = require("../models/Oxygen");

//* Route 1
router.get("/oxygen", async (req, res) => {
  try {
    const alloxygen = await Oxygen.find({});
    return res.json(alloxygen);
  } catch (error) {
    return res.status(500);
  }
});

//* Route 2
router.post("/oxygen", async (req, res) => {
  try {
    const { name, phone, city, address, country } = req.body.formData;
    const oxydata = new Oxygen({
      name: name,
      phone: phone,
      city: city,
      address: address,
      country: country,
    });
    await oxydata.save();
    res.status(200).json(oxydata);
  } catch (e) {
    res.status(500);
    console.log(`Error in creating a event: ${e}`);
  }
});

module.exports = router;
