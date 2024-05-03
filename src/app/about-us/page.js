import Herobanner from "@/components/about-us/herobanner";
import Intro from "@/components/about-us/intro";
import Speciality from "@/components/about-us/speciality";
import Vision from "@/components/about-us/vision";
import WorkSpace from "@/components/about-us/workspace";
import WorkSwings from "@/components/about-us/workswings";

export default function Page() {
    return (
        <>
           <Herobanner/>
            <WorkSpace />
            <WorkSwings />
            <Speciality/>
            <Intro />
            <Vision />
        </>
    )
}