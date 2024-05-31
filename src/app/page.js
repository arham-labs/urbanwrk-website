import Solutions from "@/components/home/solutions";
import AboutCard from "@/components/home/aboutCard";
import BuildCard from "@/components/home/buildCard";
import UrbanTech from "@/components/home/urbanTech";
import ExploreCard from "@/components/home/ExploreCard";
import ReviewCard from "@/components/home/reviewCard";
import Reviews from "@/components/home/reviews";
import Partners from "@/components/home/partners";
import GoodCompany from "@/components/home/goodCompany";
import FormCard from "@/components/home/formCard";
import Testimonial from "@/common/testimonial";
import HomeBanner from "@/components/home/homeBanner";


export default function Home() {
  return (
    <>
      <div className="md:pt-20 ">
        <HomeBanner />
      </div>
      <div  className="bg-bglight1 ">
        <div className=" px-6 max-w-[1920px]  mx-auto py-20 2xl:px-[160px] lg:px-[100px] max-md:py-16">
          <Solutions />
        </div>
      </div>
      <div className="bg-white ">
        <div className=" px-6 max-w-[1920px] mx-auto 2xl:px-[160px] lg:px-[100px] py-20 max-md:py-16">
          <AboutCard />
        </div>
      </div>
    
      <GoodCompany />

      {/* <ExploreCard /> */}


      <div className="bg-white">
        <div className=" px-6 max-w-[1920px] py-20 max-md:py-16   mx-auto 2xl:px-[160px] lg:px-[100px]">
          <UrbanTech />
        </div>
      </div>
      <div className="bg-bglight1">
        <div className=" px-6 max-w-[1920px] py-20 max-md:py-16   mx-auto 2xl:px-[160px] lg:px-[100px]">
          <BuildCard />
        </div>
      </div>

     
     

      {/* <div className="bg-bglight4 ">
        <div className="  max-w-[1920px]   mx-auto ">
          <Testimonial />
        </div>
      </div> */}
      <FormCard />
    </>
  );
}
