'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function LocationBanner({ data }) {
    const [showvideo, setShowVideo] = useState(false)
    const [showIcon, setShowIcon] = useState(true)
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            setShowVideo(true)
        }, 2000);

    }, [])

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
            {data.video ?
                <div className="bg-cover bg-no-repeat relative h-screen cursor-pointer" onClick={handlePlay}>
                    <video ref={videoRef} loop playsInline poster={data?.posterImage} className="absolute right-0 left-0 top-0 w-full h-full object-cover back-video bottom-0 -z-[1]">
                        <source src={data?.videourl} type="video/mp4" />
                    </video>
                    {showIcon && <div className='absolute top-1/2 left-1/2'>
                        <Image src="/images/locationInside/play-icon.svg" alt="play" width={100} height={100} className='w-8 lg:w-14' />
                    </div>}
                </div> 
                :
                <div className='h-[100vh]' style={{ position: 'relative' }}>
                    <Image src={data?.bannerImage} alt="location inside page"
                        height={1000} width={1000}
                        className='h-full w-full max-md:object-cover md:object-cover'
                        unoptimized />
                </div>
            }
        </div>
    );
}
