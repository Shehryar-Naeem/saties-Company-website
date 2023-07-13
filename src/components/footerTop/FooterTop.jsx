import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./footer.css";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAddressCard, faPhone } from "@fortawesome/free-solid-svg-icons";
const FooterTop = () => {
  const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedinIn} />;
  const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
  const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;

  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  const AddressIcon = <FontAwesomeIcon icon={faAddressCard} />;

  return (
    <section className="footer">
      <div className="footer-container">
        <div className="box">
          <h3>Quick links</h3>
          <a>home</a>
          <a>about</a>
          <a>Services</a>
          <a>Portfolio</a>
          <a>Contact</a>
          <a>Marketing</a>
        </div>
        <div className="box">
          <h3>Services</h3>
          <a>Blockchain</a>
          <a>Web Development</a>
          <a>E-commerces</a>
          <a>Sass application</a>
          
        </div>

        <div className="box">
          <h3>Contact Info</h3>
          <a>
            <i>{phoneIcon}</i>+92 311 1404107
          </a>
          <a>
            <i>{phoneIcon}</i>+92 321 7073725
          </a>
          <a>
            <i>{phoneIcon}</i>+92 323 8484188
          </a>
          <a>
            <i>{AddressIcon}</i>State Life Society,opposite jalal sons,Lahore
          </a>
          <div className="follow-links">
          
            <a>
              <i className="fas fa-facebook"></i>{facebookIcon}
            </a>

            <a>
              <i className="fas fa-linkedin"></i>{linkedinIcon}
            </a>
            <a>
              <i className="fas fa-github"></i>{twitterIcon}
            </a>
            <a>
              <i className="fas fa-twitter"></i>{instagramIcon}
            </a>
            
          </div>
        </div>
        
      </div>
     
    </section>
  );
};

export default FooterTop;
