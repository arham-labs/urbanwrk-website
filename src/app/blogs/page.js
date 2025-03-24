'use client';
import BlogsList from "@/components/blogs/blogslist";
import HeroBanner from "@/components/blogs/herobanner";
import axiosInstance from "@/libs/axiosConfigAdmin";
import { useEffect, useState } from "react";

export default function Page() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function GetData() {
      try {
        const response = await axiosInstance.get('/api/blogs?populate=*');
        setBlogData(response.data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    GetData();
  }, []);

  let data = null;
  if (Array.isArray(blogData)) {
    const sortedData = blogData?.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    data = [...sortedData];
  }

  return (
    <>
      <HeroBanner />
      {loading ? (
        <span className="text-center block py-16 text-base lg:text-3xl">Loading...</span>
      ) : data?.length > 0 ? (
        <BlogsList data={data} />
      ) : (
        <span className="text-center block py-16 text-base lg:text-3xl">No Blogs Found</span>
      )}
    </>
  );
}
