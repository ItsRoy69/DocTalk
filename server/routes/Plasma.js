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

//* Route 2
router.post("/plasma", async (req, res) => {
  try {
    const { name, phone, bloodGroup, cDate, address, city, pincode } =
      req.body.formData;
    const plasmadata = Plasma({
      name: name,
      phone: phone,
      bloodGroup: bloodGroup,
      cDate: cDate,
      address: address,
      city: city,
      pincode: pincode
    });
    await plasmadata.save();
    res.status(200).json(plasmadata);
  } catch (e) {
    console.log(`Error in creating a event: ${e}`);
  }
});

module.exports = router;
