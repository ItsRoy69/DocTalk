import React from 'react';
import './Footer.css';
import { BrowserRouter as Route, Link } from "react-router-dom";
import illustration1 from '../../images/illustration1.png';

const Footer = () => {
  return (
      <div className="footer">
        <div className="container-fluid">
          <div className=" foot">
            <div className="footer__text">
              <div className="contact" id="Contact">
                <div className="contact__box">
                  <div className="contact__meta">
                    <h1>Contact Us</h1>
                    <p>You can contact us via mail</p>
                  </div>
                  <div className="boxes">
                    <div className="input__box">
                      <input type="text" className="contact name" placeholder="Your name *" />
                      <input type="text" className="contact email" placeholder="Your Email *" />
                      <input type="text" className="contact subject" placeholder="Write a Subject" />
                      <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                      <a href="mailto:jyotirmoyroy649@gmail.com"><button className="btn contact pointer" type="submit">Submit</button></a>
                    </div>
                    <div className="image">
                      <img src={illustration1} alt="" className="contact__img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
