"use client"
import React from 'react'
import LocationSpaceCard from './locationSpaceCard'
import Slider from "react-slick";

export default function LocationParkSlider({ data, location }) {


  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  }



  return (
    <div className="slider-container">
      <Slider {...settings} >
        {data.map((el, index) => (
            <LocationSpaceCard el={el} key={index} location={location} />
        ))}
      </Slider>
    </div>)
}
