import Blog from "@/common/blog";
import Testimonial from "@/common/testimonial";
import Herobanner from "@/components/about-us/tailormade-office/herobanner";
import Choose from "@/components/about-us/tailormade-office/choose";
import Space from "@/components/about-us/tailormade-office/space";
import Ways from "@/components/about-us/tailormade-office/ways";
import Productivity from "@/components/about-us/tailormade-office/productivity";
import ExploreCard from "@/components/home/ExploreCard";
import HomeBuild from "@/components/about-us/tailormade-office/homebuild";

import { Jsons } from "./solutionJson";
import MeetingRoomSpace from "@/components/about-us/tailormade-office/meetingRoomSpace";
import MeetingListing from "@/components/about-us/tailormade-office/meetingListing";

export default function Page({ params }) {
  const solution = params.solution;
  // console.log("params", solution);

  const solutionFind = Jsons?.SolutionData?.find((a) => a.name === solution);
  // console.log(solutionFind);
  const el = {
    id: 1,
    locationName: "Peninsula Park",
    locationCity: "Lower Parel",
    location1: "Parel Station - 5 min walk",
    location2: "Best for restaurants, commute-friendly",
    location3: "A thriving corporate park in the heart of Mumbai.",
  };
  return (
    <>
      <Herobanner data={solutionFind} />
      {solutionFind.name === "meeting-rooms" && (
        <MeetingRoomSpace data={solutionFind} />
      )}
      {solutionFind.name === "meeting-rooms" && (
        <MeetingListing data={solutionFind}  el={el}/>
      )}
      {solutionFind.name !== "meeting-rooms" && (
        <HomeBuild data={solutionFind} />
      )}
      {solutionFind.name !== "meeting-rooms" && <Choose data={solutionFind} />}
      {solutionFind.name !== "meeting-rooms" && <Space data={solutionFind} />}
      <Productivity data={solutionFind} />
      <ExploreCard />
      <Ways />
      <Testimonial />
      <Blog />
    </>
  );
}
