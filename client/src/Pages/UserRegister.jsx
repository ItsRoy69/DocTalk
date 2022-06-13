import React from "react";
import "./DoctorLogin.scss";
import Logo from "../images/DocTalk.jpeg";

function UserRegister() {
  return (
    <div className="login">
      <img className="logo" src={Logo} alt="DocTalk Logo" />
      <div className="container">
        <form >
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="text" name="location" placeholder="Exact Location" />
          <button type="submit" className="submitBTN">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserRegister;
