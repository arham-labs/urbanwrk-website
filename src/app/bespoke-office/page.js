import Link from "next/link";
import CommonCard from "../common/commoncard";
import Image from "next/image";

export default function Page() {
    return (
        <div>
            <div className="bg-bglight3 py-20">
                <div className="w-[88%] m-auto">
                    <span className="text-2xl font-medium block mb-10">WHY CHOOSE US?</span>
                    <CommonCard />
                </div>
            </div>
            <div className="bg-black text-white py-20">
                <div className="flex items-start w-[88%] m-auto gap-10">
                    <div className="w-1/2 flex flex-col">
                        <span className="text-2xl block mb-2">HOW IT WORKS</span>
                        <span className="text-5xl block mb-2">You space,</span>
                        <span className="text-5xl font-kepler">made easy</span>
                        <Link href="/" className="mt-5">Contact us</Link>
                    </div>
                    <div className="w-1/2 flex flex-col gap-14">
                        {Array(3).fill("").map((el, i) =>
                            <div className="flex items-start gap-10 w-[65%]">
                                <span className="text-6xl text-primary font-kepler">0{i + 1}</span>
                                <div className="flex flex-col gap-2">
                                    <span className="text-2xl">Meet with our team</span>
                                    <p className="leading-6 text-sm font-light">Share your requirements so that we can work out the best solution for your organisation size</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-[88%] m-auto py-24 flex items-start gap-10">
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
            </div>
            <div className="bg-bglight2 py-16">
                <div className="w-[88%] m-auto">
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
            <div className="bg-bglight3 py-24">
                <div className="w-[88%] m-auto">
                    <span className="text-xl block mb-8">BLOG</span>
                    <div className="flex items-start gap-16">
                        <div className="w-1/2 flex flex-col gap-8">
                            <div className="relative">
                                <span className="absolute top-6 left-8 uppercase bg-bglight1 p-3 text-sm">Workspace Solutions</span>
                                <Image src="/images/solutions/blog2.png" width={1000} height={1000} alt="blog-1" className="aspect-[5/4]" />
                            </div>
                            <div className="w-[85%] flex flex-col gap-4">
                                <span className="text-2xl leading-8">How Flexible Workspaces can meet the demands of today and tomorrow</span>
                                <p className="leading-6 text-sm">A workspace is not just about the work. It is also about providing employees a space that allows them the freedom to work where, when, and how they want.</p>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-8">
                            <div className="relative">
                                <span className="absolute top-6 left-8 uppercase bg-bglight1 p-3 text-sm">Resources</span>
                                <Image src="/images/solutions/blog1.png" width={1000} height={1000} alt="blog-1" className="aspect-[26/35]" />
                            </div>
                            <div className="w-[85%] flex flex-col gap-4">
                                <span className="text-2xl leading-8">Why planning your office space is a necessity?</span>
                                <p className="leading-6 text-sm">Locking in on the perfect space is the foremost step to creating a productive office for your company. The next step, however, is even more crucial — deciding the layout of that space.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

