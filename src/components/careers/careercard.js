import Image from "next/image";

export default function CareerCard() {
    return (
        <div className="pt-16 lg:py-20 w-full px-6 max-w-[1920px] mx-auto lg:px-[100px] 2xl:px-40 flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2">
                <p className="text-base lg:text-xl w-full lg:w-[90%]">We are redefining workspace solutions with a commitment to innovation, sustainability, and community.
                    We&apos;re fostering environments where businesses thrive and individuals grow. As we expand exponentially,
                    we&apos;re looking for passionate, creative, and driven individuals
                    to join our journey in leaving a mark in the industry.</p>
            </div>
            <Image src="/images/careers/card.png" width={1200} height={1000} alt="card" className="aspect-[10/11] lg:aspect-[14/11] w-full lg:w-1/2 object-cover" />
        </div>
    )
}
