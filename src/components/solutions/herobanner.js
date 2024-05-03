import Image from "next/image";

export default function Herobanner() {
    return (
        <div className="text-white relative">
            <div className="flex justify-center items-center ">
                <div className="h-[700px] overflow-hidden md:hidden ">
                    <Image width={1280} height={640} sizes="100vw" priority={true} alt="hero-banner" src="/images/solutions/mobile-banner.png" />
                </div>
                <div className="hidden md:flex md:h-screen w-full md:justify-center md:items-center">
                    <Image width={1280} className="h-full w-full object-cover" height={640} sizes="100vw" priority={true} alt="hero-banner" src="/images/solutions/desktop-banner.png" />
                </div>
                <div className="absolute text-center bottom-32 lg:bottom-24 w-full">
                    <div className="flex flex-col gap-1 lg:gap-3 mx-auto text-3xl lg:text-5xl 2xl:text-6xl">
                        <h1 className="font-medium">Tailormade</h1>
                        <span className="font-kepler">offices</span>
                        <p className="text-sm lg:text-base">Your workspace, tailored to your workstyle.</p>
                    </div>
                </div>
            </div>
        </div>)
}

