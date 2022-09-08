const router = require("express").Router();
const {Doctor} = require("../models/Doctor");
const { hashPassword,comparePassword } = require("../utils/bcrypt");


//* Route 1
router.get("/doctor", async (req, res) => {
    try {
      const alldoctors = await Doctor.find({});
      return res.json(alldoctors);
    } catch (error) {
      return res.status(500);
    }
  });

// Registering a doctor
//* Route 2

router.post("/doctor", async (req, res) => {
    const { firstName, lastName, email, password, country, phone, city, hospital_name, speciality } = req.body.formData;
    if(!firstName || !lastName || !email || !password || !country || !phone || !city || !hospital_name || !speciality ){
      return res.status(401).json({
        success: false,
        message: "all fields are required!"
      });
    };

    //checking if email is taken
    const existingDoctor = await Doctor.findOne({ email: email });
    if (existingDoctor) {
      return res.status(400).json({
          success: false,
          message: "email already exists!"
      });
    };

    const doctor = new Doctor({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPassword(password),
      country: country,
      phone: phone,
      city: city,
      hospital_name: hospital_name,
      speciality: speciality
    });

    doctor.save().then((doctor) => {
      res.status(201).json({
          success: true,
          message: "doctor saved successfully!",
          doctor: doctor
      })
    }).catch(err => {
      res.status(500).json({
          success: false,
          message: err.message
      });
    });
});

//*Route 3
//Doctor login

router.post("/login/doctor",async(req,res)=>{
  const {email,password} = req.body.formData;
  if(!email||!password){
      return res.status(401).json({
          success:false,
          message:"all fields are required!"
      });
  };

  const doctor =await Doctor.findOne({email:email});
  if(!doctor){
      return res.status(401).json({
          success:false,
          message:"incorrect username or password!"
      });
  };

  const isMatch=comparePassword(password,doctor.password);
  if(!isMatch){
      return res.status(401).json({
          success:false,
          message:"incorrect username or password!"
      });
  };

  res.status(200).json({
      success:true,
      message:"doctor logged in successfully!",
      doctor:doctor
  });
});

module.exports = router;
