import Herobanner from "@/components/about-us/herobanner";
import Intro from "@/components/about-us/intro";
import Speciality from "@/common/speciality";
import Vision from "@/components/about-us/vision";
import WorkSpace from "@/components/about-us/workspace";
import WorkSwings from "@/components/about-us/workswings";
import FormCard from "@/components/home/formCard";
import BreadCrumbs from "@/common/breadcrumbs";

export const metadata = {
    alternates: {
        canonical: "/about-us",
    },
};


export default function Page() {

    const specilatiesData = [
        { title: "Real estate partner of your choice", desc: "With prime real estate in all major Indian metro cities, you can unlock fast growth in a cost-efficient manner." },
        { title: "Single-point management", desc: "We are your single-stop shop—customising, building, and managing your workspace needs all under one roof, saving you time, energy, and resources." },
        { title: "Ultra-swift delivery", desc: "From one desk to a dedicated floor, we customise the space and furnish it as per your business needs." },
        { title: "Cutting-edge technology", desc: "Streamline everyday tasks and enhance your workflow with our UrbanWrk Mobile and Healthwrk Engine apps. Get facial recognition, visitor management system, and many more real-time insights for total workspace management." },
        { title: "Zero capex, full functionality", desc: "Minimise upfront investment, with an office that is lean yet fully equipped, keeping your business agile and responsive in a dynamic market." },
        { title: "Scalable and flexible", desc: "Whether you’re scaling up or just starting out, our flexible lease terms allow you to adjust your space and commitment level, ensuring you have the freedom to grow at your own pace." },
    ]

    return (
        <>
            <BreadCrumbs subtitle="About Us" subpathname="/about-us" />
            <Herobanner />
            <WorkSpace />
            <WorkSwings />
            <Speciality data={specilatiesData} title="Make your workspace" />
            <Intro />
            <Vision />
            <FormCard />
        </>
    )
}