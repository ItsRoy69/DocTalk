const router = require("express").Router();
const {Plasma} = require("../models/Plasma");
const { hashPassword,comparePassword } = require("../utils/bcrypt");

//* Route 1
router.get("/plasma", async (req, res) => {
  try {
    const allplasma = await Plasma.find({});
    return res.json(allplasma);
  } catch (error) {
    return res.status(500);
  }
});

//* Route 2
//Registering a donor

router.post("/plasma", async (req, res) => {
    const { firstName, lastName, email, password, phone, bloodGroup, address, city, pincode } = req.body.formData;
    if(!firstName || !lastName || !email || !password || !phone || !address || !bloodGroup || !city || !pincode){
      return res.status(401).json({
        success: false,
        message: "all fields are required!"
      });
    };

    //checking if email is taken
    const existingDonor = await Plasma.findOne({ email: email });
    if (existingDonor) {
      return res.status(400).json({
          success: false,
          message: "email already exists!"
      });
    };

    const plasma = new Plasma({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPassword(password),
      phone: phone,
      bloodGroup: bloodGroup,
      address: address,
      city: city,
      pincode: pincode
    });

    plasma.save().then((plasma) => {
      res.status(201).json({
          success: true,
          message: "donor saved successfully!",
          plasma: plasma
      });
  }).catch(err => {
      res.status(500).json({
          success: false,
          message: err.message
      });
  });
});

//*Route 3
//Donor login

router.post("/login/donor",async(req,res)=>{
  const {email,password} = req.body.formData;
  if(!email||!password){
      return res.status(401).json({
          success:false,
          message:"all fields are required!"
      });
  };

  const plasma =await Plasma.findOne({email:email});
  if(!plasma){
      return res.status(401).json({
          success:false,
          message:"incorrect username or password!"
      });
  };

  const isMatch=comparePassword(password,plasma.password);
  if(!isMatch){
      return res.status(401).json({
          success:false,
          message:"incorrect username or password!"
      });
  };

  res.status(200).json({
      success:true,
      message:"donor logged in successfully!",
      plasma:plasma
  });
});

module.exports = router;
