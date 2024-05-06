import Image from 'next/image'
import ProductivityImage from '../../../../public/images/about-us/bespoke-office/productivity.png'
import LinkButton from '@/common/linkbtn'

export default function Productivity() {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
            <div className="px-6 pt-14 lg:p-0 w-full lg:w-1/2">
                <div className="flex flex-col w-full lg:w-[67%] mx-auto text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                    <span className="font-medium">Planet-first</span>
                    <span className="font-kepler mt-1">productivity</span>
                    <p className="leading-6 mt-5 text-sm xl:text-base font-normal lg:font-medium mb-7">Our design philosophy integrates natural elements into our workspaces through biophilic design to reduce your ecological footprint and enhance productivity, boost mood, and foster a sense of well-being every time you walk in.</p>
                    <LinkButton title="Know more" href="" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <Image src={ProductivityImage} alt="productivity" className="w-full aspect-[8/9] lg:aspect-[13/11]" />
            </div>
        </div>)
}
