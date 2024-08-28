import dayjs from "dayjs";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function BlogDetails({ blog }) {

    if (!blog) {
        notFound();
    }


    const headingClasses = [
        "text-2xl md:text-3xl lg:text-4xl uppercase text-secondary", // h1
        "text-xl md:text-2xl lg:text-3xl uppercase text-secondary", // h2
        "text-lg md:text-xl lg:text-2xl uppercase text-secondary", // h3
        "text-base md:text-lg lg:text-xl uppercase text-secondary", // h4
        "text-sm md:text-base lg:text-lg uppercase text-secondary", // h5
        "text-xs md:text-sm lg:text-base uppercase text-secondary", // h6
    ];

    const renderContent = (content) => {
        const firstBlock = content?.length > 2 ? content?.slice(0, -1) : content

        return firstBlock?.map((block, index) => {
            switch (block.type) {
                case "heading":
                    const HeadingTag = `h${block.level}`;
                    const headingClass = headingClasses[block.level - 1];
                    return (
                        <HeadingTag
                            key={index}
                            className={`${headingClass} pt-4 text-center`}
                        >
                            {block.children[0].text}
                        </HeadingTag>
                    );
                case "paragraph":
                    return (
                        <p key={index} className="pt-6 lg:w-[80%] text-center">
                            {block.children[0].text}
                        </p>
                    );
                default:
                    return null;
            }
        });
    };

    const renderLastBlock = (content) => {
        const lastBlock = content?.[content.length - 1];

        if (!lastBlock) return null;
        switch (lastBlock.type) {
            case "heading":
                const HeadingTag = `h${block.level}`;
                const headingClass = headingClasses[block.level - 1];
                return (
                    <HeadingTag key={index} className={`${headingClass} pt-4`}>
                        {block.children[0].text}
                    </HeadingTag>
                );

            case "paragraph":
                return (
                    <p className="pt-6 lg:w-[80%] text-center">
                        {lastBlock.children[0].text}
                    </p>
                );
            default:
                return null;
        }
    };


    const dataBlog = blog?.data?.attributes?.Content?.filter((it) => it?.children[0]?.text.trim() !== "")

    return (
        <>
            <div className='h-screen hidden lg:block'>
                <Image
                    src="/images/blogs/desktop-banner.png"
                    alt="home banner"
                    className='h-full w-full object-cover'
                    priority
                    layout='fill' // Ensures the image covers the container properly
                    unoptimized
                />
            </div>
            <div className='lg:hidden h-screen'>
                <Image
                    src="/images/blogs/mobile-banner.png"
                    alt="home banner"
                    height={375}
                    width={720}
                    className='h-full w-full object-cover'
                    priority
                    unoptimized
                />
            </div>
            <div className="max-w-[1920px] text-secondary mx-auto relative">
                <div className="w-full bg-bglight1 py-16 text-left px-6 lg:px-[100px] 2xl:px-[160px]">
                    <h2 className="text-2xl md:text-3xl font-medium mb-2 uppercase text-dark">
                        {blog?.data?.attributes?.Title}
                    </h2>
                    <span className="text-sm text-dark">Published on {dayjs(blog?.data?.attributes?.publishedAt).format("MMM DD, YYYY")}</span>
                </div>
                <div className="flex justify-center items-center flex-col pt-16 pb-16 px-6 md:px-12 md:pt-16 lg:px-[100px] lg:pt-[100px] lg:pb-[180px] 2xl:px-[160px] md:pb-0">
                    {blog?.data?.attributes?.subtext && (
                        <p className="max-lg:pb-0 lg:pb-0  w-full lg:w-[80%] text-center text-base uppercase text-secondary lg:pt-4">
                            {blog?.data?.attributes?.subtext}
                        </p>
                    )}
                    {renderContent(dataBlog)}
                    {blog?.data?.attributes?.Banner?.data?.attributes?.url && (
                        <div className="w-full lg:w-[642px] h-[472px] max-lg:py-8 lg:py-12">
                            <Image
                                width={500}
                                height={1000}
                                sizes="100vw"
                                priority={true}
                                alt="hero-banner"
                                src={
                                    "https://urbanwrk.com/cms" +
                                    blog?.data?.attributes?.Banner?.data?.attributes?.url
                                }
                                className="w-full h-full object-cover"
                                unoptimized
                            />
                        </div>
                    )}
                    {dataBlog?.length > 2 && renderLastBlock(dataBlog)}
                </div>
            </div>
        </>
    );
}
