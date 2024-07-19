'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function LocationBanner({ data }) {
    const [showIcon, setShowIcon] = useState(true)
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef(null)

    const handlePlay = () => {
        setIsPlaying(!isPlaying)
        if (!isPlaying) {
            videoRef.current.play()
            setShowIcon(false)
        }
        else {
            videoRef.current.pause();
            setShowIcon(true)
        }
    }

    return (
        <div style={{ position: 'relative' }}>
                    <video controls width={800} height={900}>
                        <source src="/images/locationInside/movie.mp4" type="video/mp4" />
                    </video>
                    {/* <video ref={videoRef} loop playsInline poster={data?.posterMobileImage} className="lg:hidden absolute right-0 left-0 top-0 w-full h-full object-cover back-video bottom-0 -z-[1]">
                        <source src={data?.videourl} type="video/mp4" />
                    </video> */}
                    {/* {showIcon && <div className='absolute top-1/2 left-1/2'>
                        <Image src="/images/locationInside/play-icon.svg" alt="play" width={100} height={100} className='w-8 lg:w-14' />
                    </div>} */}                
            </div>
    );
}
