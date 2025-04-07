import BreadCrumbs from '@/common/breadcrumbs';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function BlogDetails({ blog, params }) {

    const autoLinkify = (text) => {
        const urlRegex = /((https?:\/\/|www\.)[^\s\)\]]+)/g;
        const emailRegex = /[\w.-]+@[\w.-]+\.\w+/g;
        const isImageUrl = (url) => /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
      
        return text
          ?.replace(urlRegex, (url) => {
            if (text.includes(`](${url})`) || text.includes(`![](${url})`)) return url;
            const fullUrl = url.startsWith("www.") ? `https://${url}` : url;
            if (isImageUrl(fullUrl)) {
                return `<img src="${fullUrl}" alt="" />`;
              }
              return `${fullUrl}`;
            })
          ?.replace(emailRegex, (email) => {
            if (text.includes(`](${email})`)) return email;
            return `[${email}](mailto:${email})`;
          });
      };
      

    const descriptionWithLinks = autoLinkify(blog?.Description);

    return (
        <>
            <BreadCrumbs
                subtitle="Blogs"
                subpathname={`/blogs`}
                nestedpage={true}
                nestedpathname={`/blogs/${params?.id}`}
                nestedtitle={blog?.Title}
            />
            {blog?.Banner?.url && (
                <>
                    <div className="h-screen hidden lg:block">
                        <Image
                            src={"https://urbanwrk.com/cms" + blog?.Banner?.url}
                            alt="home banner"
                            className="h-full w-full object-cover"
                            priority
                            unoptimized
                            height={1800}
                            width={1000}
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
                    </div>
                </>
            )}
            <div className="max-w-[1920px] text-secondary mx-auto relative">
                <div className="w-full bg-bglight1 py-16 text-left px-6 lg:px-[160px]">
                    <h2 className="text-2xl md:text-3xl font-medium mb-2 text-dark">
                        {blog?.Title}
                    </h2>
                    <span className="text-sm text-dark">
                        Published on {dayjs(blog?.publishedAt).format('MMM DD, YYYY')}
                    </span>
                </div>
                <div className="flex flex-col gap-4 pt-16 pb-16 px-6 lis md:px-12 md:pt-16 lg:px-[160px] lg:py-[100px] md:pb-0">
                    <ReactMarkdown
                        components={{
                            a: ({ href, children }) => {
                                const isEmail = href.startsWith("mailto:");
                                return (
                                    <a
                                        href={isEmail ? href : children}
                                        className="underline text-blue-700"
                                        target={isEmail ? undefined : "_blank"}
                                        rel={isEmail ? undefined : "noopener noreferrer"}
                                    >
                                        {children}
                                    </a>
                                );
                            },
                        }}
                    >
                        {descriptionWithLinks}
                    </ReactMarkdown>

                </div>
            </div>
            <style jsx global>{`
        h3 {
          font-size: 24px;
          font-weight: 600;
        }
        h4 {
          font-size: 20px !important;
          font-weight: 600;
        }
        li {
          list-style-type: disc !important;
          margin-left: 14px !important;
        }
        li::marker {
          font-size: 18px !important;
        }
        
      `}</style>
        </>
    );
}
