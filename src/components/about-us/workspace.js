import Image from "next/image";

export default function WorkSpace() {
    return (
        <div className="pb-40">
            <div className="w-[88%] m-auto lg:ml-[13%] lg:mr-[8%] lg:w-auto flex flex-col">
                <div className="flex gap-0 items-center">
                    <div className="aspect-square w-1/2 grid items-center">
                        <Image src="/images/about-us/image-1.png" className="w-[65%]" width={900} height={900} alt="space-image" />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div className="w-[78%]">
                            <span className="text-5xl text-primary block mb-6 font-semibold">Find your space</span>
                            <p className="leading-6 text-base">is about more than locating a desk or an office. It’s about finding your purpose, your community, your battlefield, and your sanctuary. It’s about uncovering that unique intersection where your talent meets your passions,
                                where work morphs into play, and where every challenge is a stepping stone to greatness.</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-12 items-center relative">
                    <div className="flex flex-col w-1/2">
                        <div className="w-[78%]">
                            <span className="text-5xl text-primary block mb-6 font-semibold font-kepler">Leave your mark</span>
                            <p className="leading-6 text-base">is the battle cry for action. It’s an acknowledgement that while ideas may be limitless, their true value only manifests through execution. Leaving your mark means imparting a piece of yourself into everything you do, turning every endeavour into a legend. It’s about creating your legacy through your work.</p>
                        </div>
                    </div>
                    <div className="aspect-[9/10] w-1/2 absolute -top-[80px] right-0">
                        <Image src="/images/about-us/image-2.png" width={900} height={900} alt="leave-mark-image" />
                    </div>
                </div>
            </div>
        </div>)
}

