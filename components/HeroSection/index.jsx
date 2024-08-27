'use client'
import Image from 'next/image'
import { FaDownload, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";
import profile from '@/Assets/Images/shreyans.jpg';
import { useState } from 'react';
import shreyansmehta from "@/Assets/PDF/Shreyans.pdf"
import Link from 'next/link';
const HeroSection = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleClick = () => {
        setIsDownloading(true);
        fetch(shreyansmehta)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = "Shreyans.pdf";
                link.click();
                setIsDownloading(false);
            });

    };
    return (
        <>
            <div className='w-fit flex justify-center p-2 gap-2 md:my-24'>
                <div id='Banner ' className=''>
                    <div className="mb-10 text-neutral-950 ">
                        <div className="flex flex-col justify-evenly align-middle items-center md:p-5 ">
                            <Image height={125} width={125} alt='NA' loading='lazy' src={profile} className='rounded-full' />
                            <div className="flex flex-col text-5xl  z-15">
                                <div className="m-4 p-4 text-center">
                                    <p><span>Hello, </span>
                                        I am <span className="font-bold">Shreyans</span>.
                                    </p>
                                    <p>I am a <span className="font-extrabold">Full Stack Developer</span>.</p>
                                </div>
                                <div className='min-w-56 m-2 my-8 p-2 flex justify-around text-neutral-950 space-x-2'>
                                    <Link href="https://github.com/mehtashreyans3602"><button className='transition-transform duration-300 ease-in-out hover:text-white'><FaGithub /> </button></Link>
                                    <Link href="https://www.instagram.com/shreyans3602/"><button className='transition-transform duration-300 ease-in-out hover:text-red-300'><FaInstagram /> </button></Link>
                                    <Link href="https://www.linkedin.com/in/shreyans-mehta-4b406a1b3/"><button className='transition-transform duration-300 ease-in-out hover:text-blue-600'><FaLinkedinIn /> </button></Link>
                                    <Link href="https://x.com/shreyans3602"><button className='transition-transform duration-300 ease-in-out hover:text-blue-500'><FaTwitter /> </button></Link>

                                </div>
                                <div className='flex flex-col md:flex-row items-center justify-evenly md:space-x-2 md:space-y-0 space-y-12'>
                                    <div>
                                        <Link href="mailto:mehtashreyans3602@gmail.com"> <button className='transition-transform duration-300 hover:scale-95 flex justify-center items-center gap-1 bg-black text-white text-lg font-light rounded-3xl p-2'>Contact Me <MdOutlineEmail className='' /></button></Link>
                                    </div>
                                    <div>
                                        <button onClick={handleClick} className='transition-transform duration-300 hover:scale-95 flex justify-center items-center gap-1 bg-white text-lg font-light rounded-3xl p-2'>Download Resume <FaDownload className='' /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;