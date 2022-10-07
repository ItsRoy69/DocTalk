const express = require("express");
const router = express.Router();
const formValidator = require("../middleware/formValidator");
const { Oxygen } = require("../models/Oxygen");

// Get all oxigens
router.get("/oxygen", async (req, res) => {
  try {
    const oxigens = await Oxygen.find({});
    return res.status(200).json(oxigens);
  } catch (error) {
    return res.status(500);
  }
});

// Add new oxygen data
router.post("/oxygen", formValidator, async (req, res) => {
  try {
    const data = await new Oxygen(req.body.formData).save();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
