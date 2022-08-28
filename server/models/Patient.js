const mongoose = require("mongoose");

const Patient =new mongoose.Schema({
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
    illness:{
        type: String,
        required: true,
        min: 3,
        max: 50
    },
    exactLocation: {
        type: String,
        required: true,
        min: 2,
        max: 40
    },

} );

module.exports.Patient = mongoose.model('Patient', Patient);
