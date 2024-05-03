import Blog from "@/common/blog";
import Image from "next/image";

export default function Page() {
    return (
        <div>
            <div className="pt-16 lg:py-0 bg-bglight1">
                <div className="max-w-[1920px] lg:pr-0 mx-auto 2xl:pl-40 lg:pl-[120px] flex flex-col lg:flex-row items-center">
                    <div className="px-6 lg:px-0 flex flex-col gap-3 lg:gap-5 w-full lg:w-1/2 mb-10 lg:mb-0">
                        <div className="w-[60%]">
                            <div className="flex flex-col gap-1 mb-5">
                                <span className="uppercase text-lg">Workspaces in</span>
                                <span className="font-kepler text-2xl lg:text-4xl 2xl:text-5xl">Mumbai</span>
                            </div>
                            <p className="text-sm 2xl:text-base">Mumbai, with its blend of culture, commerce, and connectivity, offers an unparalleled work environment that's as dynamic as the city itself. Find diverse workspaces from vibrant suburbs to business hubs of Nariman Point, all equipped with world-class amenities like on-site fitness centres, cafés, lounges, and state-of-the-art meeting rooms, supported by a dedicated team to make your workday perfect in every way.</p>
                        </div>
                    </div>
                    <div className="aspect-[6/5] lg:aspect-[16/14] w-full lg:w-1/2">
                        <Image src="/images/location/mumbai.png" className="w-full h-full" width={800} height={800} alt="banner" />
                    </div>
                </div>
            </div>
            <Blog/>
        </div>
    )
}

