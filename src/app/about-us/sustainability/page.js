import Blog from "@/common/blog";
import BreadCrumbs from "@/common/breadcrumbs";
import FormCard from "@/components/home/formCard";
import GoodCompany from "@/components/home/goodCompany";
import Commitment from "@/components/sustainability/commitment";
import Grade from "@/components/sustainability/grade";
import Herobanner from "@/components/sustainability/herobanner";

export const metadata = {
    alternates: {
        canonical: "/about-us/sustainability",
        title: "Green Workspace Solutions & IGBC Platinum Offices | UrbanWrk's Sustainability",
        description: "Discover UrbanWrk's commitment to sustainability. Learn about our eco-friendly practices and how we're contributing to greener future workspaces."
    },
};


export default function Page() {
    return (
        <>
            <BreadCrumbs subtitle="About Us" subpathname="/about-us" nestedpage={true} nestedpathname="/about-us/sustainability" nestedtitle="Sustainability" />
            <Herobanner />
            <Commitment />
            <Grade />
            <GoodCompany />
            {/* <Blog /> */}
            <FormCard />
        </>
    )
}

