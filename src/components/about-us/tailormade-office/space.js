import Image from "next/image";
import SpaceImage from '../../../../public/images/about-us/bespoke-office/space.png'
import LinkButton from "@/common/linkbtn";

export default function Space() {

    const MeetData = [
        { title: "Meet with our team", desc: "Share your requirements so that we can work out the best solution for your organisation size" },
        { title: "Explore neighbourhoods", desc: "Choose the area that is perfect for the team that you are building" },
        { title: "Walk into your workspace", desc: "Settle in your customised office" }
    ]

    return (
        <div className="bg-bglight3 text-white pb-14 lg:pb-0">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
                <div className="w-full lg:w-1/2">
                    <div className="relative h-full">
                        <Image src={SpaceImage} alt="space" className="w-full aspect-[8/9] lg:aspect-[7/8]" />
                        <div className="absolute top-1/2 text-3xl lg:text-5xl 2xl:text-6xl left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center flex-col">
                            <span className="block mb-2">You space,</span>
                            <span className="font-kepler">made easy</span>
                        </div>
                    </div>
                </div>
                <div className="px-6 lg:px-0 w-full lg:w-1/2 flex flex-col gap-7 lg:gap-14">
                    <div className="w-full lg:w-[60%] 2xl:w-[70%] lg:ml-24 mr-auto flex flex-col items-start lg:items-start gap-5 lg:gap-10">
                        {MeetData.map((item, i) =>
                            <div className="flex items-start gap-5 lg:gap-10" key={i}>
                                <span className="text-3xl xl:text-5xl text-primary font-kepler">0{i + 1}</span>
                                <div className="flex flex-col gap-1 lg:gap-2 text-dark">
                                    <span className="text-lg xl:text-2xl font-medium">{item.title}</span>
                                    <p className="leading-6 text-sm lg:text-base font-normal lg:font-medium">{item.desc}</p>
                                </div>
                            </div>
                        )}
                        <LinkButton title="Contact us" href="" marginspace={true}/>
                    </div>
                </div>
            </div>
        </div>)
}
