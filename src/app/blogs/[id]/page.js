'use client';
import BlogDetails from '@/components/blogs/blogdetails';
import BlogSolutionCard from '@/components/blogs/blogssolutionscard';
import axiosInstance from '@/libs/axiosConfigAdmin';
import { useEffect, useState } from 'react';

export default function Page({ params }) {
    const [blogData, setBlogData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axiosInstance.get(`/api/blogs/${params?.id}?populate=*`);
                setBlogData(response.data.data);
            } catch (error) {
                console.error("Error fetching blog data:", error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [params?.id]);

    if (loading) {
        return <span className="text-center block pt-32 pb-20 text-base lg:text-3xl">Loading...</span>;
    }

    if (!blogData) {
        return <span className="text-center block pt-32 pb-20 text-base lg:text-3xl">No Blog Details Found</span>;
    }

    return (
        <>
            <BlogDetails blog={blogData} />
            <BlogSolutionCard />
        </>
    );
}
