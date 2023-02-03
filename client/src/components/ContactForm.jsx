import React from 'react'
import contact from "../assets/images/contact.png";
import user from "../assets/images/user.png";
import emailImg from "../assets/images/email.png";
import subject from "../assets/images/subject.png";
import message from "../assets/images/message.png";

const ContactForm = () => {
    return (
        <form className="contact" id="contact">
            <div className="contact__heading">Contact Us</div>
            <div className="contact__main">
                <div className="contact__form">
                    <div className="input__name">
                        <div className="input_container">
                            <img src={user} alt="first-name" />
                            <input
                                type="text"
                                className="contact__form__name"
                                placeholder="FirstName"
                            />
                        </div>
                        <div className="input_container">
                            <img src={user} alt="last-name" />
                            <input
                                type="text"
                                className="contact__form__name"
                                placeholder="LastName"
                            />
                        </div>
                    </div>
                    <div className="input_container">
                        <img src={emailImg} alt="email" />
                        <input
                            type="email"
                            className="contact__form__email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="input_container">
                        <img src={subject} alt="subject" />
                        <input
                            type="text"
                            className="contact__form__subject"
                            placeholder="Subject"
                        />
                    </div>
                    <div className="input_container">
                        <img src={message} alt="message" />
                        <textarea
                            className="contact__form__message"
                            placeholder="Message"
                        />
                    </div>
                    <button className="contact__form__button" type="submit">
                        Contact
                    </button>
                </div>
                <div className="contact__rightImage">
                    <img src={contact} alt="contact-us" width="500" height="500" />
                </div>
            </div>
        </form>
    )
}

export default ContactForm