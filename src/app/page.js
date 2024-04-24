import Solutions from "@/components/home/solutions";
import AboutCard from "@/components/home/aboutCard";
import BuildCard from "@/components/home/buildCard";
import UrbanTech from "@/components/home/urbanTech";
import ExploreCard from "@/components/home/ExploreCard";

export default function Home() {
  return (
    <>
      <AboutCard />
      <Solutions />
      <ExploreCard/>
      <BuildCard/>
      <UrbanTech/>
    </>
  );
}
