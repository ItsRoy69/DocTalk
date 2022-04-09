import React from 'react';
import illustration from '../../images/illustration1.png';
import './FrontPage.css'

const FrontPage = () => {
  return (
    <div className="frontpage">
      <div className="container-fluid">
        <div className="container">
          <div className="banner row flex-lg-row-reverse justify-content-end align-items-flex-end ">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 pb-5 py-3">
              <img src={illustration} alt="TopImage"/>
            </div>

            <div className="banners col-lg-8 ">
              <h1 className="head display-4 fw-bold lh-1 mb-3">DocTalk</h1>
              <p className="lead">
                  DocTalk is your ultimate medical help space. Here, at DocTalk you will be helped with all the services catering towards the medical field like Plasma donors’ hospital beds oxygen suppliers medicine suppliers and ambulance providers. DocTalk is your one step solution. Just log into your account and book your appointment right away. you can even call us for your appointment, and we will get back to you shortly.
              </p>

              <div className="banner__input">
                <div className="banner__up">
                  <a href="#services">
                    <button type="button">Services</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
