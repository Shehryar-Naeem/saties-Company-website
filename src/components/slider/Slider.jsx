"use client";
import React from "react";
import Slider from "react-slick";
import "./slider.css";
import { SliderData } from "./sliderData";

const SliderPage = () => {
  const setting = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
  };
  return (
    <div className="home_container" id="home">
      <Slider {...setting}>
        {SliderData.map((data) => {
          return (
            <div className="slider_container" key={data.id}>
              {/* <img  alt="vue images" /> */}
              <video autoplay="autoplay" loop muted className="size">
                <source src={data.image}  type="video/mp4" />
              </video>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderPage;
