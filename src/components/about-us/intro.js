import Image from "next/image";
import Quote from '../../../public/images/quote.svg'

export default function Intro() {
    return (
        <div className="bg-bglight5 py-16">
            <div className="w-[88%] m-auto flex flex-col justify-center text-center items-center">
                <div className="w-full lg:w-[600px] mb-5 lg:mb-10">
                    <div className="flex items-start gap-0 lg:gap-2">
                        <Image src={Quote} className="w-7 lg:w-12" alt="quote" />
                        <p className="leading-[22px] lg:leading-[40px] text-base lg:text-2xl font-semibold mt-2 lg:mt-5">By redefining the benchmark for the workspace experience, we&#39;re giving the power back to the doers - to produce their finest
                            work in the way that suits them best.</p>
                    </div>
                </div>
                <div className="flex flex-col w-full lg:w-1/2 font-medium text-sm">
                    <span className="uppercase">Anuj Munot</span>
                    <span>Founder & CEO, UrbanWrk</span>
                </div>
            </div>
        </div>)
}

