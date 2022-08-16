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
const {UserRoutes}=require('./routes/user');
const DoctorSignup = require("./routes/DoctorSignup");
var cors = require("cors");

const PORT = 5000;

const dotenv = require("dotenv");
//env file configuration
dotenv.config({ path: "./config.env" });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("backend is connected");
});

mongoose
  .connect(process.env.DATABASE)
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

app.use("/api", PlasmaRoutes);
app.use("/api", HospitalRoutes);
app.use("/api", MedsRoutes);
app.use("/api", OxygenRoutes);
app.use("/api", AmbulanceRoutes);
app.use("/api/user",UserRoutes);
app.use(DoctorSignup);

app.listen(PORT, () => {
  console.log("server is listening at port 5000");
});
