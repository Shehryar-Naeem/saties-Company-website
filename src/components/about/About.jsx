// import React from 'react';
// import './about.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';

// export default function About() {
//     // Icons
//     const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />
//     const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />
//     const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
//     const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />
//     const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />
//     const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />

//   return (
//     <>
//     <section id="about">
//         <div class="container">
//             <div className="title_headling">
//                 <h3>We Provides Shortage Remarkable Ideas!</h3>
//                 <p>Saties is an information technology, consulting, and business solutions company that helps enterprises use innovation and</p>
//             </div>
//             <div className="about_box_wrapper">
//                 <div className="about_box">
//                     <div className="about_icon">
//                         {faBusinessIcon}
//                     </div>
//                     <div className="about_content">
//                         <h5>Development</h5>
//                         <p>World-class software engineers with excellent problem-solving skills and a deep understanding of Web, cloud, and mobile technologies. We are very fast but maintain a quality focus.</p>
//                     </div>
//                 </div>
//                 <div className="about_box">
//                     <div className="about_icon green_icon">
//                         {faChartPieIcon}
//                     </div>
//                     <div className="about_content">
//                         <h5>Strategy</h5>
//                         <p>Experienced founders who have built and managed tier-one engineering teams, raised capital, delivered products, and sold companies.</p>
//                     </div>
//                 </div>
//                 <div className="about_box">
//                     <div className="about_icon blue_icon">
//                         {faTruckFastIcon}
//                     </div>
//                     <div className="about_content">
//                         <h5>Innovation</h5>
//                         <p>We design transformational digital products and experiences that drive real business value and customer impact—so you can create innovative products faster and at scale.</p>
//                     </div>
//                 </div>
//             </div>

//             <div className="about_box_details">
//                 <div className="about_col">
//                     <div className="about_image">
//                         <img src="about/business_adaptation.jpg" alt="about" className="about_main"/>
//                     </div>
//                     {/* <div className="img_info__box">
//                         <h6 className="img_info__title">GET A PRICE QUOTE TODAY!</h6>
//                         <p>Nemo enim ipsam oluptatem quia oluptas <br/>sit aspernatur aut odit aut fugit.</p>

//                         <a href="/"> <span>1-800-654-3210</span></a>
//                     </div> */}
//                 </div>
//                 <div className="about_col more_space">
//                     <h3>We have business skills that will increase your earnings</h3>
//                     <p>We ensure the highest quality development services & solutions by using a wide range of the latest technologies.We have a certified and experienced team of developers that can provide cutting-edge solutions using this technology stack.</p>

//                     <div className="grid_info">
//                         <div className="icon">{faUserClockIcon}</div>
//                         <div className="detail">
//                             <h4>Start your own business in minutes</h4>
//                             <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
//                         </div>
//                     </div>
//                     <div className="grid_info">
//                         <div className="icon green_icon">{faHouseLaptopIcon}</div>
//                         <div className="detail">
//                             <h4>Open a business account online</h4>
//                             <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//     </>
//   )
// }

import React from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faChartPie,
  faTruckFast,
  faUserClock,
  faHouseLaptop,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  // Icons
  const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />;
  const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />;
  const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />;
  const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />;
  const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />;
  const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />;

  return (
    <>
      <section id="about" class="about">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-6 order-1 order-lg-1"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <img src="assets/img/about.jpg" class="img-fluid" alt="" />
            </div>
            <div
              class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-2 content"
              data-aos="fade-right"
            >
              <h3>
                Digital transformation and product developement company based
              </h3>
              <p class="fst-italic">
                Decentralize the world with an award-winning blockchain software
                outsourcing company. Trust 4ire for blockchain development
                outsourcing. From smart contracts to wallet development, our
                team delivers custom solutions that meet your business needs.
              </p>
              <ul>
                <li>
                  <i class="bi bi-check-circle"></i> Boost your business with
                  our custom blockchain solutions.
                </li>
                <li>
                  <i class="bi bi-check-circle"></i> Get your blockchain project
                  forged by high-class IT professionals.
                </li>
                <li>
                  <i class="bi bi-check-circle"></i> Allowing owners to claim
                  the possession of any physical or digital asset, non-fungible
                  tokens are a hot topic nowadays
                </li>
              </ul>
              {/* <a href="#" class="read-more">Read More <i class="bi bi-long-arrow-right"></i></a> */}
            </div>
          </div>
        </div>
      </section>

      <section id="featured-services" class="featured-services">
        <div class="container">
          <div class="section-title">
            <h2>Technical benefits we bring</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div class="row gy-4">
            <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="bi bi-activity icon"></i>
                </div>
                <h4>
                  <a href="" class="stretched-link">
                    Relevant skills & experience
                  </a>
                </h4>
                <p>
                  All software development team members are selected with
                  relevant skills and experience. If required, the Client can
                  conduct interviews with the candidates whom we suggest and
                  gather the best for the team by themselves.
                </p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div
              class="col-xl-3 col-md-6 d-flex"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="bi bi-bounding-box-circles icon"></i>
                </div>
                <h4>
                  <a href="" class="stretched-link">
                    Improvement & certifications
                  </a>
                </h4>
                <p>
                  Proven experience with certifications. Continuous professional
                  development and improvement.
                </p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div
              class="col-xl-3 col-md-6 d-flex"
              data-aos="zoom-out"
              data-aos-delay="400"
            >
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="bi bi-calendar4-week icon"></i>
                </div>
                <h4>
                  <a href="" class="stretched-link">
                    Quality is guaranteed
                  </a>
                </h4>
                <p>
                  We gathered an experienced team of QA engineers and testers
                  with a great background who ensure the high quality of the
                  final product.
                </p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div
              class="col-xl-3 col-md-6 d-flex"
              data-aos="zoom-out"
              data-aos-delay="600"
            >
              <div class="service-item position-relative">
                <div class="icon">
                  <i class="bi bi-broadcast icon"></i>
                </div>
                <h4>
                  <a href="" class="stretched-link">
                    Modern technologies & approaches
                  </a>
                </h4>
                <p>
                Tech stack and design and development processes follow the recent trends and the most recent approaches and developments.
                </p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}
          </div>
        </div>
      </section>
    </>
  );
}
