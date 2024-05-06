import Testimonial from "@/common/testimonial";
import Ways from "@/components/about-us/tailormade-office/ways";
import LocationBanner from "@/components/locationInside/locationBanner";
import LocationSpace from "@/components/locationInside/locationSpace";
import LocationSpecialtiesCard from "@/components/locationInside/locationSpecialtiesCard";
import LocatonPark from "@/components/locationInside/locatonPark";
import Restaurants from "@/components/locationInside/restaurants";
import Amenities from "@/components/solutionsLanding/amenities";
import { notFound } from "next/navigation";

export default function page({ params }) {
    const location = params.area

    if (location !== "peninsula") {
        return notFound()
    }

    return (
        <>
            <LocationBanner />
            <div className="px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[100px] py-20 max-md:py-16 ">
                <Restaurants />
            </div>


            <div className='bg-bglight3 '>
                <LocationSpecialtiesCard />
                <div className="px-6  mx-auto 2xl:px-[160px] lg:px-[100px] pb-16 max-md:pb-4   bg-bglight3">
                    <Amenities noshow={false} />
                </div>
            </div>


            <div className=" bg-bglight2   mx-auto  ">
                <Ways />
            </div>
            <div className="bg-bglight4 ">
                <div className="  max-w-[1920px] mx-auto ">
                    <Testimonial />
                </div>
            </div>
            <div className="px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[100px] py-20 max-md:pt-16 max-md:pb-8">
                <LocatonPark />
            </div>

            <LocationSpace />

        </>
    )
}
