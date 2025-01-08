import Image from "next/image";
import SpaceImage from '../../../../public/images/about-us/bespoke-office/space.png'
import LinkButton from "@/common/linkbtn";

export default function Space({ data }) {

    const MeetData = [
        { title: "Meet with our team", desc: "Share your requirements so that we can work out the best solution for your organisation size" },
        { title: "Create your blueprint", desc: "Choose the area, and work with our design experts to bring your vision to life." },
        { title: "Walk into your workspace", desc: "Settle in your customised office" }
    ]

    return (
        <div className="bg-bglight3 text-white pb-14 lg:pb-0">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
                <div className="w-full lg:w-1/2">
                    <div className="relative h-full">
                        <Image src={data?.card3_img} alt="customised office" className="w-full aspect-[8/9] object-cover lg:aspect-[7/8]" height={1000} width={1000} />
                        <div className="absolute top-1/2 text-3xl lg:text-5xl 2xl:text-6xl left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center flex-col">
                            <span className="block mb-2 text-nowrap">{data?.card3_title1}</span>
                            <span className="font-kepler block">{data.name === "advertise-with-us" && <span className="font-sans">word</span>} {data?.card3_title2}</span>
                        </div>
                    </div>
                </div>
                <div className="px-6 lg:px-0 w-full lg:w-1/2 flex flex-col gap-7 lg:gap-14">
                    <div className="w-full lg:w-[60%] 2xl:w-[70%] lg:ml-24 mr-auto flex flex-col items-start lg:items-start gap-5 lg:gap-10">
                        {data?.card3_content?.map((item, i) =>
                            <div className="flex items-start gap-5 lg:gap-10" key={i}>
                                <span className="text-3xl xl:text-5xl text-primary font-kepler">0{i + 1}</span>
                                <div className="flex flex-col gap-1 lg:gap-2 text-dark">
                                    <span className="text-lg xl:text-2xl font-medium">{item.title}</span>
                                    <p className="leading-6 text-sm lg:text-base font-normal lg:font-medium">{item.desc}</p>
                                </div>
                            </div>
                        )}
                        <div className="group">
                            <a href="/" className="text-base border-black border px-4 gap-2 flex text-black items-center h-[36px] w-fit transition-all ease-in-out group-hover:bg-primary group-hover:border-primary group-hover:text-white cursor-pointer
                                ml-[45px] lg:ml-[70px] xl:ml-[90px]">
                                Contact us
                                <div className="bg-[url('/images/home/btnArrow.svg')] group-hover:bg-[url('/images/home/lightArrow.svg')] bg-contain w-[14px] h-[14px] bg-no-repeat"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
