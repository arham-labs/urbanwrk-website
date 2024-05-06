'use client'
import Image from "next/image";
import Slider from "react-slick";
import Radha from '../../public/images/radha-shrestha.png'
import Affinity from '../../public/images/affinity-banner.png'
import AON from '../../public/images/aon-banner.png'
import Quote from '../../public/images/quote.svg'
import CoinDCX from '../../public/images/coindcx.svg'
import AffinityLogo from '../../public/images/affinity.svg';
import AONLogo from '../../public/images/aon.svg'
import LinkButton from "./linkbtn";

export default function Testimonial({ leftAlign }) {

    const reviewsData = [
        { name: "Radha Shrestha", position: "Director", desc: "The flexibility and scalability allowed CoinDCX to adapt quickly to new markets and team sizes.", logo: CoinDCX, source: Radha },
        { name: "Amit Phogat", position: "Manager", desc: "UrbanWrk offers the best of modern worksapces, premium hospitality and hassle-free processes with flexible solutions.", logo: AONLogo, source: AON },
        { name: "Rahuk Kamble", position: "Senior Manager, HR", desc: "We appreciate the excellent assistance and support we receive from the UrbanWrk team. We love the high-quality service and professionalism.", logo: AffinityLogo, source: Affinity }
    ]

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <div className="bg-bglight4 pt-16 pb-24 px-6">
            <Slider {...settings}>
                {reviewsData.map((el, i) =>
                    <div className="text-center !flex lg:text-left px-0 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[100px]" key={i}>
                        <div className="flex lg:flex-row flex-col gap-5 lg:gap-20 w-full mb-8 lg:mb-0">
                            <div className="w-full lg:w-[45%]">
                                <Image src={el.source} alt="image" width={1920} height={1080} className="aspect-[10/8] lg:aspect-[9/7] w-full h-full" />
                            </div>
                            <div className="w-full lg:w-[55%] flex flex-col justify-center items-center lg:items-start gap-2 pt-6 lg:pt-0">
                                <div className="flex items-start gap-0 lg:gap-8">
                                    <Image src={Quote} className="w-7 lg:w-12" alt="quote" />
                                    <p className="leading-[21px] !lg:leading-6 text-sm lg:text-base 2xl:text-lg font-medium mt-2 lg:mt-5">{el.desc}</p>
                                </div>
                                <div className="flex flex-col lg:items-baseline">
                                    <div className="flex flex-col items-center lg:items-start gap-1 mb-5">
                                        <span className="text-sm lg:text-base font-semibold">{el.name}</span>
                                        <span className="font-kepler text-sm lg:text-base">{el.position}</span>
                                        <Image src={el.logo} alt="logo" className={`${i == 2 ? "w-20" : "w-14"}`} />
                                    </div>
                                    <LinkButton title="Discover more" href="" margin={true}/>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Slider>
            <style>{`
             .slick-dots{
                text-align: center !important;
             }
             .slick-dots li { margin: 0 !important; }
             .slick-dots li button:before { 
                color: #C72030 !important; 
                font-size: 8px !important;
            }
            @media screen and (min-width:1024px){
                .slick-dots{
                    bottom: -52px !important;
                }
            }
            `}
            </style>
        </div>
    )
}

