import Image from "next/image";
import Space from '../../../public/images/about-us/space.png'
import LeaveMark from '../../../public/images/about-us/leave-mark.png'

export default function WorkSpace() {
    return (
        <div className="py-16 lg:pt-0 lg:pb-40">
            <div className="px-6 max-w-[1920px] mx-auto 2xl:pr-40 2xl:pl-52 lg:pl-40 lg:pr-[100px] lg:w-auto flex flex-col">
                <div className="flex flex-col lg:flex-row gap-7 lg:gap-0 items-center mb-10 lg:mb-0">
                    <div className="aspect-square w-full lg:w-1/2 flex items-center lg:justify-center">
                        <Image src={Space} className="w-full lg:w-[65%]" alt="comfortable deck at workspace" />
                    </div>
                    <div className="flex flex-col w-full lg:w-1/2">
                        <div className="w-full lg:w-[78%]">
                            <span className="text-2xl lg:text-4xl xl:text-5xl text-primary block mb-3 lg:mb-6">Find your space</span>
                            <p className="leading-6 text-sm xl:text-base font-medium">Designed to adapt to the evolving needs of modern businesses, our environments inspire innovation, encourage collaboration and empower growth. It&#39;s a dedicated floor tailored to your brand or a hot desk in our dynamic co-working areas, we provide the perfect launchpad for your next breakthrough</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col-reverse lg:flex-row gap-7 lg:gap-12 items-center relative">
                    <div className="flex flex-col w-full lg:w-1/2">
                        <div className="w-full lg:w-[78%]">
                            <span className="text-2xl lg:text-4xl xl:text-5xl text-primary block mb-3 lg:mb-6 font-kepler">Leave your mark</span>
                            <p className="leading-6 text-sm xl:text-base font-medium">Uncover that unique intersection where your talent meets your passion and where work morphs into play. Leaving your mark means imparting a piece of yourself into everything you do. It’s about creating your legacy through your work.</p>
                        </div>
                    </div>
                    <div className="aspect-square lg:aspect-[9/10] w-full lg:w-1/2 relative">
                        <Image src={LeaveMark} alt="conference room" className="aspect-square lg:aspect-[9/10] w-full"/>
                    </div>
                </div>
            </div>
        </div>)
}

