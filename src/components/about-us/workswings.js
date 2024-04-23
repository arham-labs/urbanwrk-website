import Image from 'next/image'

export default function WorkSwings() {
    return (
        <div className="bg-bglight1 py-32">
            <div className="w-[88%] m-auto lg:w-[84%]">
                <div className="w-[500px] mb-14">
                    <div className="flex flex-col mb-7 gap-y-2">
                        <span className="text-5xl font-medium">Where work</span>
                        <span className="text-5xl font-kepler">finds wings</span>
                    </div>
                    <p className="leading-6">In a world that moves fast, where ideas burst into life every day, we are a space for the dreamers, the doers, the makers
                        and the innovators. We are here to help you create something meaningful- through our signature hospitality,
                        a community of like-minded members, and an energizing eco-conscious experience.</p>
                </div>
                <div className="flex gap-8">
                    {Array(3).fill("").map((_, i) =>
                        <div className={`flex flex-col ${i == 1 ? "top-[70px]" : "top-0"} relative`} key={i}>
                            <div className="border-b-[10px] border-primary mb-10">
                                <Image src="/images/about-us/image-3.png" width={600} height={600} className="aspect-[17/19]" alt="card" />
                            </div>
                            <span className="text-2xl font-medium block mb-5">Progressive</span>
                            <p className="leading-[21px] text-sm">We're always moving ahead, pushing the envelope with sustainable innovations for a world that never stands still.Find your place in a workspace that mirrors your commitment to making a daily difference. We are here to be champions of your
                                values that fuel positive change.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>)
}