'use client';
import BlogsList from "@/components/blogs/blogslist";
import HeroBanner from "@/components/blogs/herobanner";
import axiosInstance from "@/libs/axiosConfigAdmin";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Page() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const pageSize = 10;

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

  let data = [];
  if (Array.isArray(blogData)) {
    const sortedData = blogData?.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    data = [...sortedData];
  }

  // Paginate data for client-side pagination
  const totalPages = Math.ceil(data.length / pageSize);
  const paginatedData = data.slice((page - 1) * pageSize, page * pageSize);

  return (
    <>
      <HeroBanner />
      {loading ? (
        <span className="text-center block py-16 text-base lg:text-3xl">Loading...</span>
      ) : paginatedData.length > 0 ? (
        <>
          <BlogsList data={paginatedData} />
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
                  ":hover": '#C72030'
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
