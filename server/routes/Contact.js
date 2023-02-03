const express = require("express");
const router = express.Router();
const formValidator = require("../middleware/formValidator");
const { Contact } = require("../models/Contact");


// Contact message
router.post("/contact", formValidator, async (req, res) => {
  try {
    const data = await new Contact(req.body.formData).save();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;