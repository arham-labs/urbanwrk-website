import BlogsList from "@/components/blogs/blogslist";
import HeroBanner from "@/components/blogs/herobanner";
import axiosInstance from "@/libs/axiosConfigAdmin";

export const getListOfBlogs = async () => {
  try {
    const response = await axiosInstance.get('/api/blogs?populate=*');
    return response?.data?.data;
  } catch (error) {
    return error.response.data.data;
  }
};

export default async function Page() {
  const response = await getListOfBlogs();
  let data = null;
  if (Array.isArray(response)) {
    const sortedData = response?.sort((a, b) => new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt));
    data = [...sortedData]
  }

  return (
    <>
      <HeroBanner />
      {data ? <BlogsList data={data} /> : <span className="text-center block py-16 text-base lg:text-3xl">No Blogs Found</span>}
    </>
  )
}
