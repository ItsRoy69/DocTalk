const mongoose = require("mongoose");

const Hospital = new mongoose.Schema(
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
    hospital_name:{
      required: false,
      type: String,
    },
    beds_available:{
      required: false,
      type: String,
    },
  },
  { timestamps: true }
);

module.exports.Hospital = mongoose.model("Hospital", Hospital)
