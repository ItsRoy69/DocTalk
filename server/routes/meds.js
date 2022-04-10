const express = require("express");
const router = express.Router();
const Meds = require("../models/Meds");

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
    const { Medicine, Name, Phone_no, City, Address } = req.body;
    const medsdata = Meds({
      Medicine: Medicine,
      Name: Name,
      Phone_no: Phone_no,
      City: City,
      Address: Address,
    });
    await medsdata.save();
    res.status(200).json(medsdata);
  } catch (e) {
    console.log(`Error in creating a event: ${e}`);
  }
});

module.exports = router;
