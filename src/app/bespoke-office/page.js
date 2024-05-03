import Link from "next/link";
import Image from "next/image";
import Blog from "@/common/blog";
import Testimonial from "@/common/testimonial";
import CommonCard from "@/common/commoncard";
import Herobanner from "@/components/solutions/herobanner";
import ActiveCard from "@/common/activecard";

export default function Page() {

    const ChooseData = [
        { title: "We match your pace", source: "/images/about-us/workwing-1.png", desc: "At whatever stage your journey, we support you with flexible contracts, and the ability to scale up or down with complete ease." },
        { title: "We are where work thrives", source: "/images/about-us/workwing-2.png", desc: "Every space we are in is the best and buzziest neighbourhood when it comes to work. Connectivity, restaurants, cafes and safety, everything is the best that your city has to offer." },
        { title: "We take the work out of work", source: "/images/about-us/workwing-3.png", desc: "A great reception, smooth employee management and payroll, a certified sustainable office, world-class infrastructure and an ability to open offices in new cities. Need anything else?" }
    ]

    return (
        <div>
            <Herobanner />
            <div className="bg-bglight6 py-16 lg:py-20">
                <div className="w-[88%] m-auto">
                    <span className="text-2xl font-medium block mb-10">WHY CHOOSE US?</span>
                    <CommonCard data={ChooseData} />
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
                                <div className="flex items-start gap-5 lg:gap-10" key={i}>
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
                    <Image src="/images/solutions/productivity.png" alt="productivity" width={900} height={900} className="w-full aspect-[8/9] lg:aspect-[13/11]" />
                </div>
            </div>
            <div className="bg-bglight2 py-14 lg:py-20">
                <div className="px-6 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[120px]">
                    <div className="w-full lg:w-[500px] text-2xl lg:text-4xl 2xl:text-5xl mb-6 lg:mb-14 flex flex-col gap-2 lg:gap-3">
                        <span className="font-medium">See more ways</span>
                        <span className="font-kepler">to finds your space</span>
                    </div>
                    <ActiveCard />
                </div>
            </div>
            <Blog />
            <Testimonial />
        </div>
    )
}

