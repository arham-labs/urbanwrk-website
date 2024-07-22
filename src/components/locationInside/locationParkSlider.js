"use client"
import React from 'react'
import LocationSpaceCard from './locationSpaceCard'
import Slider from "react-slick";

export default function LocationParkSlider({ data, location }) {


  var settings = {
    dots: true,
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
      <Slider {...settings} className='mb-8'>
          {data.map((el, index) => (
            <LocationSpaceCard el={el} key={index} location={location} />
          ))}
      </Slider>
      <style jsx global>{`
        .slick-dots{
           bottom: -65px !important;
        }
        .slick-dots li {
          display: inline-block;
          margin: 0 !important;
      }
      `}

      </style>
    </div>)
}
