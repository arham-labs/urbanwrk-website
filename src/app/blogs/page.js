'use client'
import BlogsList from "@/components/blogs/blogslist";
import HeroBanner from "@/components/blogs/herobanner";
import axiosInstance from "@/libs/axiosConfigAdmin";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [blogData, setBlogData] = useState([])

  useEffect(() => {
    async function GetData() {
      const response = await axiosInstance.get('/api/blogs?populate=*');
      setBlogData(response.data.data);
    }
    GetData();
  }, [])

  let data = null
  if (Array.isArray(blogData)) {
    const sortedData = blogData?.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    data = [...sortedData]
  }

  return (
    <>
      <HeroBanner />
      {data?.length  > 0 ? <BlogsList data={data} /> : <span className="text-center block py-16 text-base lg:text-3xl">No Blogs Found</span>}
    </>
  )
}
