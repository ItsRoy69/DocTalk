const express = require("express");
const router = express.Router();
const Doctor_Signup = require("../models/DoctorSignup");


//* Route 1
router.get("/all-doctors", async (req, res) => {
    try {
      const alldoctors = await Doctor_Signup.find({});
      return res.json(alldoctors);
    } catch (error) {
      return res.status(500);
    }
  });

router.post("/doctor-signup", async (req, res) => {
  try {
    const { name, country, phone, city, hospital_name, speciality } = req.body.formData;
    const doctordata = Doctor_Signup({
      name: name,
      country: country,
      phone: phone,
      city: city,
      hospital_name: hospital_name,
      speciality: speciality,
    });
  const registered = await doctordata.save();
  console.log(registered);
  if(registered){
    res.status(201).json({ message: "doctor successfully add!" });
  }
  res.status(200).json(Doctor_Signup);
  } catch (e) {
    console.log(`Error in creating a doctor: ${e}`);
  }
});

module.exports = router;
