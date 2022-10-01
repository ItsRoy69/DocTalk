const mongoose = require("mongoose");

const Meds = new mongoose.Schema(
  {
    name: {
      required: false,
      type: String,
    },
    phone: {
      required: false,
      type: String,
    },
    city: {
      required: false,
      type: String,
    },
    address: {
      required: false,
      type: String,
    },
    country: {
      required: false,
      type: String,
    },
  },
  { timestamps: true }
);

module.exports.Meds = mongoose.model("Meds", Meds);
