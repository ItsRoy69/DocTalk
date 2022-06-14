
const { User } = require("../models/User");
const router = require("express").Router();
const { hashPassword,comparePassword } = require("../utils/bcrypt");
//registering a user

router.post("/register", async (req, res) => {

    const { firstName, lastName, email, password, exactLocation } = req.body;
    if (!firstName || !lastName || !email || !password || !exactLocation) {
        return res.status(401).json({
            success: false,
            message: "all fields are required!"
        })
    }
    //checking if email is taken

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
       return res.status(400).json({
            success: false,
            message: "email already exists!"
        })
    }
    //checking if email is taken

    const user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashPassword(password),
        exactLocation: exactLocation
    })

    user.save().then((user) => {
        res.status(201).json({
            success: true,
            message: "user saved successfully!",
            user: user
        })
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: err.message
        })
    })

})
//registering a user

//user login

router.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    if(!email||!password){
        return res.status(401).json({
            success:false,
            message:"all fields are required!"
        })
    }
    const user=await User.findOne({email:email});
    if(!user){
        return res.status(401).json({
            success:false,
            message:"incorrect username or password!"
        })
    }
    const isMatch=comparePassword(password,user.password);
    if(!isMatch){
        return res.status(401).json({
            success:false,
            message:"incorrect username or password!"
        })
    }
    res.status(200).json({
        success:true,
        message:"user logged in successfully!",
        user:user
    })

})

//user login

module.exports.UserRoutes = router;