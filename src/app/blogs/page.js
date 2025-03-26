'use client';
import BlogsList from "@/components/blogs/blogslist";
import HeroBanner from "@/components/blogs/herobanner";
import axiosInstance from "@/libs/axiosConfigAdmin";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import BreadCrumbs from "@/common/breadcrumbs";

export default function Page() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 11;
  const [isSort,setIsSort] = useState("desc")

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axiosInstance.get(`/api/blogs?sort=publishedAt:${isSort}&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`);
        setBlogData(response.data.data);
        setTotalPages(response.data.meta.pagination.pageCount); // Total pages from API response
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [page, isSort]); // Refetch data when page changes

  return (
    <>
      <BreadCrumbs subtitle="Blogs" subpathname="/blogs" />
      <HeroBanner />
      {loading ? (
        <span className="text-center block py-16 text-base lg:text-3xl">Loading...</span>
      ) : blogData.length > 0 ? (
        <>
          <BlogsList setIsSort={setIsSort} data={blogData} />
          <Stack spacing={2} className="flex justify-center py-8 items-center mb-10">
            <Pagination
              count={totalPages}
              page={page}
              onChange={(event, value) => setPage(value)}
              sx={{
                "& .MuiPaginationItem-root": { color: "red" },
                "& .MuiPaginationItem-page.Mui-selected": {
                  backgroundColor: "#C72030",
                  color: "white",
                  ":hover": { backgroundColor: "#C72030" }
                },
                "& .MuiPaginationItem-ellipsis": { color: "#C72030" },
              }}
            />
          </Stack>
        </>
      ) : (
        <span className="text-center block py-16 text-base lg:text-3xl">No Blogs Found</span>
      )}
    </>
  );
}
