import Image from "next/image";

export default function Intro() {
    return (
        <div className="bg-bglight3 py-24">
            <div className="w-[88%] m-auto lg:w-[84%] flex items-center">
                <div className="flex flex-col w-1/2 text-sm">
                    <span>Anuj Munot</span>
                    <span>Founder & CEO, UrbanWrk</span>
                </div>
                <div className="w-1/2">
                    <div className="flex items-start gap-6">
                        <Image src="/images/about-us/quote.svg" className="w-12" width={100} height={100} alt="quote" />
                        <p className="leading-[45px] text-2xl font-medium mt-5">By redefining the benchmark for the workspace experience, we're giving the power back to the doers - to produce their finest
                            work in the way that suits them best.</p>
                    </div>
                </div>
            </div>
        </div>)
}

