import BreadCrumbs from '@/common/breadcrumbs';
import FormCard from '@/components/home/formCard'
import BetterSpace from '@/components/uwTechnology/betterSpace'
import DataDriven from '@/components/uwTechnology/dataDriven'
import TechnologyBanner from '@/components/uwTechnology/technologyBanner'

export const metadata = {
    title: "Smart Workspace Solutions & Facility Management | UrbanWrk Tech",
    description: "UrbanWrk Tech offers innovative workspace solutions focusing on employee wellness, community areas, and advanced IT infrastructure to create a brighter work environment.",
    alternates: {
        canonical: "/UrbanWrk-Tech",
    },
};


export default function page() {
    return (
        <div>
            <BreadCrumbs subtitle="About Us" subpathname="/about-us" nestedpage={true} nestedpathname="/about-us/UrbanWrk-Tech" nestedtitle="UrbanWrk Tech" />
            <TechnologyBanner />
            {/* <DataDriven /> */}
            <BetterSpace />
            {/* <Testimonial /> */}
            <FormCard />
        </div>
    )
}
