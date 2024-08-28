import BlogDetails from '@/components/blogs/blogdetails'
import axiosInstance from '@/libs/axiosConfigAdmin';
import { notFound } from 'next/navigation';

export const getBlogById = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/blogs/${id}?populate=*`);
        return response.data;
    }
    catch (error) {
        return error.response.data.data;
    }
};

export default async function page({ params }) {
    const data = await getBlogById(params?.id);
    
    return (
        <BlogDetails blog={data} />
    )
}
