"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
    const [toggle, setToggle] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedHeading, setSelectedHeading] = useState('');
    const [mouseHover, setMouseHover] = useState(false)

    const handleLogoClick = () => {
        setShowDropdown(!showDropdown);
        setSelectedHeading('');
    };

    const pathname = usePathname();
    const headerData = [
        {
            link: '/solutions',
            name: "Solutions",
            title: "solutions",
            subMenu: true,
            dropdown: [
                { subLink: '/solutions/tailormade-offices', subName: 'Tailormade Offices' },
                { subLink: '/solutions/ready-to-work-in', subName: 'Ready-To-Work-In Offices' },
                { subLink: '/solutions/meeting-rooms', subName: 'Meeting Rooms' },
                { subLink: '/solutions/virtual-offices', subName: 'Virtual Offices' },
                { subLink: '/solutions/events-launches', subName: 'Events & Launches' },
                { subLink: '/solutions/advertise-with-us', subName: 'Advertise With Us' },
            ]
        },
        {
            link: '',
            title: 'city',
            name: "Locations",
            subMenu: true,
            dropdown: [
                { subLink: '/delhi', subName: 'Delhi' },
                { subLink: '/gurgaon', subName: 'Gurgaon' },
                { subLink: '/hyderabad', subName: 'Hyderabad' },
                { subLink: '/kolkata', subName: 'Kolkata ' },
                { subLink: '/mumbai', subName: 'Mumbai' },
                { subLink: '/pune', subName: 'Pune' },
            ]
        },
        {
            link: '/about-us',
            name: "About Us",
            title: "about-us",
            subMenu: true,
            dropdown: [
                { subLink: '/about-us/sustainability', subName: 'Sustainability' },
                { subLink: '/about-us/UrbanWrk-Tech', subName: 'UrbanWrk Tech' }

            ]
        },
        {
            link: '/blogs',
            title: "Blogs",
            name: "Blogs",
            subMenu: false,
        },
        {
            link: '/careers',
            title: "Careers",
            name: "Careers",
            subMenu: false,
        },


    ];

    useEffect(() => {
        onClose();
    }, [pathname])

    const OpenDrawer = () => {
        setToggle(!toggle);
    };

    const onClose = () => {
        setToggle(false);
        // setSelectedHeading('');
    };

    const handleSubItemMouseLeave = () => {

        // setHeading()
        // onClose();
    };

    const handleSubItemClick = () => {

    }
    const handleMouseEnter = () => {
        setMouseHover(true)
    }

    return (
        <>
            {pathname == "/" && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "http://www.schema.org",
                            "@type": "Corporation",
                            name: "UrbanWrk",
                            url: "https://urbanwrk.com/",
                            logo: "https://urbanwrk.com/_next/image?url=%2Fimages%2Flogo.webp&w=256&q=75",
                            description: "We are UrbanWrk. Where your vision and creativity find their shape and reality. Where you can build your office space, your way, as the foundation of your legacy.",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "504, Tower A, Peninsula Corporate Park, Senapati Bapat Marg, Lower Parel West",
                                addressLocality: "Mumbai",
                                addressRegion: "Maharashtra",
                                postalCode: "400013",
                                addressCountry: "India",
                                availableLanguage: "en"
                            },
                            contactPoint: {
                                "@type": "ContactPoint",
                                "telephone": "+91 8399959996",
                                "contactType": "customer service",
                            },
                            sameAs: [
                                "https://www.facebook.com/Urbanwrk.official",
                                "https://www.instagram.com/urbanwrk/",
                                "https://www.linkedin.com/company/urbanwrk/"
                              ]
                        }),
                    }}
                />
            )}
            <div className="bg-[#FFF]">
                <div>
                    <div className={`fixed w-full bg-[#FFF] ${pathname === "/" ? "animate-banner-header banner-header " : ""} top-0 z-50 flex justify-between items-center py-3 px-6 md:px-12 md:py-0 lg:px-[100px] 2xl:px-[160px]`}>
                        <a href="/" className="">
                            <Image src="/images/logo.webp" width={150} height={150} priority className="w-32 h-12 lg:w-44 lg:h-20 object-contain" alt="urbanwork-logo" />
                        </a>
                        {/* Hamburger icon for lg screens and below */}
                        <div title="drawer" className="cursor-pointer lg:hidden" onClick={OpenDrawer}>
                            <Image src="/images/hamburger.svg" width={150} height={150} alt="hamburger" className="w-7" />
                        </div>
                        {/* Hidden for lg screens and above */}
                        <div className="hidden lg:flex lg:gap-14 items-center">
                            {headerData.map((item, i) => (
                                <div key={i} className="relative" onMouseLeave={handleSubItemMouseLeave} onMouseEnter={handleMouseEnter}>
                                    {item.dropdown ? (
                                        <div className="relative group">
                                            <div className="flex items-center">
                                                <a href={item?.link} className={`text-accent ${pathname.includes(item.title) ? "font-bold" : "font-medium"} text-base`}>{item?.name}</a>
                                                <div className="ml-2">
                                                    <Image src={"/images/headerDrop.svg"} alt="abc" height={10} width={10} />
                                                </div>
                                            </div>
                                            <div className="absolute top-full left-0 bg-white shadow-md mt-0 py-2 w-48 rounded-md z-10 hidden group-hover:block">
                                                {item?.dropdown?.map((subItem, j) => (
                                                    <a key={j} href={subItem?.subLink} className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleSubItemClick}>{subItem?.subName}</a>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <a href={item.link} className={`text-accent ${pathname === item.link ? "font-bold" : "font-medium"} text-base`}>{item.name}</a>
                                    )}
                                </div>
                            ))}
                            {/* Hamburger icon moved here */}
                            {/* <div className="cursor-pointer" onClick={OpenDrawer}>
                            <Image src="/images/hamburger.svg" width={150} height={150} alt="hamburger" className="w-7" />
                        </div> */}
                        </div>
                        {/* <Link href="/" className="text-white bg-primary py-[6px] px-5 text-sm hidden lg:block"><span>Book now</span></Link> */}
                    </div>

                    <div className={`fixed w-full h-full top-0 z-50 ${toggle ? "right-0" : "-right-full"} bg-[#0000005e] `} onClick={onClose}></div>
                    <div className={`fixed ${toggle ? "right-0" : "-right-full"} z-50 transition-all ease-in-out duration-500 bg-[#FFF] py-8 px-6 w-[80%] h-full `}>
                        <div className="flex flex-col">
                            <a href="/" className="mb-5" onClick={handleLogoClick}>
                                <Image src="/images/logo.svg" width={150} height={150} className="w-32 h-20" alt="logo" />
                            </a>
                            <div className="flex flex-col ">
                                {headerData.map((item, i) => (
                                    <div key={i} className="flex flex-col">
                                        <div className="border-b border-[#CCC] pb-5 mb-5">
                                            <div className="flex justify-between">
                                                <a href={item.link} onClick={() => setSelectedHeading(item.name)} className={`text-accent ${pathname === item.link ? "font-bold" : "font-medium"} text-base `}>
                                                    {item.name}
                                                </a>
                                                <div onClick={() => selectedHeading === item.name ? setSelectedHeading("") : setSelectedHeading(item.name)}>
                                                    {item?.subMenu && (
                                                        <div className="mt-2 ml-7">
                                                            <Image src={"/images/headerDrop.svg"} alt="abc" height={12} width={12} />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className={`${selectedHeading === item.name && !showDropdown ? "lg:hidden" : "hidden"}`}>
                                                {item?.subMenu && item?.dropdown.map((subItem, subIndex) => (
                                                    <div key={subIndex} className="mt-4 ml-3" onClick={() => onClose()}>
                                                        <a href={subItem.subLink} className={`text-accent ${pathname === subItem.subLink ? "font-bold" : "font-medium"} text-base `}>{subItem.subName}</a>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}



