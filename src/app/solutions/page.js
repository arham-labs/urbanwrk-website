import ExploreCard from '@/components/home/ExploreCard'
import Amenities from '@/components/solutionsLanding/amenities'
import SolutionBanner from '@/components/solutionsLanding/solutionBanner'
import Solutions from '@/components/solutionsLanding/solutions';
import GoodCompany from '@/components/home/goodCompany';
import FormCard from '@/components/home/formCard';
import BreadCrumbs from '@/common/breadcrumbs';

export const metadata = {
    title: "Flexible Workspaces with Premium Amenities for Every Workstyle | UrbanWrk",
    description: "Find your perfect workspace with UrbanWrk. Choose from private offices to dynamic workspaces, all designed to enhance your productivity and comfort.",
    alternates: {
        canonical: "/solutions",
    },
};


export default function page() {

    const data = {
        locationInsideAmenities: [
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN1.svg", title: "Tech-enabled conference rooms " },
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN6.svg", title: "24/7 secure access" },
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN2.svg", title: "Enterprise grade IT set-up " },
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN7.svg", title: "IT room" },
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN3.svg", title: "Seamless connectivity" },
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN8.svg", title: "Multi-location" },
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN10.svg", title: "Indoor air quality control " },
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN9.svg", title: "Digital access control" },
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN22.svg", title: "Concierge" },
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN12.svg", title: "Quality staff" },
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN19.svg", title: "Gym" },
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN20.svg", title: "Occupancy sensor" },
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN14.svg", title: "Event space" },
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN13.svg", title: "Printing station" },
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN16.svg", title: "CCTV" },
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN15.svg", title: "Cafe" },
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN17.svg", title: "Housekeeping & sanitation" },
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN18.svg", title: "Parking" },
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN5.svg", title: "Fire safety" },
            { img: "/images/solutionsLanding/logoAmenities/amenitiesN21.svg", title: "Visitor management" }
        ]
    }

    return (
        <>
            <BreadCrumbs subtitle="Solutions" subpathname="/solutions" />
            <div className="bg-bglight1 flex justify-center items-center  max-md:pt-16">
                <div className="max-w-[1920px] ">
                    <SolutionBanner />
                </div>
            </div>

            <div className="bg-[#FFFFFF] ">
                <div className=" px-6 max-w-[1920px] py-20 max-md:py-16 mx-auto 2xl:px-[160px] lg:px-[100px]">
                    <Solutions />
                </div>
            </div>
            {/* <div className='bg-bglight6'>
                <div className="max-w-[1920px] mx-auto ">
                    <CompareSolution />

                </div>
            </div> */}



            <div className="bg-[#FFFFFF] ">
                <div className=" px-6 max-w-[1920px] pt-20 pb-12 max-md:py-16 mx-auto 2xl:px-[160px] lg:px-[120px]">
                    <Amenities noshow={true} data={data} />
                </div>
            </div>

            <ExploreCard />
            {/* <div className="bg-bglight4 ">
                <div className="  max-w-[1920px]  mx-auto ">
                    <Testimonial />
                </div>
            </div> */}
            {/* <div className="bg-bglight1 ">
                <div className=" px-6 max-w-[1920px] pt-20 pb-12 max-md:pt-16  max-md:pb-20 mx-auto 2xl:pl-[160px] 2xl:pr-[140px] lg:pl-[120px] lg:pr-[60px]">

                </div>
            </div> */}

            <GoodCompany />
            <FormCard />

        </>
    )
}
