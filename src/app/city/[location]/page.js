import Blog from "@/common/blog";
import ExploreCard from "@/components/location/explorecard";
import Herobanner from "@/components/location/herobanner";
import { notFound } from "next/navigation";

import { Jsons } from "./locationJson";

export default function Page({ params }) {
  const location = params.location;


  const locationFind = Jsons.LocationData?.find(
    (p) => p.locationName.toLowerCase() === location
  );

  if (!locationFind) {
      return notFound()
  }

  return (
    <>
      <Herobanner data={locationFind} />
      <ExploreCard data={locationFind} />
      {/* <Blog /> */}
    </>
  );
}
