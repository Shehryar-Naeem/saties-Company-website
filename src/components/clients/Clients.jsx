"use client";
import React from "react";
import "./Clients.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faChartPie,
  faTruckFast,
  faUserClock,
  faHouseLaptop,
  faPhone,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { data } from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
  const set = {
    slidesToShow: 5,
    centerMode: false,
    responsive: [
      {
        breakpoint: 556,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          centerMode: false,
        },
      },
    ],
    // responsive:[
    //     {
    //         breakpoint:556,
    //         settings:{
    //             slidesToShow:1,
    //             centerMode:false
    //         }
    //     },
    //     {
    //         breakpoint:768,
    //         settings:{
    //             slidesToShow:2,
    //             centerMode:false
    //         }
    //     }
    // ]
  };

  return (
    // <section id="team">
    //   <div className="container">
    //     <div className="title_headling">
    //       <h3>Client</h3>
    //       <p>Most Satisfied Clients</p>
    //     </div>
    //     <div style={{paddingTop:"5rem"}}>

    //     <Slider

    //     {...set}>
    //       {data.map((cur, index) => {
    //         return (
    //           <>
    //             <div key={index} style={{display:"flex", justifyContent:"space-evenly", margin: "0 1rem"}} >
    //               <div className='image_container'>

    //               <img
    //                 src={cur}
    //                 className='size'
    //               />
    //               </div>

    //             </div>
    //           </>
    //         );
    //       })}
    //     </Slider>
    //     </div>

    //   </div>
    // </section>
    <>
      <section id="team" class="team section-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Client</h2>
            <p>
            Most Satisfied Clients
            </p>
          </div>

          <div class="row">
            <Slider {...set}>
              {data.map((cur, index) => {
                return (
                  <>
                    <div
                      class="col-lg-6 mt-4 mt-lg-0"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <div class="member d-flex align-items-start">
                        <div class="pic">
                          <img src={cur} class="img-fluid" alt="" />
                        </div>
                        {/* <div class="member-info">
                          <h4>Sarah Jhonson</h4>
                          <span>Product Manager</span>
                          <p>
                            Aut maiores voluptates amet et quis praesentium qui
                            senda para
                          </p>
                          <div class="social">
                            <a href="">
                              <i class="ri-twitter-fill"></i>
                            </a>
                            <a href="">
                              <i class="ri-facebook-fill"></i>
                            </a>
                            <a href="">
                              <i class="ri-instagram-fill"></i>
                            </a>
                            <a href="">
                              {" "}
                              <i class="ri-linkedin-box-fill"></i>{" "}
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </>
                );
              })}
            </Slider>
            {/* <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
              <div class="member d-flex align-items-start">
                <div class="pic">
                  <img
                    src="assets/img/team/team-1.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>
                    Explicabo voluptatem mollitia et repellat qui dolorum quasi
                  </p>
                  <div class="social">
                    <a href="">
                      <i class="ri-twitter-fill"></i>
                    </a>
                    <a href="">
                      <i class="ri-facebook-fill"></i>
                    </a>
                    <a href="">
                      <i class="ri-instagram-fill"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i class="ri-linkedin-box-fill"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-lg-6 mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div class="member d-flex align-items-start">
                <div class="pic">
                  <img
                    src="assets/img/team/team-2.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <p>
                    Aut maiores voluptates amet et quis praesentium qui senda
                    para
                  </p>
                  <div class="social">
                    <a href="">
                      <i class="ri-twitter-fill"></i>
                    </a>
                    <a href="">
                      <i class="ri-facebook-fill"></i>
                    </a>
                    <a href="">
                      <i class="ri-instagram-fill"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i class="ri-linkedin-box-fill"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
              <div class="member d-flex align-items-start">
                <div class="pic">
                  <img
                    src="assets/img/team/team-3.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <p>
                    Quisquam facilis cum velit laborum corrupti fuga rerum quia
                  </p>
                  <div class="social">
                    <a href="">
                      <i class="ri-twitter-fill"></i>
                    </a>
                    <a href="">
                      <i class="ri-facebook-fill"></i>
                    </a>
                    <a href="">
                      <i class="ri-instagram-fill"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i class="ri-linkedin-box-fill"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
              <div class="member d-flex align-items-start">
                <div class="pic">
                  <img
                    src="assets/img/team/team-4.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <p>
                    Dolorum tempora officiis odit laborum officiis et et
                    accusamus
                  </p>
                  <div class="social">
                    <a href="">
                      <i class="ri-twitter-fill"></i>
                    </a>
                    <a href="">
                      <i class="ri-facebook-fill"></i>
                    </a>
                    <a href="">
                      <i class="ri-instagram-fill"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i class="ri-linkedin-box-fill"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
