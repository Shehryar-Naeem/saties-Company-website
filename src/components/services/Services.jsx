import React from "react";
import "./Services.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLaptopCode,
//   faChartBar,
//   faCopy,
//   faMarker,
//   faUserGear,
//   faCoins,
// } from "@fortawesome/free-solid-svg-icons";
import { servicesData } from "./ServicesData";
export default function Services() {
  // Icons
  // const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />;
  // const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />;
  // const faCopyIcon = <FontAwesomeIcon icon={faCopy} />;
  // const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />;
  // const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />;
  // const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />;
  return (
    <>
      <div id="services">
        <div className="container">
          <div className="title_headling">
            <h3>What's Services We Are Offering to Our Customers</h3>
            <p>
            Preparing for your success we provide truly prominent IT solutions.
            </p>
          </div>
          <div className="service_wrapper">
            {servicesData.map((item, index) => (
              <div className="service_box">
                <div className="service_icon blue_icon">{item.icon}</div>
                {/* <h4 className="number">{item.id}</h4> */}
                <div className="service_content">
                  <h5>{item.title}</h5>
                  <p>
                    {item.discription}
                  </p>
                  {/* <a href="/" className="read">
                    Read more
                  </a> */}
                </div>
              </div>
            ))}

            {/* <div className="service_box">
              <div className="service_icon">{faChartBarIcon}</div>
              <h4 className="number">02</h4>
              <div className="service_content">
                <h5>Web Development</h5>
                <p>
                  As part of our multi-disciplinary approach to digital
                  development, we bring front-end, back-end, and architecture
                  together to meet your business needs.
                </p>
                <a href="/" className="read">
                  Read more
                </a>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon green_icon">{faCopyIcon}</div>
              <h4 className="number">03</h4>
              <div className="service_content">
                <h5>E-commerce</h5>
                <p>
                  How to Use E-Commerce for Service-Based Businesses. creating
                  strategic digital shopping solutions that deliver tangible
                  business results.
                </p>
                <a href="/" className="read">
                  Read more
                </a>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon">{faMarkerIcon}</div>
              <h4 className="number">04</h4>
              <div className="service_content">
                <h5>SaaS</h5>
                <p>
                  SaaS Services - Automatic IT solution Business.We provide
                  seamless integration & timely maintenance & updates for
                  software infrastructure.
                </p>
                <a href="/" className="read">
                  Read more
                </a>
              </div>
            </div> */}
            {/* <div className="service_box">
              <div className="service_icon green_icon">{faUserGearIcon}</div>
              <h4 className="number">05</h4>
              <div className="service_content">
                <h5>Customer Oriented</h5>
                <p>
                  Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                  doloret quas saepe autem, dolor set.
                </p>
                <a href="/" className="read">
                  Read more
                </a>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon blue_icon">{faCoinsIcon}</div>
              <h4 className="number">06</h4>
              <div className="service_content">
                <h5>Solution Focused</h5>
                <p>
                  Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                  doloret quas saepe autem, dolor set.
                </p>
                <a href="/" className="read">
                  Read more
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
