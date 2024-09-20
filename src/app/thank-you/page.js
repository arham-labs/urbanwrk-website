import Image from "next/image";

export default function Page() {
    return (
        <div>
            <div className="bg-[#FFFFFF] h-screen">
                <div className="flex flex-col justify-center h-full items-center text-dark relative">
                    <Image
                        src="/images/thank-you.svg"
                        alt="thank-you"
                        width={150}
                        height={150}
                        className="w-9 md:w-16 lg:w-24 mb-2 md:mb-8"
                    />
                    <span className="text-2xl md:text-3xl lg:text-4xl block mb-1 text-dark uppercase md:mb-3">
                        Thank You
                    </span>
                    <p className="text-sm md:text-xl md:w-[400px] text-center text-dark">
                        Your details have been submitted successfully.
                    </p>
                </div>
            </div>
        </div>
    )
}
