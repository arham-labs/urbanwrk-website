import dayjs from 'dayjs';
import Image from 'next/image';
import ReactMarkdown from "react-markdown";

export default function BlogDetails({ blog }) {

    return (
        <>
            {blog?.Banner?.url && <>
                <div className="h-screen hidden lg:block">
                    <Image
                        src={"https://urbanwrk.com/cms" + blog?.Banner?.url}
                        alt="home banner"
                        className="h-full w-full object-cover"
                        priority
                        layout="fill"
                        unoptimized
                    />
                </div>
                <div className="lg:hidden h-screen">
                    <Image
                        src={"https://urbanwrk.com/cms" + blog?.Banner?.url}
                        alt="home banner"
                        height={375}
                        width={720}
                        className="h-full w-full object-cover"
                        priority
                        unoptimized
                    />
                </div> </>}
            <div className="max-w-[1920px] text-secondary mx-auto relative">
                <div className="w-full bg-bglight1 py-16 text-left px-6 lg:px-[160px]">
                    <h2 className="text-2xl md:text-3xl font-medium mb-2 text-dark">
                        {blog?.Title}
                    </h2>
                    <span className="text-sm text-dark">
                        Published on {dayjs(blog?.publishedAt).format('MMM DD, YYYY')}
                    </span>
                </div>
                <div className="flex justify-center items-center flex-col gap-10 pt-16 pb-16 px-6 md:px-12 md:pt-16 lg:px-[160px] lg:pt-[100px] lg:pb-[180px] md:pb-0">
                    <ReactMarkdown>{blog?.Description}</ReactMarkdown>
                </div>
            </div>
        </>
    );
}
