'use client'
import Image from "next/image";
import section1 from '../../public/images/about-us/bespoke-office/section-1.png'
import section2 from '../../public/images/about-us/bespoke-office/section-2.png'
import section3 from '../../public/images/about-us/bespoke-office/section-3.png'
import section4 from '../../public/images/about-us/bespoke-office/section-4.png'
import { useState } from "react";
import LinkButton from "./linkbtn";

const titles = [
    { id: 1, title: "READY-TO-WORK IN OFFICES" },
    { id: 2, title: "MEETING ROOMS" },
    { id: 3, title: "EVENTS & SHOOTS" },
    { id: 4, title: "ADVERTISE WITH US" }
]

const activeData = [
    {
        id: 1,
        desc: "Semi-branded offices for a team of up to 100 people that are ready to move in within a week, with full access to all our amenities, lounge and events. Get working in your space that is sustainable, beautiful and built for boosting productivity.",
        list: ["Ready office space that can take on your brand identity", "Flexible lease starting from a 6-month contract", "Optimised to fit current team with option to scale up", "WELL & LEED Certified, sustainable and eco-conscious offices", "24/7 access to your workspace"],
        source: section2,
        btn: "Contact us"
    },
    {
        id: 2,
        desc: "Connect, create and collaborate in our individually designed meeting rooms, all enabled with the latest technology.",
        list: ["High speed WiFi with video and telephone conferencing technology", "SMART TVs that align with latest OS, and surround sound for immersive projection", "On-call tea and coffee with option to cater available when given 48-hour notice", "Booking available by the hour, half day or full day"],
        source: section1,
        btn: "Book now"
    },
    {
        id: 3,
        desc: "Tailormade event solutions where every detail of your event is meticulously crafted to perfection. Let us take care of the logistics, so you can focus on connecting, celebrating, and inspiring your guests in spaces designed to bring your vision to life.",
        list: ["Capacity to hold up to 250 attendees", "Comprehensive packages with state-of-the-art facilities, sophisticated hospitality, and gourmet catering options", "Booking available by the hour, half day or full day"],
        source: section4,
        btn: "Contact us"
    },
    {
        id: 4,
        desc: "Make your message stand out. Capitalise on our network of strategic displays to elevate your brand’s presence, connect with your audience on a deeper level, and achieve a lasting impact.",
        list: ["Digital and physical promotional spaces across more than 10 mn sq ft of prime real estate", "Eye-catching digital displays in a network of prestigious location"],
        source: section3,
        btn: "Book now"
    }
]

export default function ActiveCard() {
    const [showData, setShowData] = useState([activeData[0]]);

    const onClickItem = (id) => {
        const newData = [...activeData].filter(el => el.id == id)
        setShowData(newData);
    }

    return (
        <div className="flex flex-col gap-10">
            <div className="flex items-center whitespace-nowrap">
                <div className="flex overflow-auto overflow-x-scroll scrollbar-hide w-full">
                    {titles.map((item, i) =>
                        <a className="text-sm lg:text-base uppercase font-medium w-full lg:w-1/3 text-center border-b border-[#747474] pb-6 cursor-pointer relative" key={i} onClick={() => onClickItem(item.id)}>
                            <span className="mr-5">{item.title}</span>
                            {showData[0].id === item.id ?
                                <div className="bg-primary w-full absolute bottom-0 left-0 h-2"></div>
                                : null}
                        </a>
                    )}
                </div>
            </div>
            {showData.map((item, i) =>
                <div className="flex flex-col lg:flex-row items-end gap-10 lg:gap-24" key={i}>
                    <div className="w-full lg:w-1/2">
                        <Image src={item.source} className="aspect-[15/13] w-full" alt="image" />
                    </div>
                    <div className="flex flex-col w-full lg:w-1/2">
                        <div className="border-b border-[#747474] pb-6 lg:pb-10 mb-6 lg:mb-7">
                            <p className="leading-6 w-full lg:w-[85%] text-sm lg:text-base mb-7 font-medium">{item.desc}</p>
                            <ul className="text-sm flex flex-col font-medium gap-6 lg:gap-4 w-auto lg:w-[80%] list-disc ml-6 lg:ml-7">
                                {item.list.map((el, i) =>
                                    <li key={i}>{el}</li>
                                )}
                            </ul>
                        </div>
                        <LinkButton title={item.btn} href="" />
                    </div>
                </div>
            )}
        </div>)
}

