const mongoose = require("mongoose");
const Doctor = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 40
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 40
    },
    country:{
        type:"String",
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 40
    },
    password: {
        type: String,
        required: true,
        min: 3,
        max: 30
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
});

module.exports.Doctor = mongoose.model("Doctor", Doctor);
