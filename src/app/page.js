import Solutions from "@/components/home/solutions";
import AboutCard from "@/components/home/aboutCard";
import BuildCard from "@/components/home/buildCard";
import UrbanTech from "@/components/home/urbanTech";
import ExploreCard from "@/components/home/ExploreCard";
import GoodCompany from "@/components/home/goodCompany";
import FormCard from "@/components/home/formCard";
import HomeBanner from "@/components/home/homeBanner";


export const metadata = {
  title: "Next Gen Sustainable Workspaces for Your Business | UrbanWrk",
  description: 'Find flexible, fully furnished office spaces and meeting rooms at UrbanWrk. Ideal for entrepreneurs and businesses seeking a dynamic, ready-to-work environment.',
}

export default function Home() {
  return (
    <>
      <div className="md:pt-20">
        <HomeBanner />
      </div>
      <div className="bg-bglight1">
        <div className=" px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[100px] py-20 max-md:py-16">
          <AboutCard />
        </div>
      </div>
      <div className="bg-[#FFFFFF]">
        <div className=" px-5 max-w-[1920px] mx-auto py-20 2xl:px-[160px] lg:px-[100px] max-md:py-16">
          <Solutions />
        </div>
      </div>
      <GoodCompany />
      <ExploreCard />
      <div className="bg-bglight1">
        <div className=" px-6 max-w-[1920px] py-20 max-md:py-16 mx-auto 2xl:px-[160px] lg:px-[100px]">
          <UrbanTech />
        </div>
      </div>
      <div className="bg-white">
        <div className=" px-6 max-w-[1920px] py-20 max-md:py-16 mx-auto 2xl:px-[160px] lg:px-[100px]">
          <BuildCard />
        </div>
      </div>
      <FormCard />
    </>
  );
}
