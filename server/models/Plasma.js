const mongoose = require("mongoose");

const Plasma = new mongoose.Schema(
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
    password: {
        type: String,
        required: true,
        min: 3,
        max: 30
    },
    phone: {
      required: true,
      type: String,
    },
    bloodGroup: {
      required: true,
      type: String,
    },
    address: {
      required: false,
      type: String,
    },
    city: {
      required: true,
      type: String,
      max: 32,
    },
    pincode: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

module.exports.Plasma = mongoose.model("Plasma", Plasma);
