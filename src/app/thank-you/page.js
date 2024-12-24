import Image from "next/image";
import Script from "next/script";

export default function Page() {
    return (
        <>
            <head>
                <Script id="google-tag-manager">{`gtag('event', 'conversion', {'send_to': 'AW-16544436289/F4rnCN-cl_sZEMGggNE9'});`}</Script>
            </head>
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
        </>
    )
}
