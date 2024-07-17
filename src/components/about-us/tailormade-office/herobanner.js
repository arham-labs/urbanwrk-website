import Image from "next/image";
// import mobileBanner from '../../../../public/images/about-us/bespoke-office/mobile-banner.png'
// import DesktopBanner from '../../../../public/images/solutionsLanding/solutionsImg/desktop-banner.png'

export default function Herobanner({data}) {
    return (
        <div className="text-white relative">
            <div className="flex justify-center items-center ">
                <div className="h-[700px] overflow-hidden md:hidden w-full">
                    <Image sizes="100vw" priority={true} className="w-full" alt="hero-banner" src={data.titleImgMob} width={200} height={200} unoptimized/>
                </div>
                <div className="hidden md:flex md:h-screen w-full md:justify-center md:items-center">
                    <Image className="h-full w-full object-cover" sizes="100vw" priority={true} alt="hero-banner" src={data.titleImgDesk} width={200} height={200} unoptimized/>
                </div>
                <div className="absolute text-center bottom-32 lg:bottom-24 w-full">
                    <div className="flex flex-col gap-1 lg:gap-3 mx-auto text-3xl lg:text-6xl">
                        <h1>{data.title1}</h1>
                        <span className="font-kepler">{data.title2}</span>
                        <p className="text-sm lg:text-base font-normal">{data.title3}</p>
                    </div>
                </div>
            </div>
        </div>)
}

