import Intro from "@/components/about-us/intro";
import Vision from "@/components/about-us/vision";
import WorkSpace from "@/components/about-us/workspace";
import WorkSwings from "@/components/about-us/workswings";

export default function Page() {
    return (
        <>
            <WorkSpace />
            <WorkSwings />
            <Intro />
            <Vision />
        </>
    )
}