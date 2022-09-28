const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const PlasmaRoutes = require("./routes/Plasma");
const HospitalRoutes = require("./routes/Hospital");
const MedsRoutes = require("./routes/Meds");
const OxygenRoutes = require("./routes/Oxygen");
const AmbulanceRoutes = require("./routes/Ambulance");
const PatientRoutes = require('./routes/Patient');
const DoctorRoutes = require("./routes/Doctor");
var cors = require("cors");

const PORT = 5000;

require('dotenv').config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("backend is connected");
});

mongoose
  .connect(process.env.DATABASE, { useNewUrlParser: true })
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

/* middleware */
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

/* routes */
app.get("/", (req, res) => {
  res.send("HELLO THERE");
});

app.use(PlasmaRoutes);
app.use(HospitalRoutes);
app.use(MedsRoutes);
app.use(OxygenRoutes);
app.use(AmbulanceRoutes);
app.use(PatientRoutes);
app.use(DoctorRoutes);

app.listen(PORT, () => {
  console.log("server is listening at port 5000");
});
