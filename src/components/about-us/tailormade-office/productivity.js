import Image from 'next/image'
// import ProductivityImage from '../../../../public/images/about-us/bespoke-office/productivity.png'
import LinkButton from '@/common/linkbtn'

export default function Productivity({data}) {
    return (
        <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-0 ${data.name === "meeting-rooms" && "bg-bglight6"}`}>
            <div className={`px-6 pt-14 lg:p-0 w-full lg:w-1/2   `}>
                <div className="flex flex-col w-full lg:w-[67%] mx-auto text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                    <span className="font-medium">{data?.card4_title1}</span>
                    <span className="font-kepler mt-1">{data?.card4_title2}</span>
                    <p className="leading-6 mt-5 text-sm xl:text-base font-normal lg:font-medium mb-7">{data?.card4_title3}</p>
                    <LinkButton title="Explore" href="/about-us/sustainability" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <Image src={data.card4_img} alt="productivity" className="w-full aspect-[16/18] object-cover lg:aspect-[13/11]" height={1000} width={1000}/>
            </div>
        </div>)
}
