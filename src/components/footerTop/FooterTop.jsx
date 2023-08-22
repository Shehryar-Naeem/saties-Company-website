import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import "./footer.css";
// import {
//   faFacebookF,
//   faInstagram,
//   faLinkedinIn,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
// import { faAddressCard, faPhone } from "@fortawesome/free-solid-svg-icons";
import { servicesData } from "../services/ServicesData";
const FooterTop = () => {
  // const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />;
  // const linkedinIcon = <FontAwesomeIcon icon={faLinkedinIn} />;
  // const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
  // const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;

  // const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  // const AddressIcon = <FontAwesomeIcon icon={faAddressCard} />;

  return (
    <>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-contact">
              <img src={"/logo/weiblock.png"} alt="weiblock" style={{maxHeight:"90px"}} class="img-fluid"/>
                <p>
                  Oposite Jalalson,
                  <br />
                  State life society,
                  <br />
                  Lahore <br />
                  <br />
                  <strong>Phone:</strong> +92 321 7073725
                  <br />
                  <strong>Email:</strong> usamalatif25@gmail.com
                  <br />
                </p>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  {servicesData.map(({ title }) => (
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="#">{title}</a>
                    </li>
                  ))}
                  
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                
                <div class="social-links mt-3">
                  <a href="#" class="twitter">
                    <i class="bi bi-twitter"></i>
                  </a>
                  <a href="#" class="facebook">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="#" class="instagram">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="#" class="google-plus">
                    <i class="bi bi-skype"></i>
                  </a>
                  <a href="#" class="linkedin">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container footer-bottom clearfix">
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Saties</span>
            </strong>
            . All Rights Reserved
          </div>
          <div class="credits">
            {/* <!-- All the links in the footer should remain intact. -->
    <!-- You can delete the links only if you purchased the pro version. -->
    <!-- Licensing information: https://bootstrapmade.com/license/ -->
    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ --> */}
            Designed by <a href="https://bootstrapmade.com/">weiblock</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTop;
