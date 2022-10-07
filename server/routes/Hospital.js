const express = require("express");
const router = express.Router();
const formValidator = require("../middleware/formValidator");
const { Hospital } = require("../models/Hospital");

// Get all hospitals
router.get("/hospitals", async (req, res) => {
  try {
    const hospitals = await Hospital.find({});
    res.statue(200).json(hospitals);
  } catch (error) {
    res.status(500);
  }
});

// Add new hospital data
router.post("/hospitals", formValidator, async (req, res) => {
  try {
    const data = await new Hospital(req.body.formData).save();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
