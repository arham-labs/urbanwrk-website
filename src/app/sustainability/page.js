import Blog from "@/common/blog";
import Companies from "@/common/companies";
import FormCard from "@/components/home/formCard";
import Commitment from "@/components/sustainability/commitment";
import Grade from "@/components/sustainability/grade";
import Herobanner from "@/components/sustainability/herobanner";

export default function Page() {
    return (
        <>
           <Herobanner/>
            <Commitment/>
            <Grade/>
            <Companies />
            <Blog />
            <FormCard/>
        </>
    )
}

