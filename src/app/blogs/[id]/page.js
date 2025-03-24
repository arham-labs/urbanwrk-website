'use client'
import BlogDetails from '@/components/blogs/blogdetails'
import BlogSolutionCard from '@/components/blogs/blogssolutionscard';
import axiosInstance from '@/libs/axiosConfigAdmin';
import { useEffect, useState } from 'react';

export default function page({ params }) {
    const [blogData, setBlogData] = useState(null)

    useEffect(() => {
        const GetData = async () => {
            try {
                const response = await axiosInstance.get(`/api/blogs/${params?.id}?populate=*`);
                setBlogData(response.data.data);
            } catch (error) {
                console.error("Error fetching blog data:", error);
            }
        };

        GetData();
    }, [])


    return (
        <>
            {blogData ?
                <>
                    <BlogDetails blog={blogData} />
                    <BlogSolutionCard />
                </>
                :
                <span className="text-center block pt-32 pb-20 text-base lg:text-3xl">No Blogs Details Found</span>}

        </>
    )
}
