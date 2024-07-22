import React from "react";
import Slider from "react-slick";
import SolutionCard from "./solutionCard";


export default function SolutionSlider({ data }) {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    }

    return (
        <div className="slider-container ">
            <Slider {...settings} className='mb-8'>
                {data?.map((item, index) => (
                    <div key={index} className="pl-[30px] max-w-[100%] " >
                        <SolutionCard item={item} />
                    </div>
                ))}
            </Slider>
            <style jsx global>{`
            .slick-dots{
                text-align: center;
            }
        .slick-dots li {
          display: inline-block;
          margin: 0 !important;
      }
      `}

            </style>
        </div>
    );
}
