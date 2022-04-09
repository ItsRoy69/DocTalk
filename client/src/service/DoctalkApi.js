//* All the AXIOS API calls will be made from here to the backend
//* These functions will be exported and then imported wherever needed

import Axios from "axios";

export const uploadPlasma = async (plasmadonor) => {
  try {
    const Post = await Axios.post(
      "http://localhost:5000/api/plasma",
      plasmadonor
    );
    return Post;
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

export const uploadHospital = async (hpbed) => {
  try {
    const Post = await Axios.post("http://localhost:5000/api/hospital", hpbed);
    return Post;
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

export const uploadMeds = async (oxy) => {
  try {
    const Post = await Axios.post("http://localhost:5000/api/meds", oxy);
    return Post;
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};
export const uploadOxygen = async (meds) => {
  try {
    const Post = await Axios.post("http://localhost:5000/api/oxygen", meds);
    return Post;
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};
export const uploadAmbulance = async (ambu) => {
  try {
    const Post = await Axios.post("http://localhost:5000/api/ambulance", ambu);
    return Post;
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};
