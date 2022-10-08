const {Patient} = require("../models/Patient");
const router = require("express").Router();
const formValidator = require("../middleware/formValidator");
const { hashPassword, comparePassword } = require("../utils/bcrypt");

// Get all patiens
router.get("/patient", async (req, res) => {
    try {
        const patients = await Patient.find({});
        res.status(200).json(patients);
    } catch (error) {
        res.status(500);
    }
});

// Registering a patient
router.post("/patient", formValidator, async (req, res) => {
    try {
        // Checking if email is taken
        const existingPatient = await Patient.findOne({ email: req.body.formData.email });
        if (existingPatient) {
            throw {
                statusCode: 400,
                message: "email already exists!"
            };
        };
    
        const patient = await new Patient({
            ...req.body.formData,
            password: hashPassword(req.body.formData.password),
        }).save();

        res.status(201).json({
            success: true,
            message: "patient saved successfully!",
            patient: patient
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        });
    }
});

// Patient login
router.post("/login/patient", formValidator, async (req, res) => {
    try {
        const patient = await Patient.findOne({ email: req.body.formData.email });
        if (!patient) {
            throw {
                statusCode: 400,
                message: "email not registered!"
            };
        };
    
        const isMatch = comparePassword(req.body.formData.password, patient.password);
        if (!isMatch) {
            throw {
                statusCode: 400,
                message: "incorrect password!"
            };
        };
    
        res.status(200).json({
            success: true,
            message: "patient logged in successfully!",
            patient: patient
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;
