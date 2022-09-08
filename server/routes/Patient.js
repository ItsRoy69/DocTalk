const {Patient} = require("../models/Patient");
const router = require("express").Router();
const { hashPassword,comparePassword } = require("../utils/bcrypt");

//* Route 1
router.get("/patient", async (req, res) => {
    try {
        const allpatients = await Patient.find({});
        return res.json(allpatients);
    } catch (error) {
        return res.status(500);
    }
});

//*Route 2
//Registering a patient

router.post("/patient", async (req, res) => {
    const { firstName, lastName, email, password, illness, exactLocation } = req.body.formData;
    if (!firstName || !lastName || !email || !password || !illness || !exactLocation) {
        return res.status(401).json({
            success: false,
            message: "all fields are required!"
        });
    };
    //checking if email is taken
    const existingPatient = await Patient.findOne({ email: email });
    if (existingPatient) {
        return res.status(400).json({
            success: false,
            message: "email already exists!"
        });
    };

    const patient = new Patient({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashPassword(password),
        illness: illness,
        exactLocation: exactLocation
    });

    patient.save().then((patient) => {
        res.status(201).json({
            success: true,
            message: "patient saved successfully!",
            patient: patient
        });
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: err.message
        });
    });
});

//*Route 3
//Patient login

router.post("/login/patient",async(req,res)=>{
    const {email,password} = req.body.formData;
    if(!email||!password){
        return res.status(401).json({
            success:false,
            message:"all fields are required!"
        });
    };

    const patient =await Patient.findOne({email:email});
    if(!patient){
        return res.status(401).json({
            success:false,
            message:"incorrect username or password!"
        });
    };

    const isMatch=comparePassword(password,patient.password);
    if(!isMatch){
        return res.status(401).json({
            success:false,
            message:"incorrect username or password!"
        });
    };

    res.status(200).json({
        success:true,
        message:"patient logged in successfully!",
        patient:patient
    });
});

module.exports = router;
