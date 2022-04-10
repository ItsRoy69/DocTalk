const express = require("express");
const router = express.Router();
const Ambulance = require("../models/Ambulance");

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
    const { Driver_Name, Phone_no, City, Address, Ambulance_no } = req.body;
    const ambulancedata = Ambulance({
      Driver_Name: Driver_Name,
      Phone_no: Phone_no,
      City: City,
      Address: Address,
      Ambulance_no: Ambulance_no,
    });
    await ambulancedata.save();
    res.status(200).json(ambulancedata);
  } catch (e) {
    console.log(`Error in creating a event: ${e}`);
  }
});

module.exports = router;
