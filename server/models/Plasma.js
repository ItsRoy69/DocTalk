const mongoose = require("mongoose");

const Plasma = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
      max: 32,
    },
    phone: {
      required: true,
      type: String,
    },
    bloodGroup: {
      required: true,
      type: String,
    },
    cDate: {
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

const model = mongoose.model("Plasma", Plasma);

module.exports = model;
