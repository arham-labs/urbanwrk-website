import Image from "next/image";

export default function Herobanner() {
    const sustainData = ["GREEN INTERIORS", "PLATINUM RATING BY IGBC", "HEALTH & WELLBEING (WELL) RATING", "PLATINUM RATING BY IGBC"]
    return (
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
        </div>)
}

