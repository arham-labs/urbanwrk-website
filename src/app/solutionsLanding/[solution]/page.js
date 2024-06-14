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

export default function Page({ params }) {
  const solution = params.solution;
  console.log("params", solution);

  const solutionFind = Jsons?.SolutionData?.find((a) => a.name === solution);
  // console.log(solutionFind);
  return (
    <>
      <Herobanner data={solutionFind} />
      <HomeBuild data={solutionFind} />
      <Choose data={solutionFind} />
      <Space data={solutionFind} />
      <Productivity data={solutionFind} />
      <ExploreCard />
      <Ways />
      <Testimonial />
      <Blog />
    </>
  );
}
