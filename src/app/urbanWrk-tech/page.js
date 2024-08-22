import FormCard from '@/components/home/formCard'
import BetterSpace from '@/components/uwTechnology/betterSpace'
import DataDriven from '@/components/uwTechnology/dataDriven'
import TechnologyBanner from '@/components/uwTechnology/technologyBanner'

export const metadata = {
    alternates: {
        canonical: "/urbanWrk-tech",
    },
};


export default function page() {
    return (
        <div>
            <TechnologyBanner />
            <DataDriven />
            <BetterSpace />
            {/* <Testimonial /> */}
            <FormCard/>
        </div>
    )
}
