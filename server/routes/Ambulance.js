const express = require("express");
const router = express.Router();
const formValidator = require("../middleware/formValidator");
const { Ambulance } = require("../models/Ambulance");

// Get all ambulances
router.get("/ambulance", async (req, res) => {
  try {
    const ambulances = await Ambulance.find({});
    res.status(200).json(ambulances);
  } catch (error) {
    res.status(500);
  }
});

// Add new ambulance data
router.post("/ambulance",formValidator, async (req, res) => {
  try {
    const data = await new Ambulance(req.body.formData).save();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
