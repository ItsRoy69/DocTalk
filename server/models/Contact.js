const mongoose = require("mongoose");

const Contact = new mongoose.Schema(
  {
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
    subject:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    }
  },
  { timestamps: true }
);

module.exports.Contact = mongoose.model("Contact", Contact);