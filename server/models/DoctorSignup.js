const mongoose = require("mongoose");
const DoctorSingup = new mongoose.Schema({
    name:{
        type:"String",
        required:true
    },
    country:{
        type:"String",
        required:true
    },
    phone:{
        type:"String",
        required:true
    },
    city:{
        type:"String",
        required:true
    },
    hospital_name:{
        type:"String",
        required:true
    },
    speciality:{
        type:"String",
        required:true
    }
})
const Doctor_Signup = mongoose.model("Doctor_Signup", DoctorSingup);
module.exports = Doctor_Signup