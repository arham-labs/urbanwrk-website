'use client'
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function HomeBanner() {
    const [showIcon, setShowIcon] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [poster, setPoster] = useState('/images/home/home-banner-poster.png'); // default for web
    const videoRef = useRef(null);

    useEffect(() => {
        const updatePoster = () => {
            if (window.innerWidth <= 768) {
                setPoster('/images/home/mobile-banner-poster.png'); // mobile poster
            } else {
                setPoster('/images/home/home-banner-poster.png'); // web poster
            }
        };

        // Set poster on initial render
        updatePoster();

        // Update poster on window resize
        window.addEventListener('resize', updatePoster);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', updatePoster);
        };
    }, []);

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            videoRef.current.play();
            setShowIcon(false);
        } else {
            videoRef.current.pause();
            setShowIcon(true);
        }
    };

    return (
        <div className="flex bg-cover bg-no-repeat relative h-screen cursor-pointer" onClick={handlePlay}>
            <video ref={videoRef} loop playsInline poster={poster} className="absolute right-0 left-0 top-0 w-full h-full object-cover back-video bottom-0 -z-[1]">
                <source src="/videos/home-video.mp4" type="video/mp4" />
            </video>
            {showIcon && (
                <div className='absolute top-1/2 left-1/2'>
                    <Image src="/images/locationInside/play-icon.svg" alt="play" width={100} height={100} className='w-8 lg:w-14' />
                </div>
            )}
        </div>
    );
}
