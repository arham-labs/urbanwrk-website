import dayjs from 'dayjs';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function BlogDetails({ blog }) {
    if (!blog) {
        notFound();
    }

    const headingClasses = [
        'text-2xl md:text-3xl lg:text-4xl uppercase text-secondary', // h1
        'text-xl md:text-2xl lg:text-3xl uppercase text-secondary', // h2
        'text-lg md:text-xl lg:text-2xl uppercase text-secondary', // h3
        'text-base md:text-lg lg:text-xl uppercase text-secondary', // h4
        'text-sm md:text-base lg:text-lg uppercase text-secondary', // h5
        'text-xs md:text-sm lg:text-base uppercase text-secondary', // h6
    ];

    const bannerImages = blog?.data?.attributes?.media?.data?.map((el) => el?.attributes?.url) || [];

    const renderContent = (content) => {
        const elements = [];
        let paragraphCount = 0;
        let imageIndex = 0;

        content?.forEach((block, index) => {
            switch (block.type) {
                case 'heading':
                    const HeadingTag = `h${block.level}`;
                    const headingClass = headingClasses[block.level - 1];
                    elements.push(
                        <HeadingTag key={index} className={`${headingClass} pt-4`}>
                            {block.children[0].text}
                        </HeadingTag>
                    );
                    break;
                case 'paragraph':
                    paragraphCount += 1;
                    elements.push(
                        <p key={index} className="pt-6 lg:w-[80%]">
                            {block.children[0].text}
                        </p>
                    );

                    // Render image after every 2 paragraphs if an image is available
                    if (paragraphCount % 2 === 0 && imageIndex < bannerImages.length) {
                        elements.push(
                            <div key={`image-${index}`} className="w-full lg:w-[642px] h-[472px] max-lg:py-8 lg:py-12">
                                <Image
                                    width={500}
                                    height={1000}
                                    sizes="100vw"
                                    priority
                                    alt={`content-image-${imageIndex}`}
                                    src={'https://urbanwrk.com/cms' + bannerImages[imageIndex]}
                                    className="w-full h-full object-cover"
                                    unoptimized
                                />
                            </div>
                        );
                        imageIndex += 1;
                    }
                    break;
                default:
                    return null;
            }
        });

        // Handle case where an image is needed after the last set of paragraphs
        if (paragraphCount % 2 !== 0 && imageIndex < bannerImages.length) {
            elements.push(
                <div key={`image-end`} className="w-full lg:w-[642px] h-[472px] max-lg:py-8 lg:py-12">
                    <Image
                        width={500}
                        height={1000}
                        sizes="100vw"
                        priority
                        alt={`content-image-${imageIndex}`}
                        src={'https://urbanwrk.com/cms' + bannerImages[imageIndex]}
                        className="w-full h-full object-cover"
                        unoptimized
                    />
                </div>
            );
        }

        return elements;
    };

    const dataBlog = blog?.data?.attributes?.Content?.filter(
        (it) => it?.children[0]?.text.trim() !== ''
    );

    return (
        <>
            {blog?.data?.attributes?.Banner?.data?.attributes?.url && <>
                <div className="h-screen hidden lg:block">
                    <Image
                        src={"https://urbanwrk.com/cms" + blog?.data?.attributes?.Banner?.data?.attributes?.url}
                        alt="home banner"
                        className="h-full w-full object-cover"
                        priority
                        layout="fill"
                        unoptimized
                    />
                </div>
                <div className="lg:hidden h-screen">
                    <Image
                        src={"https://urbanwrk.com/cms" + blog?.data?.attributes?.Banner?.data?.attributes?.url}
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
                        {blog?.data?.attributes?.Title}
                    </h2>
                    <span className="text-sm text-dark">
                        Published on {dayjs(blog?.data?.attributes?.publishedAt).format('MMM DD, YYYY')}
                    </span>
                </div>
                <div className="flex justify-center items-center flex-col pt-16 pb-16 px-6 md:px-12 md:pt-16 lg:px-[160px] lg:pt-[100px] lg:pb-[180px] md:pb-0">
                    {blog?.data?.attributes?.subtext && (
                        <p className="max-lg:pb-0 lg:pb-0  w-full lg:w-[80%] text-base uppercase text-secondary lg:pt-4">
                            {blog?.data?.attributes?.subtext}
                        </p>
                    )}
                    {renderContent(dataBlog)}
                </div>
            </div>
        </>
    );
}
