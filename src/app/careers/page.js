import BreadCrumbs from "@/common/breadcrumbs";
import CareerCard from "@/components/careers/careercard";
import CareerFormCard from "@/components/careers/careerform";
import HeroBanner from "@/components/careers/herobanner";

export default function page() {
    return (
        <>
            <BreadCrumbs subtitle="Careers" subpathname="/careers" />
            <HeroBanner />
            <CareerCard />
            <CareerFormCard />
        </>
    )
}
