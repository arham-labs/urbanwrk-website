'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const [toggle, setToggle] = useState(false);
    const pathname = usePathname();
    const headerData = [
        {
            link: '/solutions',
            name: "Solutions",
            dropdown: [
                { subLink: '/tailormade-office', subName: 'Tailormade Offices' },
                { subLink: '/tailormade-office', subName: 'Ready-To-Work In Offices' },
                { subLink: '/tailormade-office', subName: 'Meeting Rooms' },
                { subLink: '/tailormade-office', subName: 'Events & Shoots' },
                { subLink: '/tailormade-office', subName: 'Advertise With Us' },
            ]
        },
        {
            link: '',
            name: "Locations",
            dropdown: [
                { subLink: '/mumbai', subName: 'Mumbai' },
                { subLink: '/mumbai', subName: 'Pune' },
                { subLink: '/mumbai', subName: 'Hyderabad' },
                { subLink: '/mumbai', subName: 'Kolkata' },
            ]
        },
        {
            link: '/about-us',
            name: "About Us",
            dropdown: [
                { subLink: '', subName: 'Our Team' },
                { subLink: '', subName: 'Our Mission' },
                { subLink: '', subName: 'Our Values' },
            ]
        },
        {
            link: '/urbanWrk-tech',
            name: "UrbanWrk Tech",
        },
        {
            link: '',
            name: "Contact Us",
        },
       
    ];

    const OpenDrawer = () => {
        setToggle(!toggle)
    }

    const onClose = () => {
        setToggle(false)
    }

    return (
        <div className="bg-[#FFF]">
            <div >
                <div className={`fixed w-full bg-[#FFF] ${pathname === "/" ? "animate-banner-header banner-header " : ""} top-0 z-50 flex justify-between items-center py-3 px-6 md:px-12 md:py-0 lg:px-[100px] 2xl:px-[160px]`}>
                    <Link href="/" className="">
                        <Image src="/images/logo.svg" priority={true} width={150} height={150} className="w-32 h-12 lg:w-44 lg:h-20 " alt="urbanwork-logo" />
                    </Link>
                    <a title="drawer" className="cursor-pointer lg:hidden" onClick={OpenDrawer}>
                        <Image src="/images/hamburger.svg" width={150} height={150} alt="hamburger" className="w-7" />
                    </a>
                    <div className="hidden lg:flex md:gap-14 items-center ">
                        {headerData.map((item, i) =>
                            <Link key={i} href={item.link} className={`text-accent ${pathname === item.link ? "font-bold" : "font-medium"} text-base`}>{item.name}</Link>
                        )}
                        
                    </div>
                    
                </div>
                <div className={`fixed w-full h-full top-0 z-50 ${toggle ? "right-0" : "-right-full"} bg-[#0000005e]`} onClick={onClose}>
                    <div className={`fixed ${toggle ? "right-0" : "-right-full"} z-50 transition-all ease-in-out duration-500 bg-[#FFF] py-8 px-6 w-[80%] h-full `}>
                        <div className="flex flex-col">
                            <Link href="/" className="mb-5">
                                <Image src="/images/logo.svg" width={150} height={150} className="w-32 h-20" alt="logo" />
                            </Link>
                            <div className="flex flex-col ">
                                {headerData.map((item, i) =>
                                    <Link key={i} href={item.link} className={`text-accent ${pathname === item.link ? "font-bold" : "font-medium"} text-base mb-8`} onClick={onClose}>{item.name}</Link>
                                )}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

