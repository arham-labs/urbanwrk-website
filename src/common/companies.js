import Image from "next/image";

export default function Companies() {
    const Logos = ["/images/aon.png", "/images/transmin.png", "/images/lenze.png",
        "/images/rittal.png", "/images/blancco.png","/images/acoustic.png","/images/wipro.png","/images/air-products.png",

    ]
    return (
        <div className="bg-bglight1 py-16 2xl:py-[100px] text-secondary pl-6 lg:pr-0 max-w-[1920px] mx-auto 2xl:pl-40 lg:pl-[120px]">
            <h2 className="text-2xl mb-10 uppercase lg:mb-16">In The Good Comapny with</h2>
            <div className="flex overflow-hidden space-x-7 items-center lg:space-x-14">
                {Logos.map((item, i) =>
                    <Image key={i} src={item} alt="image" aria-hidden={true} width={900} height={900} className="w-16 lg:w-24 2xl:w-28 mix-blend-darken" />
                )}
                {/* {Logos.map((item, i) =>
                    <Image key={i} src={item} alt="image" aria-hidden={true} width={900} height={900} className="w-16 lg:w-32 mix-blend-darken md:hidden" />
                )} */}
            </div>
        </div>
    )
}

