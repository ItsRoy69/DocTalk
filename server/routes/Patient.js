const { Patient } = require("../models/Patient");
const router = require("express").Router();
const { hashPassword,comparePassword } = require("../utils/bcrypt");
//registering a patient

router.post("/register", async (req, res) => {

    const { firstName, lastName, email, password, illness, exactLocation } = req.body.formData;
    if (!firstName || !lastName || !email || !password || !illness || !exactLocation) {
        return res.status(401).json({
            success: false,
            message: "all fields are required!"
        })
    }
    //checking if email is taken

    const existingPatient = await Patient.findOne({ email: email });

    if (existingPatient) {
        return res.status(400).json({
            success: false,
            message: "email already exists!"
        })
    }
    //checking if email is taken

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
        })
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: err.message
        })
    })

})
//registering a patient

//patient login

router.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    if(!email||!password){
        return res.status(401).json({
            success:false,
            message:"all fields are required!"
        })
    }
    const patient =await Patient.findOne({email:email});
    if(!patient){
        return res.status(401).json({
            success:false,
            message:"incorrect username or password!"
        })
    }
    const isMatch=comparePassword(password,patient.password);
    if(!isMatch){
        return res.status(401).json({
            success:false,
            message:"incorrect username or password!"
        })
    }
    res.status(200).json({
        success:true,
        message:"patient logged in successfully!",
        patient:patient
    })

})

//patient login

module.exports = router;