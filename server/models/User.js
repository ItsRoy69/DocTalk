const mongoose = require("mongoose");

const User =new mongoose.Schema({
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
    exactLocation: {
        type: String,
        required: true,
        min: 2,
        max: 40
    },

} );

module.exports.User = mongoose.model('User', User);