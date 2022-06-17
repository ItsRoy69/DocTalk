import React from "react";
import "../App.css";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__heading">Contact Us</div>
      <div className="contact__main">
        <div className="contact__form">
          <input
            type="text"
            className="contact__form__name"
            placeholder="Name"
          />
          <input
            type="text"
            className="contact__form__email"
            placeholder="Email"
          />
          <input
            type="text"
            className="contact__form__subject"
            placeholder="Subject"
          />
          <textarea className="contact__form__message" placeholder="Message" />
          <button className="contact__form__button" type="submit">
            Contact
          </button>
        </div>
        <div className="contact__rightImage">
          <img src={require("../assets/pngwing.png")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
