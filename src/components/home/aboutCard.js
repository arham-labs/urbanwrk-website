import Image from 'next/image'
import React from 'react'

export default function AboutCard() {
    return (
        <div>
            <div className='flex'>
                <div className='w-1/2 p-[]'>
                    <Image src="/images/home/aboutUs.png" height={400} width={400} alt="aboutUs" />
                </div>
                <div className='w-1/2'>
                    <h1>We are UrbanWrk</h1>
                    <div>
                        <p>Where your vision and creativity find their shape and reality. Where you can build your office space, your way, as the foundation of your legacy.</p>
                        <p>We make offices come alive- with your purpose, with the power of your dreams, with the dynamic energy of other driven professionals, with the commitment to nurture the planet and with the promise that whether you are a large organisation or a solopreneur, you will always find the space you need to leave your mark.</p>
                    </div>
                    <div>
                        <button>About Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
