const mongoose = require("mongoose");

const Meds = new mongoose.Schema(
  {
    Medicine: {
      required: false,
      type: String,
    },
    Name: {
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
  },
  { timestamps: true }
);

const model = mongoose.model("Meds", Meds);

module.exports = model;
