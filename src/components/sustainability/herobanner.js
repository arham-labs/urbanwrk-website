import Image from "next/image";
import IGBC from '../../../public/images/sustainability/igbc.svg'
import Banner from '../../../public/images/sustainability/banner.png'

export default function Herobanner() {
    const sustainData = ["GREEN INTERIORS", "PLATINUM RATING BY IGBC", "HEALTH & WELLBEING (WELL) RATING", "PLATINUM RATING BY IGBC"]
    return (
        <div className="pt-40 lg:pt-20 2xl:pt-14 bg-bglight1">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="px-6 lg:px-0 w-full lg:w-1/2">
                    <div className="flex flex-col gap-3 lg:gap-5 w-full lg:w-[65%] 2xl:w-[60%] mx-auto mb-10 lg:mb-0">
                        <div className="flex flex-row text-2xl lg:text-4xl xl:text-6xl gap-3 2xl:gap-5">
                            <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Lead with</h1>
                            <span className="font-kepler mt-[3.2px] block text-[28px] lg:text-4xl xl:text-5xl 2xl:text-6xl">integrity</span>
                        </div>
                        <p className="text-sm xl:text-base font-medium">With the first and only IGBC Platinum rated office spaces in India</p>
                        <Image src={IGBC} alt="igbc" className="w-16 lg:w-20 2xl:w-24 my-3 lg:my-0" />
                        <ul className="leading-6 text-base xl:text-lg font-medium">
                            {sustainData.map((el, i) =>
                                <li key={i}>{el}</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="aspect-[6/5] lg:aspect-[16/14] w-full lg:w-1/2">
                    <Image src={Banner} className="w-full h-full" alt="banner" />
                </div>
            </div>
        </div>)
}

