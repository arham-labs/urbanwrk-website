'use client'
import Image from "next/image";
import section1 from '../../../public/images/about-us/bespoke-office/section-1.png'
import section2 from '../../../public/images/about-us/bespoke-office/section-2.png'
import section3 from '../../../public/images/about-us/bespoke-office/section-3.png'
import section4 from '../../../public/images/about-us/bespoke-office/section-4.png'
import section5 from '../../../public/images/about-us/bespoke-office/section-5.png'
import section6 from '../../../public/images/about-us/bespoke-office/section-6.png'
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Slider from "react-slick";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LinkButton from "@/common/linkbtn";

const titles = [
    { id: 1, title: "TAILORMADE OFFICES", href: "/solutions/tailormade-offices" },
    { id: 2, title: "READY-TO-WORK-IN OFFICES", href: "/solutions/ready-to-work-in" },
    { id: 3, title: "MEETING ROOMS", href: "/solutions/meeting-rooms" },
    { id: 4, title: "VIRTUAL OFFICES", href: "/solutions/virtual-offices" },
    { id: 5, title: "EVENTS & LAUNCHES", href: "/solutions/events-launches" },
    { id: 6, title: "ADVERTISE WITH US", href: "/solutions/advertise-with-us" }
]

const activeData = [
    {
        id: 1,
        desc: "Customised offices with exclusive amenities like breakaway spaces and conference rooms, created according to your brand’s blueprint. Walk into your sustainable office within 30-45 days.",
        list: ["Your customised private office with bespoke design and furnishings", "Flexible lease starting from a 6-month contract", "Full floor occupancy with option to scale", "Sustainable and eco-conscious materials used across", "24/7 access to your workspace", "Priority booking of meeting rooms and access to exclusive events"],
        source: section5,
        btn: "Explore",
        href: "/solutions/tailormade-offices",
        bannerAlt: "tailor-made offices",
    },
    {
        id: 2,
        desc: "Offices that are ready to move in within a week, with full access to all our amenities, lounge and events. Get working in your space that is sustainable, elegant and built for boosting productivity.",
        list: ["Ready office space that can take on your brand identity", "Flexible lease starting from a 6-month contract", "Optimised to fit current team with option to scale up", "IGBC & LEED Certified, sustainable offices", "24/7 access to your workspace"],
        source: section1,
        btn: "Explore",
        href: "/solutions/ready-to-work-in",
        bannerAlt: "ready-to-work-in office",
    },
    {
        id: 3,
        desc: "Connect, create and collaborate in our individually designed meeting rooms, all enabled with the latest technology.",
        list: ["High speed WiFi with video and telephone conferencing technology", "SMART TVs that align with latest OS, and surround sound for immersive projection", "On-call tea and coffee with option to cater available when given a 48-hour notice", "Booking available by the hour, half day or full day"],
        source: section2,
        btn: "Explore",
        href: "/solutions/meeting-rooms",
        bannerAlt: "meeting rooms",
    },
    {
        id: 4,
        desc: "A comprehensive package tailored for those who need the credibility and infrastructure of a permanent office without the physical space. Get a premium address for business registration, professional mail handling and forwarding services.",
        list: ["Get a premium business address", "Easy business registration", "Mail handling and forwarding services", "Priority booking of meeting rooms and access to exclusive events"],
        source: section6,
        btn: "Explore",
        href: "/solutions/virtual-offices",
        bannerAlt: "virtual offices",
    },
    {
        id: 5,
        desc: "Customised event solutions where every detail of your event is meticulously crafted to perfection. Let us take care of the logistics, so you can focus on connecting, celebrating, and inspiring your guests in spaces designed to bring your vision to life.",
        list: ["Capacity to hold up to 250 attendees", "Comprehensive packages with state-of-the-art facilities, sophisticated hospitality, and catering options", "Booking available by the hour, half day or full day"],
        source: section4,
        btn: "Explore",
        href: "/solutions/events-launches",
        bannerAlt: "event & launches",
    },
    {
        id: 6,
        desc: "Make your message stand out. Capitalise on our network of strategic displays to elevate your brand’s presence, connect with your audience on a deeper level, and achieve a lasting impact.",
        list: ["Digital and physical promotional spaces across prime real estate", "Eye-catching digital displays in a network of prestigious location"],
        source: section3,
        btn: "Explore",
        href: "/solutions/advertise-with-us",
        bannerAlt: "advertise with us",
    }
]



export default function SolutionActiveCard() {
    const [showData, setShowData] = useState([]);
    const [headers, setHeaders] = useState([])
    const params = useParams();

    const SampleNextArrow = (props) => {
        const { className, onClick } = props;
        return (
            <ChevronRightIcon
                className={`${className} top-3 w-7 h-7 text-primary hover:text-primary`}
                onClick={onClick}
            />
        );
    };

    const SamplePrevArrow = (props) => {
        const { className, onClick } = props;
        return (
            <ChevronLeftIcon
                className={`${className} top-3 w-7 h-7 text-primary hover:text-primary`}
                onClick={onClick}
            />
        );
    };

    const settings = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    useEffect(() => {
        const newData = [...activeData].filter((el) => {
            if (!el?.href?.includes(params?.solution)) {
                return el
            }
        })
        const titlesData = [...titles].filter((el) => {
            if (!el?.href?.includes(params?.solution)) {
                return el
            }
        })
        setShowData(newData[0])
        setHeaders(titlesData)

    }, [activeData])

    const onClickItem = (id) => {
        const newData = activeData?.find(el => el.id == id)
        setShowData(newData);
    }


    return (
        <div className="flex flex-col gap-10">
            <div className="flex items-center whitespace-nowrap lg:hidden">
                <div className="flex overflow-auto overflow-x-scroll scrollbar-hide w-full">
                    {headers?.map((item, i) =>
                        <a className="text-sm lg:text-base uppercase font-medium w-full lg:w-1/3 text-center border-b border-[#747474] pb-6 cursor-pointer relative" key={i} onClick={() => onClickItem(item.id)}>
                            <span className="mr-5">{item.title}</span>
                            {showData?.id === item?.id ?
                                <div className="bg-primary w-full absolute bottom-0 left-0 h-2"></div>
                                : null}
                        </a>
                    )}
                </div>
            </div>
            <div className="">
                <Slider {...settings}>
                    {headers?.map((item, i) =>
                        <a className="text-sm lg:text-base uppercase font-medium w-full lg:w-1/3 text-center border-b border-[#747474] pb-6 cursor-pointer relative" key={i} onClick={() => onClickItem(item.id)}>
                            <span className="mr-5">{item.title}</span>
                            {showData.id === item?.id ?
                                <div className="bg-primary w-full absolute bottom-0 left-0 h-2"></div>
                                : null}
                        </a>
                    )}
                </Slider>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-24">
                <div className="w-full lg:w-1/2">
                    <Image src={showData?.source} className="aspect-[15/13] w-full" alt={showData?.bannerAlt} />
                </div>
                <div className="flex flex-col w-full lg:w-1/2">
                    <div className="mb-6 lg:mb-7">
                        <p className="leading-6 w-full lg:w-[85%] text-sm lg:text-base mb-7 font-medium">{showData?.desc}</p>
                        <ul className="text-sm flex flex-col font-medium gap-6 lg:gap-4 w-auto lg:w-[80%] list-disc ml-6 lg:ml-7">
                            {showData?.list?.map((el, i) =>
                                <li className="!ml-0" key={i}>{el}</li>
                            )}
                        </ul>
                    </div>
                    <LinkButton title={showData?.btn} href={showData?.href} />
                </div>
            </div>
        </div>)
}

