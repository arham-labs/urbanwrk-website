import CommonCard from "@/common/commoncard";
import WorkWing1 from '../../../../public/images/about-us/workwing-1.png'
import WorkWing2 from '../../../../public/images/about-us/workwing-2.png'
import WorkWing3 from '../../../../public/images/about-us/workwing-3.png'

export default function Choose() {

    const ChooseData = [
        { title: "We match your pace", source: WorkWing1, desc: "At whatever stage your journey, we support you with flexible contracts, and the ability to scale up or down with complete ease." },
        { title: "We are where work thrives", source: WorkWing2, desc: "Every space we are in is the best and buzziest neighbourhood when it comes to work. Connectivity, restaurants, cafes and safety, everything is the best that your city has to offer." },
        { title: "We take the work out of work", source: WorkWing3, desc: "A great reception, smooth employee management and payroll, a certified sustainable office, world-class infrastructure and an ability to open offices in new cities. Need anything else?" }
    ]

    return (
        <div className="bg-bglight6 py-16 lg:py-20">
            <div className="px-6 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[100px]">
                <span className="text-xl 2xl:text-2xl font-medium block mb-10">WHY CHOOSE US?</span>
                <CommonCard leftAlign={true} data={ChooseData} />
            </div>
        </div>)
}

