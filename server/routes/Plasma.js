const router = require("express").Router();
const formValidator = require("../middleware/formValidator");
const {Plasma} = require("../models/Plasma");
const { hashPassword,comparePassword } = require("../utils/bcrypt");

// Get all plasma
router.get("/plasma", async (req, res) => {
    try {
        const plasma = await Plasma.find({});
        res.status(200).json(plasma);
    } catch (error) {
        res.status(500);
    }
});

// Registering a donor
router.post("/plasma", formValidator, async (req, res) => {
    try {
        // Checking if email is taken
        const existingDonor = await Plasma.findOne({ email: req.body.formData.email });
        if (existingDonor) {
            throw {
                statusCode: 400,
                message: "email already exists!"
            };
        };
    
        const plasma = await new Plasma({
            ...req.body.formData,
            password: hashPassword(req.body.formData.password)
        }).save();
    
        res.status(201).json({
            success: true,
            message: "donor saved successfully!",
            plasma: plasma
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        });
    }
});

// Donor login
router.post("/login/donor", formValidator, async (req, res) => {
    try {
        const plasma = await Plasma.findOne({ email: req.body.formData.email });
        if (!plasma) {
            throw {
                statusCode: 400,
                message: "email not registered!"
            };
        };
      
        const isMatch = comparePassword(req.body.formData.password, plasma.password);
        if (!isMatch) {
            throw {
                statusCode: 400,
                message: "incorrect password!"
            }
        };
      
        res.status(200).json({
            success: true,
            message: "donor logged in successfully!",
            plasma: plasma
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
