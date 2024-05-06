import Herobanner from "@/components/about-us/herobanner";
import Intro from "@/components/about-us/intro";
import Speciality from "@/common/speciality";
import Vision from "@/components/about-us/vision";
import WorkSpace from "@/components/about-us/workspace";
import WorkSwings from "@/components/about-us/workswings";
import FormCard from "@/components/home/formCard";

export default function Page() {

    const specilatiesData = [
        { title: "Zero Capex, Full Functionality", desc: "Minimise upfront investment, with an office that is lean yet fully equipped, keeping you agile and responsive in a dynamic market." },
        { title: "Ultra-Swift Delivery", desc: "From one desk to a dedicated floor, you can create your space the way you want. Our proprietary design process integrates your business needs and brand ethos to create your space within 60 days." },
        { title: "Single-Point Management", desc: "Create a home for your brand based on your vision with our design and interiors solution." },
        { title: "Cutting-Edge Technology", desc: "Work in a visually stunning environment where form meets function." },
        { title: "5-Star Hospitality", desc: "Enjoy on-site support team, coffee bar, fully-stocked pantry, exclusive access to WellnessWrk Gym, BuzzWrk Café and more." },
        { title: "Beautifully designed", desc: "Work in a visually stunning environment where form meets function. Attend exclusive member events and panel talks or sign up for courses and workshops from the finest business minds." },
    ]

    return (
        <>
           <Herobanner/>
            <WorkSpace />
            <WorkSwings />
            <Speciality data={specilatiesData} title="Why Us"/>
            <Intro />
            <Vision />
            <FormCard/>
        </>
    )
}