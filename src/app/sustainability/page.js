import Image from "next/image";
import Blog from "../common/blog";
import Companies from "../common/companies";

export default function Page() {
    const sustainData = ["GREEN INTERIORS", "PLATINUM RATING BY IGBC", "HEALTH & WELLBEING (WELL) RATING", "PLATINUM RATING BY IGBC"]
    return (
        <div>
            <div className="pt-16 lg:py-0 bg-bglight1">
                <div className="max-w-[1920px] lg:pr-0 mx-auto 2xl:pl-40 lg:pl-[120px] flex flex-col lg:flex-row items-center">
                    <div className="px-6 lg:px-0 flex flex-col gap-3 lg:gap-5 w-full lg:w-1/2 mb-10 lg:mb-0">
                        <div className="flex flex-row text-2xl lg:text-4xl 2xl:text-5xl gap-3">
                            <span>Lead with</span>
                            <span className="font-kepler mt-[1.5px]">integrity</span>
                        </div>
                        <p className="text-sm 2xl:text-base">With the first and only IGBC Platinum rated office spaces in India</p>
                        <Image src="/images/sustainability/igbc.svg" alt="igbc" width={80} height={80} className="w-16 lg:w-20 2xl:w-24 my-3 lg:my-0" />
                        <ul className="leading-6 text-sm 2xl:text-base">
                            {sustainData.map((el, i) =>
                                <li>{el}</li>
                            )}
                        </ul>
                    </div>
                    <div className="aspect-[6/5] lg:aspect-[16/14] w-full lg:w-1/2">
                        <Image src="/images/sustainability/banner.png" className="w-full h-full" width={800} height={800} alt="banner" />
                    </div>
                </div>
            </div>
            <div className="px-6 py-14 lg:py-20 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[120px] flex flex-col lg:flex-row items-start">
                <div className="flex flex-col w-full lg:w-[65%]">
                    <div className="w-full lg:w-[91%] 2xl:w-[72%]">
                        <p className="text-sm 2xl:text-base leading-6 mb-6">Our commitment to sustainability is exemplified through our Platinum Rated Green Interiors, which represent the highest standard in environmentally responsible building practices.  We minimise ecological impact and ensure that our workspaces support the well-being of our clients and contribute positively to the environment.</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {Array(4).fill("").map((_, i) =>
                                <div className="flex flex-col border-b border-dark pb-4 2xl:pb-7 gap-2 2xl:gap-3">
                                    <Image src="/images/about-us/home.svg" alt="image" width={100} height={100} className="w-10 mb-2 2xl:w-14" />
                                    <span className="font-semibold">Breathe Easy, Work Better</span>
                                    <p className="leading-6 text-sm">We prioritize air quality with our HVAC standards and indoor air quality monitors that reduce dust and pollution, and enable 30% more fresh air intake, all monitored to ensure a healthier, more natural office environment.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[35%] mt-10 lg:mt-0">
                    <Image src="/images/about-us/commitment.png" alt="commitment" width={800} height={800} className="w-full aspect-[7/9]" />
                </div>
            </div>
            <div className="py-16 bg-bglight3 lg:py-20">
                <div className="px-6 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[120px] flex items-start gap-10 lg:gap-20">
                    <div className="w-full lg:w-[40%]">
                        <div className="flex flex-col text-2xl lg:text-5xl gap-1 w-full lg:w-[70%]">
                            <span className="font-medium">Enterprise grade infrastructure</span>
                            <span className="font-kepler">to power your work</span>
                        </div>
                    </div>
                    <div className="w-[60%] grid grid-cols-1 lg:grid-cols-2">

                    </div>
                </div>
            </div>
            <Companies />
            <Blog />
        </div>
    )
}

