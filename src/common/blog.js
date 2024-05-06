import Image from "next/image";
import Blog1 from '../../public/images/blog1.png'
import Blog2 from '../../public/images/blog2.png'
import Blog1Mobile from '../../public/images/blog1-mobile.png'
import Blog2Mobile from '../../public/images/blog2-mobile.png'
import LinkButton from "./linkbtn";

export default function Blog() {
    return (
        <div className="bg-bglight6 py-16 lg:py-24">
            <div className="px-6 max-w-[1920px] mx-auto 2xl:px-40 lg:px-[100px]">
                <span className="text-2xl block mb-12">BLOG</span>
                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 mb-10">
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <div className="relative">
                            <span className="absolute top-4 left-5 lg:top-6 lg:left-8 uppercase bg-bglight1 p-2 lg:p-3 text-xs font-semibold lg:text-sm">Workspace Solutions</span>
                            <Image src={Blog2} alt="blog-1" className="hidden lg:block aspect-[5/4] w-full" />
                            <Image src={Blog2Mobile} alt="blog-1" className="lg:hidden w-full" />
                        </div>
                        <div className="w-full lg:w-[85%] flex flex-col gap-2 lg:gap-4">
                            <span className="text-lg lg:text-2xl leading-6 lg:leading-8 font-semibold">How Flexible Workspaces can meet the demands of today and tomorrow</span>
                            <p className="leading-6 text-sm xl:text-base font-medium">A workspace is not just about the work. It is also about providing employees a space that allows them the freedom to work where, when, and how they want.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <div className="relative">
                            <span className="absolute top-4 left-5 lg:top-6 lg:left-8 uppercase bg-bglight1 p-2 lg:p-3 text-xs font-semibold lg:text-sm">Resources</span>
                            <Image src={Blog1} alt="blog-2" className="hidden lg:block aspect-[26/35] w-full" />
                            <Image src={Blog1Mobile} alt="blog-2" className="lg:hidden w-full" />
                        </div>
                        <div className="w-full lg:w-[85%] flex flex-col gap-2 lg:gap-4">
                            <span className="text-lg lg:text-2xl leading-6 lg:leading-8 font-semibold">Why planning your office space is a necessity?</span>
                            <p className="leading-6 text-sm xl:text-base font-medium">Locking in on the perfect space is the foremost step to creating a productive office for your company. The next step, however, is even more crucial — deciding the layout of that space.</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start lg:justify-center w-full">
                    <LinkButton title="Read more" href=""/>
                </div>
            </div>
        </div>)
}

