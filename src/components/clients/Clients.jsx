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
    <section id="team">
       <div className="container">
         <div className="section-title">
           <h3>Client</h3>
           <p>Most Satisfied Clients</p>
         </div>
         <div style={{paddingTop:"5rem"}}>

         <Slider

         {...set}>
           {data.map((cur, index) => {
             return (
               <>
                 <div key={index} style={{display:"flex", justifyContent:"space-evenly", margin: "0 1rem"}} >
                   <div className='image_container'>

                   <img
                     src={cur}
                     className='size'
                   />
                   </div>

                 </div>
               </>
             );
           })}
         </Slider>
         </div>

       </div>
     </section>
    
  );
};

export default Clients;
