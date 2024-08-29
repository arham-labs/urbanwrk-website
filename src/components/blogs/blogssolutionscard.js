import Image from "next/image";
import Blog1 from '../../../public/images/blogs/card1.png'
import Blog2 from '../../../public/images/blogs/card2.png'
import LinkButton from "@/common/linkbtn";

export default function BlogSolutionCard() {
    return (
        <div className="bg-bglight6 py-16 lg:py-24">
            <div className="px-6 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[100px]">
                <span className="text-2xl block mb-12">SEE MORE IN WORKSPACE SOLUTIONS</span>
                <div className="flex flex-col lg:flex-row items-start gap-12 mb-10 lg:mb-20">
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <div className="relative">
                            <Image src={Blog2} alt="blog-1" className="aspect-[17/10] w-full object-cover" />
                        </div>
                        <div className="w-full lg:w-[85%] flex flex-col gap-2 lg:gap-4">
                            <span className="text-lg lg:text-2xl leading-6 lg:leading-8 font-semibold">Maintaining employee experience in a hybrid model of work</span>
                            <p className="leading-6 text-sm xl:text-base font-medium text-[#5B5B5B]">To have a happy workforce, organisations must adopt flexible work models that respond to the changing needs of employees.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <div className="relative">
                            <Image src={Blog1} alt="blog-2" className="aspect-[17/10] w-full object-cover" />
                        </div>
                        <div className="w-full lg:w-[85%] flex flex-col gap-2 lg:gap-4">
                            <span className="text-lg lg:text-2xl leading-6 lg:leading-8 font-semibold">How flexible workspaces can meet the demands of today and tomorrow</span>
                            <p className="leading-6 text-sm xl:text-base font-medium text-[#5B5B5B]">A workspace is about providing employees a space that allows them the freedom to work where, when, and how they want.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start lg:justify-center w-full">
                    <LinkButton title="Explore" href="/blogs"/>
                </div>
            </div>
        </div>)
}

