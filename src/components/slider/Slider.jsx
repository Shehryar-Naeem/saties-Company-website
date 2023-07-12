'use client'
import React from 'react'
import Slider from 'react-slick'
import  "./slider.css"
import { SliderData } from './sliderData'

const SliderPage = () => {
    const setting={
        autoplay:true,
        autoplaySpeed:2000,
        infinite: true,
        speed: 500,

        
      }
  return (
    <div className="home_container">

            <Slider {...setting}>
            {
                SliderData.map((data)=>{
                    return(
                        <div className="slider_container" key={data.id}>
                            <img src={data.image} className="size" alt="vue images"/>
                        </div>
                    )
                })
            }
            </Slider>
            
          </div>
  )
}

export default SliderPage