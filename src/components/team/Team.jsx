"use client"
import React from 'react'
import "./team.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faArrowLeft, faArrowRight,faShoppingCart ,faEye,faShare, } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { shopData } from './TeamData';
const Team = () => {

    const LeftArrow = <FontAwesomeIcon icon={faArrowLeft} />
    const RightArrow = <FontAwesomeIcon icon={faArrowRight} />
    const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />
    const linkedinIcon = <FontAwesomeIcon icon={faLinkedinIn} />
    const githubIcon = <FontAwesomeIcon icon={faGithub} />

    const PrevBtn=(prop)=>{
        const {className,onClick}=prop;
        return (
          <>
          <div className={className} onClick={onClick}  >
            <LeftArrow style={{color:"#fff",fontSize:"2rem"}}/>
          </div>
          </>
        )
      }
      const NextBtn=(prop)=>{
        const {className,onClick}=prop;
        return (
          <>
          <div className={className} onClick={onClick}>
            <RightArrow style={{color:"#fff",fontSize:"2rem"}}/>
          </div>
          </>
        )
      }
      const setting={
        slidesToShow:3,
        // prevArrow:<PrevBtn/>,
        // nextArrow:<NextBtn/>,
        centerMode:true,
        autoplay:true,
        autoplaySpeed:3000,
        infinite: true,
        speed: 500,
    
        responsive:[
          {
            breakpoint:556,
            settings:{
              slidesToShow:1,
              centerMode:false
            }
          },
          {
            breakpoint:768,
            settings:{
              slidesToShow:2,
              centerMode:false
            }
          },
          {
            breakpoint:991,
            settings:{
              slidesToShow:3,
              centerMode:false
            }
          },
          {
            breakpoint:1200,
            settings:{
              slidesToShow:4,
              centerMode:false
            }
          }
        ]
      }
  return (
    <section id="team">
    <div className="container">
      <div className="title_headling">
        <h3>Team</h3>
        <p>Meet my most skillfull team members</p>
      </div>
      <Slider
      {...setting}
      >
       {
        shopData.map((cur,index)=>{
          return (
            <>
            <div className="slide" key={index}>
              <div key={index} className="images">
                <div className='img_container'>

                <img src={cur.pic} className="size" alt="product Images"/>
                </div>
                <div className="icons">
                    <a className="fas fa-shopping-cart">{facebookIcon}</a>
                    <a className="fas fa-eye">{linkedinIcon}</a>
                    <a className="fas fa-share">{githubIcon}</a>
                </div>
              </div>
              <div className="content">
                <h2>{cur.title}</h2>
                <p>{cur.price}</p>
                {/* <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i> 
                  <i className="fas fa-star-half-alt"></i>
                </div> */}
              </div>
            </div>
            </>
          )
        })
       }
      </Slider>
      </div>
    </section>
  )
}

export default Team