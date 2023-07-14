"use client";
import React, { useRef } from "react";
import "./profile.css";
const Profile = () => {
  return (
    <>
      <section id="team">
        <div className="container">
        <div class="section-title">
          <h2>INDUSTRIES WE SERVE</h2>
          <p>We provide high-performing software solutions to give businesses a competitive edge.</p>
        </div>
          {/* <div className="title_headling">
            <h3>INDUSTRIES WE SERVE</h3>
            <p>We provide high-performing software solutions to give businesses a competitive edge.</p>
          </div> */}
          <div class="wrapper">
            <div class="profile-container">
              <i class="fas fa-utensils"></i>
              <span class="num" data-val="400">
                20+
              </span>
              <span class="text">Projects Delivered</span>
            </div>
            <div class="profile-container">
              <i class="fas fa-smile-beam"></i>
              <span class="num" data-val="340">
                15+
              </span>
              <span class="text">Happy Customers</span>
            </div>
            <div class="profile-container">
              <i class="fas fa-list"></i>
              <span class="num" data-val="225">
                5+
              </span>
              <span class="text">Hard Workers</span>
            </div>
            <div class="profile-container">
              <i class="fas fa-star"></i>
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
