const router = require("express").Router();
const {Doctor} = require("../models/Doctor");
const { hashPassword,comparePassword } = require("../utils/bcrypt");
const formValidator = require('../middleware/formValidator');

// Get all doctors
router.get("/doctor", async (req, res) => {
  try {
    const doctors = await Doctor.find({});
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500);
  }
});

// Registering a doctor
router.post("/doctor", formValidator, async (req, res) => {
  try {
    // checking if email is taken
    const existingDoctor = await Doctor.findOne({ email: req.body.formData.email });
    if (existingDoctor) {
      throw {
        statusCode: 400,
        message: "email already exists!"
      };
    };

    const doctor = await new Doctor({
      ...req.body.formData,
      password: hashPassword(req.body.formData.password),
    }).save();

    res.status(201).json({
      success: true,
      message: "doctor saved successfully!",
      doctor: doctor
    });
  }
  catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message
    });
  }
});

// Doctor login
router.post("/login/doctor", formValidator, async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ email: req.body.formData.email });
    if (!doctor) {
      throw {
        statusCode: 400,
        message: "email not registered!"
      };
    }

    const isMatch = comparePassword(req.body.formData.password, doctor.password);
    if (!isMatch) {
      throw {
        statusCode: 400,
        message: "incorrect password!"
      };
    };
  
    res.status(200).json({
      success: true,
      message: "doctor logged in successfully!",
      doctor: doctor
    });
  }
  catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
