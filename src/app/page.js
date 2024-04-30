import Solutions from "@/components/home/solutions";
import AboutCard from "@/components/home/aboutCard";
import BuildCard from "@/components/home/buildCard";
import UrbanTech from "@/components/home/urbanTech";
import ExploreCard from "@/components/home/ExploreCard";
import ReviewCard from "@/components/home/reviewCard";
import Reviews from "@/components/home/reviews";
import Partners from "@/components/home/partners";
import GoodCompany from "@/components/home/goodCompany";


export default function Home() {
  return (
    <div>
      <div className="bg-bglight1 ">
        <div className=" px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[120px]">
          <AboutCard />
        </div>
      </div>
      <div className="bg-[#FFFFFF] ">
        <div className=" px-6 max-w-[1920px] py-20  mx-auto 2xl:px-[160px] lg:px-[120px]">
          <Solutions />
        </div>
      </div>
      <div className="bg-bglight1 ">
        <div className=" px-6 max-w-[1920px] py-20  mx-auto 2xl:px-[160px] lg:px-[120px]">
          <GoodCompany />
        </div>
      </div>


      <ExploreCard />
      <div className="bg-bglight1 ">
        <div className=" px-6 max-w-[1920px] py-20  mx-auto 2xl:px-[160px] lg:px-[120px]">
          <UrbanTech />
        </div>
      </div>
      <div className="bg-white ">
        <div className=" px-6 max-w-[1920px] py-20  mx-auto 2xl:px-[160px] lg:px-[120px]">
          <BuildCard />
        </div>
      </div>

      {/* <Reviews /> */}
      {/* <Partners /> */}
    </div>
  );
}
