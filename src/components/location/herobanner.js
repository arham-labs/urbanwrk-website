import Image from "next/image";
import Mumbai from '../../../public/images/location/mumbai.png'

export default function Herobanner() {
    return (
        <div className="pt-32   lg:pt-20 bg-bglight1">
            <div className="max-w-[1920px] lg:pr-0 mx-auto 2xl:pl-40 lg:pl-[100px] flex flex-col lg:flex-row items-center">
                <div className="px-6 lg:px-0 flex flex-col gap-3 lg:gap-5 w-full lg:w-1/2 mb-10 lg:mb-0">
                    <div className="w-full lg:w-[60%] xl:w-[82%]">
                        <div className="flex flex-col gap-1 mb-5">
                            <span className="uppercase text-lg lg:text-[22px]">Workspaces in</span>
                            <h1 className="font-kepler text-2xl lg:text-4xl xl:text-6xl">Mumbai</h1>
                        </div>
                        <p className="text-sm xl:text-base font-medium">Mumbai, with its blend of culture, commerce, and connectivity, offers an unparalleled work environment that&#39;s as dynamic as the city itself. Find diverse workspaces from vibrant suburbs to business hubs of Nariman Point, all equipped with world-class amenities like on-site fitness centres, cafés, lounges, and state-of-the-art meeting rooms, supported by a dedicated team to make your workday perfect in every way.</p>
                    </div>
                </div>
                <div className="aspect-[6/5] lg:aspect-[16/14] w-full lg:w-1/2">
                    <Image src={Mumbai} className="w-full h-full" alt="banner" />
                </div>
            </div>
        </div>)
}

