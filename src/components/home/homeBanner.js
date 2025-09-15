'use client'
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function HomeBanner() {
    const [showIcon, setShowIcon] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [poster, setPoster] = useState('/images/home/home-banner-poster.png');
    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const updatePoster = () => {
            if (window.innerWidth <= 768) {
                setPoster('/images/home/mobile-banner-poster.png');
            } else {
                setPoster('/images/home/home-banner-poster.png');
            }
        };

        updatePoster();
        window.addEventListener('resize', updatePoster);
        return () => window.removeEventListener('resize', updatePoster);
    }, []);

    const handlePlay = () => {
        if (!videoRef.current) return;

        // Only load and play the video once
        if (!videoLoaded) {
            const source = document.createElement('source');
            source.src = '/videos/home-video.mp4';
            source.type = 'video/mp4';
            videoRef.current.appendChild(source);
            videoRef.current.load();
            setVideoLoaded(true);
        }

        if (!isPlaying) {
            videoRef.current.play();
            setShowIcon(false);
        } else {
            videoRef.current.pause();
            setShowIcon(true);
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <div className="flex bg-cover bg-no-repeat relative cursor-pointer min-h-screen  sm:min-h-[calc(100vh-80px)]" onClick={handlePlay}>
            <video
                ref={videoRef}
                loop
                playsInline
                poster={poster}
                className="absolute right-0 left-0 top-0 w-full h-full object-cover back-video bottom-0 -z-[1]"
            />
            {showIcon && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <Image src="/images/locationInside/play-icon.svg" alt="play" width={100} height={100} className="w-8 lg:w-14" />
                </div>
            )}
        </div>
    );
}