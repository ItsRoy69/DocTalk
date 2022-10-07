const express = require("express");
const router = express.Router();
const formValidator = require("../middleware/formValidator");
const { Meds } = require("../models/Meds");

// Get all meds
router.get("/meds", async (req, res) => {
  try {
    const meds = await Meds.find({});
    res.status(200).json(meds);
  } catch (error) {
    res.status(500);
  }
});

// Add new medicine data
// mname: "", pname: "", ph: "", address: "", city: "")
router.post("/meds", formValidator, async (req, res) => {
  try {
    const data = await new Meds(req.body.formData).save();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
