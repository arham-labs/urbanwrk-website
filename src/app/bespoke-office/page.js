import Link from "next/link";
import CommonCard from "../common/commoncard";
import Image from "next/image";
import Blog from "../common/blog";
import Testimonial from "../common/testimonial";

export default function Page() {

    const ChooseData = [
        { title: "We match your pace", source: "/images/about-us/workwing-1.png", desc: "At whatever stage your journey, we support you with flexible contracts, and the ability to scale up or down with complete ease." },
        { title: "We are where work thrives", source: "/images/about-us/workwing-2.png", desc: "Every space we are in is the best and buzziest neighbourhood when it comes to work. Connectivity, restaurants, cafes and safety, everything is the best that your city has to offer." },
        { title: "We take the work out of work", source: "/images/about-us/workwing-3.png", desc: "A great reception, smooth employee management and payroll, a certified sustainable office, world-class infrastructure and an ability to open offices in new cities. Need anything else?" }
    ]


    return (
        <div>
            <div className="bg-bglight6 py-16 lg:py-20">
                <div className="w-[88%] m-auto">
                    <span className="text-2xl font-medium block mb-10">WHY CHOOSE US?</span>
                    <CommonCard data={ChooseData}/>
                </div>
            </div>
            <div className="bg-bglight3 text-white pb-14 lg:pb-0">
                <div className="flex flex-col lg:flex-row items-center lg:pl-0 max-w-[1920px] mx-auto 2xl:pr-40 lg:pr-[120px] gap-10 lg:gap-20">
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <Image src="/images/solutions/space.png" alt="space" width={800} height={800} className="w-full aspect-[8/9] lg:aspect-[7/8]" />
                            <div className="absolute top-1/2 text-3xl lg:text-5xl left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center flex-col">
                                <span className="block mb-2">You space,</span>
                                <span className="font-kepler">made easy</span>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 lg:px-0 w-full lg:w-1/2 flex flex-col gap-7 lg:gap-14">
                        <div className="w-full lg:w-[65%] m-auto flex flex-col items-center gap-5 lg:gap-10">
                            {Array(3).fill("").map((el, i) =>
                                <div className="flex items-start gap-5 lg:gap-10">
                                    <span className="text-3xl lg:text-5xl text-primary font-kepler">0{i + 1}</span>
                                    <div className="flex flex-col gap-1 lg:gap-2 text-dark">
                                        <span className="text-lg lg:text-2xl">Meet with our team</span>
                                        <p className="leading-4 lg:leading-6 text-xs lg:text-sm font-normal">Share your requirements so that we can work out the best solution for your organisation size</p>
                                    </div>
                                </div>
                            )}
                            <Link href="/" className="bg-black w-fit px-7 py-1 mt-5 lg:mt-0">Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:pr-0 max-w-[1920px] mx-auto 2xl:pl-40 lg:pl-[120px] gap-10 lg:gap-20">
                <div className="px-6 pt-10 lg:p-0 w-full lg:w-1/2">
                    <div className="flex flex-col w-full lg:w-[75%] text-2xl lg:text-4xl 2xl:text-5xl">
                        <span className="font-medium">Planet-first</span>
                        <span className="font-kepler mt-1">productivity</span>
                        <p className="leading-6 mt-5 text-sm 2xl:text-base">Our design philosophy integrates natural elements into our workspaces through biophilic design to reduce your ecological footprint and enhance productivity, boost mood, and foster a sense of well-being every time you walk in.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                     <Image src="/images/solutions/productivity.png" width={900} height={900} className="w-full aspect-[8/9] lg:aspect-[13/11]"/>
                </div>
            </div>
            {/* <div className="w-[88%] m-auto py-24 flex items-start gap-10">
                <div className="w-1/2 flex flex-col gap-3">
                    <div className="w-[80%] flex flex-col">
                        <span className="text-5xl font-medium block mb-2">The best version</span>
                        <span className="text-5xl font-kepler">of your vision</span>
                        <p className="leading-6 text-sm mt-5">Your office space should reflect your ambition. We marry eco-conscious design principles with high aesthetics for a sustainable and stunning space. Biophilic design creates the warm, inviting environment so essential for mental wellness and productivity boost. Better air and water quality, water conservation, and superior HVAC standards are fundamental to every office. With your brand integrated at key touchpoints, your office becomes a part of your organisation's experience.</p>
                        <Link href="/" className="mt-5">Know more</Link>
                    </div>
                </div>
                <div className="w-1/2 flex justify-end">
                    <div className="w-[75%] bg-bglight1 py-14 px-20 flex flex-col gap-12">
                        {Array(3).fill("").map((el, i) =>
                            <div key={i} className="flex flex-col gap-2">
                                <span className="font-medium text-xl">Certifiably superior</span>
                                <p className="leading-6 text-sm">India's first Platinum rated IGBC Offices that add an element of pride and modernity</p>
                            </div>
                        )}
                    </div>
                </div>
            </div> */}
            <div className="bg-bglight2 py-16 lg:py-20">
                <div className="px-6 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[120px]">
                    <div className="w-[500px] mb-14 flex flex-col gap-3">
                        <span className="text-5xl font-medium">See more ways</span>
                        <span className="text-5xl font-kepler">to finds your space</span>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="border-b border-[#747474] pb-4 flex justify-center items-center">
                            {Array(4).fill("").map((_, i) =>
                                <a className="text-xl uppercase w-1/3 text-center">
                                    <span>Flexi Desks</span>
                                </a>
                            )}
                        </div>
                        <div className="flex items-center gap-24">
                            <div className="w-1/2">
                                <Image src="/images/office.png" width={800} height={800} className="aspect-[15/13]" alt="image" />
                            </div>
                            <div className="flex flex-col w-1/2">
                                <div className="border-b border-[#747474] pb-10">
                                    <p className="leading-6 w-[85%] text-base mb-7">Semi-branded offices for a team of up to 100 people that are ready to move in within a week, with full access to all our amenities, lounge and events. Get working in your space that is sustainable, beautiful and built for boosting productivity.</p>
                                    <ul className="text-sm flex flex-col gap-4 w-[80%] list-disc ml-7">
                                        {Array(5).fill("").map((el, i) =>
                                            <li>Ready office space that can take on your brand identity</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Blog/>
            <Testimonial/>
        </div>
    )
}

