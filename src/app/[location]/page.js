import Blog from "@/common/blog";
import ExploreCard from "@/components/location/explorecard";
import Herobanner from "@/components/location/herobanner";
import { notFound } from "next/navigation";
export default function Page({ params }) {

    const location = params.location

    if (location !== "mumbai") {
        return notFound()
    }

    return (
        <>
            <Herobanner />
            <ExploreCard />
            <Blog />
        </>
    )
}

