import react, { useState } from "react";
import Doccontext from "./Doccontext";

const Docstate = (props) => {


    const [plasmadonor, setplasmadonor] = useState({ name: "", ph: "", bg: "", cdate: "", address: "", city: "kolkata", pincode: "" })

    const [hpbed, sethpbed] = useState({ hname: "", pname: "", ph: "", city: "kolkata", beds: "" })

    const [oxy, setoxy] = useState({ name: "", ph: "", address: "", city: "kolkata" })

    const [meds, setmeds] = useState({ mname: "", pname: "", ph: "", address: "", city: "" })

    const [ambu, setambu] = useState({ dname: "", ph: "", address: "", city: "", an: "" })

    const [doctor, setdoctor] = useState({speciality:"",dname:"",ph:"",address:"", city:""})

    return (<Doccontext.Provider value={{ plasmadonor, setplasmadonor, hpbed, sethpbed, oxy, setoxy, meds, setmeds, ambu, setambu, doctor, setdoctor }}>

        {props.children};

    </Doccontext.Provider>)

}


export default Docstate;