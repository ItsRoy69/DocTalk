const mongoose = require("mongoose");

const Ambulance = new mongoose.Schema(
  {
    Driver_Name: {
      required: false,
      type: String,
    },
    Phone_no: {
      required: false,
      type: String,
    },
    City: {
      required: false,
      type: String,
    },
    Address: {
      required: false,
      type: String,
    },
    Ambulance_no: {
      required: false,
      type: String,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("Ambulance", Ambulance);

module.exports = model;
