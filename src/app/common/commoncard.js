'use client'
import Image from "next/image";
import Slider from "react-slick";

export default function CommonCard({ top }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <>
            <div className="lg:flex gap-8 hidden">
                {Array(3).fill("").map((_, i) =>
                    <div className={`flex flex-col ${top && i == 1 ? "lg:top-[70px]" : "top-0"} relative`} key={i}>
                        <div className="border-b-[10px] border-primary mb-7 lg:mb-10">
                            <Image src="/images/about-us/image-3.png" width={600} height={600} className="aspect-[17/19]" alt="card" />
                        </div>
                        <span className="text-2xl font-medium block mb-3 lg:mb-5">Progressive</span>
                        <p className="leading-[21px] text-sm">We're always moving ahead, pushing the envelope with sustainable innovations for a world that never stands still.Find your place in a workspace that mirrors your commitment to making a daily difference. We are here to be champions of your
                            values that fuel positive change.</p>
                    </div>
                )}
            </div>
            <div className="lg:hidden">
                <Slider {...settings}>
                    {Array(3).fill("").map((_, i) =>
                        <div className={`flex flex-col ${top && i == 1 ? "lg:top-[70px]" : "top-0"} relative`} key={i}>
                            <div className="border-b-[10px] border-primary mb-7 lg:mb-10">
                                <Image src="/images/about-us/image-3.png" width={600} height={600} className="aspect-[17/19]" alt="card" />
                            </div>
                            <span className="text-2xl font-medium block mb-3 lg:mb-5">Progressive</span>
                            <p className="leading-[21px] text-sm">We're always moving ahead, pushing the envelope with sustainable innovations for a world that never stands still.Find your place in a workspace that mirrors your commitment to making a daily difference. We are here to be champions of your
                                values that fuel positive change.</p>
                        </div>
                    )}
                </Slider>
            </div>
            <style jsx global>{`
             .slick-dots{
                text-align: left !important;
                bottom: -42px !important;
             }
             .slick-dots li { margin: 0 !important; }
             .slick-dots li button:before { 
                color: #C72030 !important; 
                font-size: 8px !important;
            }
            `}
            </style>
        </>

    )
}

