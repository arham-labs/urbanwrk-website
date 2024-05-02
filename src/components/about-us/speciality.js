import Image from "next/image";

export default function Speciality() {

    const specilatiesData = [
        { title: "Zero Capex, Full Functionality", desc: "Minimise upfront investment, with an office that is lean yet fully equipped, keeping you agile and responsive in a dynamic market." },
        { title: "Ultra-Swift Delivery", desc: "From one desk to a dedicated floor, you can create your space the way you want. Our proprietary design process integrates your business needs and brand ethos to create your space within 60 days." },
        { title: "Single-Point Management", desc: "Create a home for your brand based on your vision with our design and interiors solution." },
        { title: "Cutting-Edge Technology", desc: "Work in a visually stunning environment where form meets function." },
        { title: "5-Star Hospitality", desc: "Enjoy on-site support team, coffee bar, fully-stocked pantry, exclusive access to WellnessWrk Gym, BuzzWrk Café and more." },
        { title: "Beautifully designed", desc: "Work in a visually stunning environment where form meets function. Attend exclusive member events and panel talks or sign up for courses and workshops from the finest business minds." },
    ]

    return (
        <div className="bg-bglight3 py-16">
            <div className="px-6 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[120px] flex flex-col gap-10 lg:gap-20 lg:flex-row items-center">
                <div className="w-full lg:w-[45%] aspect-square">
                    <Image src="/images/about-us/space.png" width={1200} height={900} alt="image" className="w-full object-cover h-full" />
                </div>
                <div className="w-full lg:w-[65%]">
                    <span className="text-3xl lg:text-4xl block mb-8 lg:mb-10">Why Us</span>
                    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                        {specilatiesData.map((item, i) =>
                            <div className={`flex flex-col gap-1 border-b border-dark  last:border-0 last:pb-0 pb-4 lg:pb-7`} key={i}>
                                <span className="font-semibold text-lg">{item.title}</span>
                                <p className="leading-6 text-sm font-light">{item.desc}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

