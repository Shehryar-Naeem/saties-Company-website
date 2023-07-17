"use client";
import React, { useRef } from "react";
import "./profile.css";
const Profile = () => {
  return (
    <>
      <section id="portfolio" >
        <div className="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Numbers We Feel Proud Of!</h2>
          <p>
When we say we aim for the best, we set it as our goal to make a change and move mountains with the projects we do. Reach us today with your project goals and join hands to achieve excellence.</p>
        </div>
          {/* <div className="title_headling">
            <h3>INDUSTRIES WE SERVE</h3>
            <p>We provide high-performing software solutions to give businesses a competitive edge.</p>
          </div> */}
          <div class="wrapper">
            <div class="profile-container" data-aos="zoom-in" data-aos-delay="100">
            <i class="bi bi-bar-chart-line"></i>
              <span class="num" data-val="400">
                20+
              </span>
              <span class="text">Projects Delivered</span>
            </div>
            <div class="profile-container" data-aos="zoom-in" data-aos-delay="200">
            <i class="bi bi-person-fill-check"></i>
              <span class="num" data-val="340">
                15+
              </span>
              <span class="text">Happy Customers</span>
            </div>
            <div class="profile-container" data-aos="zoom-in" data-aos-delay="300">
            <i class="bi bi-diagram-3"></i>
              <span class="num" data-val="225">
                5+
              </span>
              <span class="text">Hard Workers</span>
            </div>
            <div class="profile-container" data-aos="zoom-in" data-aos-delay="400">
            <i class="bi bi-calendar2-check"></i>
              <span class="num" data-val="280">
                3+
              </span>
              <span class="text">Year Experience</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
