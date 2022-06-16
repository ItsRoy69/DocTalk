const express = require("express");
const router = express.Router();
// const { createHospital, getHospital } = require("../controllers/Hospital");
const Hospital = require("../models/Beds");

//* Route 1
router.get("/hospitals", async (req, res) => {
  try {
    const allhospital = await Hospital.find({});
    return res.json(allhospital);
  } catch (error) {
    return res.status(500);
  }
});

//   const [hpbed, sethpbed] = useState({ hname: "", pname: "", ph: "", city: "kolkata", beds: "" })

//* Route 2
router.post("/hospitals", async (req, res) => {
  try {
    const { Hospital_Name, Person_Name, Phone_no, City, ICU_Beds } = req.body;
    const hospitaldata = Hospital({
      Hospital_Name: Hospital_Name,
      Person_Name: Person_Name,
      Phone_no: Phone_no,
      City: City,
      ICU_Beds: ICU_Beds,
    });
    await hospitaldata.save();
    res.status(200).json(hospitaldata);
  } catch (e) {
    console.log(`Error in creating a event: ${e}`);
  }
});

module.exports = router;
