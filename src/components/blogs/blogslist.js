'use client'
import Image from "next/image";
import BlogBasicSelect from "../blogselect";
export default function BlogsList({ data, setDateVal, dateVal }) {

    const getAspectRatioClass = (index, section) => {
        const adjustedIndex = index - 1;
        if (section === 'first') {
            return adjustedIndex % 2 === 0 ? "lg:aspect-[18/15]" : "lg:aspect-[18/24]";
        }
        return adjustedIndex % 2 === 0 ? "lg:aspect-[18/24]" : "lg:aspect-[17/10]";
    };

    const mainBlog = data[0];
    const wholeData = data.slice(1);
    const firstHalf = wholeData.slice(0, Math.floor(wholeData.length / 2));
    const secondHalf = wholeData.slice(Math.floor(wholeData.length / 2));

    return (
        <div className="pt-16 lg:pt-36 w-full px-6 max-w-[1920px] mx-auto lg:px-[100px] 2xl:px-40">
            <div className="flex flex-col lg:flex-row gap-0 lg:gap-10 items-start">
                <div className="w-full lg:w-[46.5%] lg:hidden flex items-end">
                    <BlogBasicSelect list={["Date (Oldest - Newest)", "Date (Newest - Oldest)"]}
                         setDateVal={setDateVal} dateVal={dateVal} labelName="Date (Newest - Oldest)" date />
                </div>
                <div className="w-full lg:w-1/2 mb-7 lg:mb-0">
                    <a href={`/blogs/${mainBlog?.documentId}`} className="flex flex-col gap-3">
                        <Image src={`https://urbanwrk.com/cms${mainBlog?.Banner?.url}`} width={1200} height={1000} className="aspect-[16/17] object-cover w-full" alt="Image" />
                        <span className="text-base text-dark uppercase font-medium lg:text-xl">{mainBlog?.Title}</span>
                    </a>
                </div>
                <div className="w-full lg:w-1/2 relative">
                    <div className="mb-3 hidden lg:flex justify-end w-full absolute -top-16 right-3">
                        <div className="w-full lg:w-[46.5%]">
                            <BlogBasicSelect list={["Date (Oldest - Newest)", "Date (Newest - Oldest)"]}
                            setDateVal={setDateVal} dateVal={dateVal} labelName="Date (Newest - Oldest)" date />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 h-auto lg:h-[800px] xl:h-[850px] lg:overflow-y-scroll scrollbar scrollbar-custom">
                        {[secondHalf, firstHalf].map((section, secIndex) => (
                            <div className="flex flex-col gap-7" key={secIndex}>
                                {section.map((item, index) => (
                                    <a href={`/blogs/${item.documentId}`} className="flex flex-col gap-2" key={item.id}>
                                        <Image
                                            src={`https://urbanwrk.com/cms${item.Banner?.url}`}
                                            width={1200}
                                            height={1000}
                                            className={`aspect-[18/22] ${getAspectRatioClass(index + 1, secIndex === 0 ? 'first' : 'second')} object-cover w-full mb-2`}
                                            alt="Image"
                                        />
                                        <span className="text-base text-dark font-medium">{item?.Title}</span>
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
