import Blog from "@/common/blog";
import ExploreCard from "@/components/location/explorecard";
import Herobanner from "@/components/location/herobanner";
import { notFound } from "next/navigation";

import { Jsons } from "./locationJson";
import BreadCrumbs from "@/common/breadcrumbs";


export async function generateMetadata({ params }) {
  const location = params.location;

  return {
    alternates: {
      canonical: `/${location}`,
    },
  }
}

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
      <BreadCrumbs subtitle={locationFind?.locationName} subpathname={`/${location}`} />
      <Herobanner data={locationFind} />
      <ExploreCard data={locationFind} />
      {/* <Blog /> */}
    </>
  );
}
