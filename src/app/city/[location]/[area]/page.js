'use client'
import Testimonial from "@/common/testimonial";
import Ways from "@/components/about-us/tailormade-office/ways";
import LocationBanner from "@/components/locationInside/locationBanner";
import LocationSpace from "@/components/locationInside/locationSpace";
import LocationSpecialtiesCard from "@/components/locationInside/locationSpecialtiesCard";
import LocatonPark from "@/components/locationInside/locatonPark";
import Restaurants from "@/components/locationInside/restaurants";
import Amenities from "@/components/solutionsLanding/amenities";
import { notFound } from "next/navigation";
import { Jsons } from "../locationJson";

export default function page({ params }) {
    const location = `/city/${params.location}/${params.area}`

    console.log("location",location);

    const locationData = Jsons.LocationData?.find((el) =>
        el.locationInfo.some((p) => p.url === location)
    );

    const locationFind = locationData?.locationInfo.find((p) => p.url === location);


    if (!locationFind) {
        return notFound()
    }

    const newData = locationData?.locationInfo?.filter(el => !el?.url?.includes(location))


    return (
        <>
            <LocationBanner data={locationFind} />
            <div className="px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[100px] py-20 max-md:py-16 ">
                <Restaurants data={locationFind} />
            </div>


            <div className='bg-bglight3 '>
                <LocationSpecialtiesCard data={locationFind} />
                <div className="px-6  mx-auto 2xl:px-[160px] lg:px-[100px] pb-16 max-md:pb-4   bg-bglight3">
                    <Amenities data={locationFind} noshow={false} />
                </div>
            </div>


            <div className=" bg-bglight2   mx-auto  ">
                <Ways />
            </div>
            {/* <div className="bg-bglight4 ">
                <div className="  max-w-[1920px] mx-auto ">
                    <Testimonial />
                </div>
            </div> */}
            {newData.length > 1 && <div className="px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[100px] py-20 max-md:pt-16 max-md:pb-8">
                <LocatonPark location={location} data={newData}/>
            </div>}

            <LocationSpace data={locationData} url={`/city/${params.location}`}/>

        </>
    )
}
