import Solutions from "@/components/home/solutions";
import AboutCard from "@/components/home/aboutCard";
import BuildCard from "@/components/home/buildCard";
import UrbanTech from "@/components/home/urbanTech";
import ExploreCard from "@/components/home/ExploreCard";
import ReviewCard from "@/components/home/reviewCard";
import Reviews from "@/components/home/reviews";
import Partners from "@/components/home/partners";


export default function Home() {
  return (
    <>
      <AboutCard />
      <Solutions />
      <ExploreCard />
      <UrbanTech />
      <BuildCard />
      <Reviews />
      <Partners />
    </>
  );
}
