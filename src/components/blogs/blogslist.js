'use client'
import Image from "next/image";
import BasicSelectDrop from "../select";
import React, { useState } from 'react'
// import ReactMarkdown from "react-markdown";

export default function BlogsList({ data }) {
    const [blogData, setBlogData] = useState(data)

    // Determine if the image is square, vertical, or rectangle
    const getFirstSectionAspectRatioClass = (index) => {
        const adjustedIndex = index - 1; // Adjusting the index as blog 2 is treated as blog 1
        if (adjustedIndex % 2 === 0) return "lg:aspect-[18/15]"; // Square images (1, 5, 9, ...)
        if (adjustedIndex % 2 === 1) return "lg:aspect-[18/24]"; // Vertical images (2, 3, 6, 7, ...)
    };

    const getSecondSectionAspectRatioClass = (index) => {
        const adjustedIndex = index - 1; // Adjusting the index as blog 2 is treated as blog 1
        if (adjustedIndex % 2 === 0) return "lg:aspect-[18/24]"; // Vertical images (2, 3, 6, 7, ...)
        if (adjustedIndex % 2 === 1) return "lg:aspect-[17/10]"; // Square images (1, 5, 9, ...)
    };

    // const renderFirstParagraph = (content, type) => {
    //     let firstParagraph = '';

    //     for (let block of content) {
    //         if (block.type === 'heading' && block.children[0]?.text && type === "heading") {
    //             firstParagraph = block.children[0].text;
    //             break;
    //         }

    //         if (block.type === 'paragraph' && block.children[0]?.text) {
    //             firstParagraph = block.children[0].text;
    //             break;
    //         }

    //     }
    //     return firstParagraph;
    // };

    const handleSortChange = (val) => {
        if (val.includes("Date (Oldest - Newest)")) {
            let newData = [...blogData].sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
            setBlogData(newData)

        }
        else {
            let newData = [...blogData].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
            setBlogData(newData)
        }
    }

    let wholeData = blogData?.slice(1, blogData.length);

    return (
        <div className="py-16 lg:py-36 w-full px-6 max-w-[1920px] mx-auto lg:px-[100px] 2xl:px-40">
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-10 items-start">
                <div className="w-full lg:w-[46.5%] lg:hidden flex items-end">
                    <BasicSelectDrop list={["Date (Oldest - Newest)", "Date (Newest - Oldest)"]}
                        handleSelectChange={handleSortChange} labelName="Date (Newest - Oldest)" date={true} />
                </div>
                <div className="w-full lg:w-1/2 mb-7 lg:mb-0">
                    <a href={`/blogs/${blogData[0]?.documentId}`} className="flex flex-col gap-3 justify-start items-start">
                        <Image src={"https://urbanwrk.com/cms" + blogData[0]?.Banner?.url} width={1200} height={1000} className="aspect-[16/17] object-cover w-full" alt="Image" />
                        <span className="text-base text-dark uppercase font-medium lg:text-xl">{blogData[0]?.Title}</span>
                        {/* <ReactMarkdown>{blogData[0]?.Description}</ReactMarkdown> */}
                        {/* <Link href={`/blogs/${blogData[0]?.id}`} className="bg-primary text-white py-2 px-3 text-sm w-fit mb-7 lg:mb-10">Read More</Link> */}
                    </a>
                </div>
                <div className="w-full lg:w-1/2 relative">
                    <div className="mb-3 hidden lg:flex justify-end w-full absolute -top-16 right-3">
                        <div className="w-full lg:w-[46.5%]">
                            <BasicSelectDrop list={["Date (Oldest - Newest)", "Date (Newest - Oldest)"]}
                                handleSelectChange={handleSortChange} labelName="Date (Newest - Oldest)" date={true} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 h-auto lg:h-[800px] xl:h-[850px] lg:overflow-y-scroll scrollbar scrollbar-custom items-start lg:gap-x-10">
                        <div className="flex flex-col gap-7">
                            {wholeData.slice(0, Math.floor(wholeData.length / 2)).map((item, index) =>
                                <a href={`/blogs/${item.id}`} className="flex flex-col gap-2" key={item.id}>
                                    <Image
                                        src={"https://urbanwrk.com/cms" + item.Banner?.url}
                                        width={1200}
                                        height={1000}
                                        className={`aspect-[18/22] ${getFirstSectionAspectRatioClass(index + 1)} object-cover w-full mb-2`}
                                        alt="Image"
                                    />
                                    <span className="text-base text-dark font-medium">{item?.Title}</span>
                                    {/* <ReactMarkdown>{item?.Description}</ReactMarkdown> */}
                                    {/* <Link href={`/blogs/${item.id}`} className="bg-primary text-white py-2 px-3 text-sm w-fit mb-7 lg:mb-10">Read More</Link> */}
                                </a>
                            )}
                        </div>
                        <div className="flex flex-col gap-7">
                            {wholeData.slice(Math.round(wholeData.length / 2), wholeData.length).map((item, index) =>
                                <a href={`/blogs/${item.documentId}`} className="flex flex-col gap-2" key={item.id}>
                                    <Image
                                        src={"https://urbanwrk.com/cms" + item.Banner?.url}
                                        width={1200}
                                        height={1000}
                                        className={`aspect-[18/22] ${getSecondSectionAspectRatioClass(index + 1)} object-cover w-full mb-2`}
                                        alt="Image"
                                    />
                                    <span className="text-base text-dark font-medium">{item?.Title}</span>
                                    {/* <ReactMarkdown>{item?.Description}</ReactMarkdown> */}
                                    {/* <Link href={`/blogs/${item.id}`} className="bg-primary text-white py-2 px-3 text-sm w-fit mb-7 lg:mb-10">Read More</Link> */}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* <style jsx>{`
            p{
                font-size: 12px;
                color: #6D6D6D;
            }
              img {
                width: 120px;
                height: auto;
              }
              @media (min-width: 1024px) {
                p{
                    font-size: 14px;
                    width: 95%;
                }
              }
            `}</style> */}
        </div>
    );
}
