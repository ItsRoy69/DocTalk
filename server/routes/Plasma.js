const express = require("express");
const router = express.Router();
const Plasma = require("../models/Plasma");

//* Route 1
router.get("/plasma", async (req, res) => {
  try {
    const allplasma = await Plasma.find({});
    return res.json(allplasma);
  } catch (error) {
    return res.status(500);
  }
});

//* name: "", ph: "", bg: "", cdate: "", address: "", city: "kolkata", pincode: ""

//* Route 2
router.post("/plasma", async (req, res) => {
  try {
    const { Name, Phone_no, Blood_group, C_Date, Address, City, Pincode } =
      req.body;
    const plasmadata = Plasma({
      Name: Name,
      Phone_no: Phone_no,
      Blood_group: Blood_group,
      C_Date: C_Date,
      Address: Address,
      City: City,
      Pincode: Pincode,
    });
    await plasmadata.save();
    res.status(200).json(plasmadata);
  } catch (e) {
    console.log(`Error in creating a event: ${e}`);
  }
});

module.exports = router;
