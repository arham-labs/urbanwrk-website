'use client'
import Image from "next/image";
import Link from "next/link";
import BasicSelectDrop from "../select";
import React, { useState } from 'react'

export default function BlogsList({ data }) {
    const [blogData, setBlogData] = useState(data)

    // Determine if the image is square, vertical, or rectangle
    const getAspectRatioClass = (index) => {
        const adjustedIndex = index - 1; // Adjusting the index as blog 2 is treated as blog 1
        if (adjustedIndex % 4 === 0) return "lg:aspect-[18/15]"; // Square images (1, 5, 9, ...)
        if (adjustedIndex % 4 === 1 || adjustedIndex % 4 === 2) return "lg:aspect-[18/24]"; // Vertical images (2, 3, 6, 7, ...)
        return "lg:aspect-[17/10]"; // Rectangle images (4, 8, ...)
    };

    const renderFirstParagraph = (content, type) => {
        let firstParagraph = '';

        for (let block of content) {
            if (block.type === 'heading' && block.children[0]?.text && type === "heading") {
                firstParagraph = block.children[0].text;
                break;
            }

            if (block.type === 'paragraph' && block.children[0]?.text) {
                firstParagraph = block.children[0].text;
                break;
            }

        }
        return firstParagraph;
    };

    const handleSortChange = (val) => {
        if (val.includes("Date (Oldest - Newest)")) {
            let newData = [...blogData].sort((a, b) => new Date(a.attributes.publishedAt) - new Date(b.attributes.publishedAt));
            setBlogData(newData)

        }
        else {
            let newData = [...blogData].sort((a, b) => new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt));
            setBlogData(newData)
        }
    }

    return (
        <div className="pt-16 lg:py-20 w-full px-6 max-w-[1920px] mx-auto lg:px-[100px] 2xl:px-40">
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-10 items-start">
                <div className="w-full lg:w-[46.5%] lg:hidden">
                    <BasicSelectDrop list={["Date (Oldest - Newest)", "Date (Newest - Oldest)"]}
                        handleSelectChange={handleSortChange} labelName="Date (Newest - Oldest)" />
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col gap-3 justify-start items-start">
                        <Image src={"https://urbanwrk.com/cms" + blogData[0]?.attributes?.Banner?.data?.attributes?.url} width={600} height={700} className="aspect-[16/17] object-cover w-full" alt="Image" />
                        <span className="text-base text-dark font-semibold">{blogData[0]?.attributes?.Title}</span>
                        <p className="text-xs text-[#6D6D6D] w-[95%] mb-2">{renderFirstParagraph(blogData[0]?.attributes?.Content, "heading")}</p>
                        <Link href={`/blogs/${blogData[0]?.id}`} className="bg-primary text-white py-2 px-3 text-sm w-fit mb-7 lg:mb-10">Read More</Link>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="w-full lg:w-[46.5%] mb-3 hidden lg:block">
                        <BasicSelectDrop list={["Date (Oldest - Newest)", "Date (Newest - Oldest)"]}
                            handleSelectChange={handleSortChange} labelName="Date (Newest - Oldest)" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[800px] 2xl:h-[825px] overflow-y-scroll items-start gap-x-10 srcol">
                        {blogData?.slice(0, -1).map((item, index) => (
                            <div className="flex flex-col gap-2" key={item.id}>
                                <Image
                                    src={"https://urbanwrk.com/cms" + item.attributes?.Banner?.data?.attributes?.url}
                                    width={1200}
                                    height={1000}
                                    className={`aspect-[18/22] ${getAspectRatioClass(index + 1)} object-cover w-full`}
                                    alt="Image"
                                />
                                <span className="text-base text-dark font-semibold">{item.attributes?.Title}</span>
                                <p className="text-xs text-[#6D6D6D] line-clamp-3 w-[95%] mb-2">
                                    {renderFirstParagraph(item?.attributes?.Content, "heading")}
                                </p>
                                <Link href={`/blogs/${item.id}`} className="bg-primary text-white py-2 px-3 text-sm w-fit mb-7 lg:mb-10">Read More</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
