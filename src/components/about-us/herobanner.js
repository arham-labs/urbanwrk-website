import Image from "next/image";
import mobileBanner from '../../../public/images/about-us/mobile-banner.png'
import DesktopBanner from '../../../public/images/about-us/desktop-banner.png'

export default function Herobanner() {
    return (
        <div className="text-white relative pt-4 lg:pt-[100px]">
            <div className="flex justify-center items-center w-full">
                <div className="h-[700px] overflow-hidden md:hidden w-full">
                    <Image sizes="100vw" priority={true} alt="hero-banner" className="w-full" src={mobileBanner} />
                </div>
                <div className="hidden md:flex md:h-screen w-full md:justify-center md:items-center">
                    <Image className="h-full w-full object-cover" sizes="100vw" priority={true} alt="hero-banner" src={DesktopBanner} />
                </div>
                <div className="absolute text-center bottom-32 lg:bottom-24 w-full">
                    <div className="flex flex-col gap-1 lg:gap-3 mx-auto text-3xl lg:text-6xl">
                        <h1 className="font-medium">For those who dare</h1>
                        <span className="font-kepler">to dream big</span>
                    </div>
                </div>
            </div>
        </div>)
}

