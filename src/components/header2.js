"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState,useEffect } from "react";

export default function Header2() {
    const [toggle, setToggle] = useState(false);

    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedHeading, setSelectedHeading] = useState('');
    const [mouseHover,setMouseHover]=useState(false)

    const handleLogoClick = () => {
        setShowDropdown(!showDropdown);
        setSelectedHeading('');
    };

    const pathname = usePathname();
    const headerData = [
        {
            link: '/solutions',
            name: "Solutions",
            subMenu: true,
            dropdown: [
                { subLink: '/tailormade-office', subName: 'Tailormade Offices' },
            ]
        },
        {
            link: '',
            name: "Locations",
            subMenu: true,
            dropdown: [
                { subLink: '/mumbai', subName: 'Mumbai' },

            ]
        },
        {
            link: '/about-us',
            name: "About Us",
            subMenu: true,
            dropdown: [
                { subLink: '/sustainability', subName: 'Sustainability' },

            ]
        },
        {
            link: '/urbanWrk-tech',
            name: "UrbanWrk Tech",
            subMenu: false,
        },


    ];

    useEffect(()=>{
        onClose();
    },[pathname])

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
const handleMouseEnter=()=>{
    setMouseHover(true)
}
    // const handleHead=()=>{
    //     setSelectedHeading(item.name)
    //     const a=headerData.find(name)
    //     console.log(a)
    // }


    return (
        <div className="bg-[#FFF]">
            <div>
                <div className={`fixed w-full bg-[#FFF] ${pathname === "/" ? "animate-banner-header banner-header " : ""} top-0 z-50 flex justify-between items-center py-3 px-6 md:px-12 md:py-0 lg:px-[100px] 2xl:px-[160px]`}>
                    <Link href="/" className="">
                        <Image src="/images/logo.svg" priority={true} width={150} height={150} className="w-32 h-12 lg:w-44 lg:h-20" alt="urbanwork-logo" />
                    </Link>
{/*                   
                    <div title="drawer" className="cursor-pointer lg:hidden" onClick={OpenDrawer}>
                        <Image src="/images/hamburger.svg" width={150} height={150} alt="hamburger" className="w-7" />
                    </div> */}
               
                    {/* <div className="hidden lg:flex lg:gap-14 items-center">
                        {headerData.map((item, i) => (
                            <div key={i} className="relative" onMouseLeave={handleSubItemMouseLeave} onMouseEnter={handleMouseEnter}>
                                {item.dropdown ? (
                                    <div className="relative group">
                                        <div className="flex items-center">
                                            <Link href={item?.link} className={`text-accent ${pathname === item.link ? "font-bold" : "font-medium"} text-base`}>{item?.name}</Link>
                                            <div className="ml-2">
                                                <Image src={"/images/headerDrop.svg"} alt="abc" height={10} width={10} />
                                            </div>
                                        </div>
                                        <div className="absolute top-full left-0 bg-white shadow-md mt-0 py-2 w-48 rounded-md z-10 hidden group-hover:block">
                                            {item?.dropdown?.map((subItem, j) => (
                                                <Link key={j} href={subItem?.subLink} className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleSubItemClick}>{subItem?.subName}</Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link href={item.link} className={`text-accent ${pathname === item.link ? "font-bold" : "font-medium"} text-base`}>{item.name}</Link>
                                )}
                            </div>
                        ))}
                      
                    </div> */}
                </div>

                <div className={`fixed w-full h-full top-0 z-50 ${toggle ? "right-0" : "-right-full"} bg-[#0000005e] `} onClick={onClose}></div>
                {/* <div className={`fixed ${toggle ? "right-0" : "-right-full"} z-50 transition-all ease-in-out duration-500 bg-[#FFF] py-8 px-6 w-[80%] h-full `}>
                    <div className="flex flex-col">
                        <Link href="/" className="mb-5" onClick={handleLogoClick}>
                            <Image src="/images/logo.svg" width={150} height={150} className="w-32 h-20" alt="logo" />
                        </Link>
                        <div className="flex flex-col ">
                            {headerData.map((item, i) => (
                                <div key={i} className="flex flex-col mb-8">
                                    <div className="flex">
                                        <Link href={item.link}  onClick={() => setSelectedHeading(item.name)} className={`text-accent ${pathname === item.link ? "font-bold" : "font-medium"} text-base `}>
                                            {item.name}
                                        </Link>
                                        <div onClick={() =>selectedHeading === item.name ?setSelectedHeading(""): setSelectedHeading(item.name)}>
                                            {item?.subMenu && (
                                                <div className="mt-2 ml-7">
                                                    <Image src={"/images/headerDrop.svg"} alt="abc" height={12} width={12} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className={`${selectedHeading === item.name && !showDropdown ? "lg:hidden" : "hidden"}`}>
                                        {item?.subMenu && item?.dropdown.map((subItem, subIndex) => (
                                            <div key={subIndex} className="mt-4 ml-3" onClick={()=>onClose()}>
                                                <Link href={subItem.subLink} className={`text-accent ${pathname === subItem.subLink ? "font-bold" : "font-medium"} text-base `}>{subItem.subName}</Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}



