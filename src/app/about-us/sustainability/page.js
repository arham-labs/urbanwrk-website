import Blog from "@/common/blog";
import FormCard from "@/components/home/formCard";
import GoodCompany from "@/components/home/goodCompany";
import Commitment from "@/components/sustainability/commitment";
import Grade from "@/components/sustainability/grade";
import Herobanner from "@/components/sustainability/herobanner";

export const metadata = {
    alternates: {
        canonical: "/about-us/sustainability",
    },
};


export default function Page() {
    return (
        <>
           <Herobanner/>
            <Commitment/>
            <Grade/>
            <GoodCompany />
            {/* <Blog /> */}
            <FormCard/>
        </>
    )
}

