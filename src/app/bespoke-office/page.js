import Blog from "@/common/blog";
import Testimonial from "@/common/testimonial";
import Herobanner from "@/components/about-us/bespoke-office/herobanner";
import Choose from "@/components/about-us/bespoke-office/choose";
import Space from "@/components/about-us/bespoke-office/space";
import Ways from "@/components/about-us/bespoke-office/ways";
import Productivity from "@/components/about-us/bespoke-office/productivity";

export default function Page() {

    return (
        <>
            <Herobanner />
            <Choose/>
            <Space/>
            <Productivity/>
            <Ways/>
            <Blog />
            <Testimonial />
        </>
    )
}

