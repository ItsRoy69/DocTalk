const mongoose = require("mongoose");

const Oxygen = new mongoose.Schema(
  {
    Name: {
      required: false,
      type: String,
    },
    Phone_no: {
      required: false,
      type: Number,
    },
    Address: {
      required: false,
      type: String,
    },
    City: {
      required: false,
      type: String,
    },

    Alt_Phone: {
      required: false,
      type: Number,
    },
  },
  { timestamps: true }
);

const model = mongoose.model("Oxygen", Oxygen);

module.exports = model;
