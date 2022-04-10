const express = require("express");
const router = express.Router();
const Oxygen = require("../models/Oxygen");

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
    const { Name, Phone_no, Address, City } = req.body;
    const oxydata = Oxygen({
      Name: Name,
      Phone_no: Phone_no,
      Address: Address,
      City: City,
    });
    await oxydata.save();
    res.status(200).json(oxydata);
  } catch (e) {
    console.log(`Error in creating a event: ${e}`);
  }
});

module.exports = router;
