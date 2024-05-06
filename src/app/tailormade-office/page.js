import Blog from "@/common/blog";
import Testimonial from "@/common/testimonial";
import Herobanner from "@/components/about-us/tailormade-office/herobanner";
import Choose from "@/components/about-us/tailormade-office/choose";
import Space from "@/components/about-us/tailormade-office/space";
import Ways from "@/components/about-us/tailormade-office/ways";
import Productivity from "@/components/about-us/tailormade-office/productivity";
import ExploreCard from "@/components/home/ExploreCard";
import HomeBuild from "@/components/about-us/tailormade-office/homebuild";

export default function Page() {

    return (
        <>
            <Herobanner />
            <HomeBuild />
            <Choose />
            <Space />
            <Productivity />
            <ExploreCard />
            <Ways />
            <Testimonial />
            <Blog />
        </>
    )
}

