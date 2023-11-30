import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import Code from '@/public/Code.svg'
const Base = () => {
    return (
        <>
            <div className="mb-10">
                <div className=" flex md:flex-row flex-col-reverse justify-evenly align-middle items-center md:p-5 bg-gradient-to-b from-black via-blue-950 to-black">
                    <div className="flex flex-col text-5xl text-blue-500 z-15">
                        <div className="m-4 p-4">
                            <p className="text-blue-500 "><span className="text-white">Hello there!</span> </p>
                            <p className="">
                                I am <span className="text-white">Shreyans Mehta</span>,
                            </p>
                            <p className="text-blue-500">I am a <span className="text-white">Full Stack Developer</span>.</p>
                        </div>

                        <div className='flex justify-around mt-10'>
                            <a href="https://github.com/mehtashreyans3602"><button><FaGithub className='hover:text-white' /></button></a>
                            <a href="https://www.instagram.com/shreyans3602/"><button><FaInstagram className='hover:text-white' /></button></a>
                            <a href="https://www.linkedin.com/in/shreyans-mehta-4b406a1b3/"><button><FaLinkedinIn className='hover:text-white' /></button></a>

                        </div>
                    </div>
                    <Image width={500} height={100} style={{minHeight:'100px',minWidth:'250px', Height: '100px',width:'500px',objectFit:'contain' }} src={Code} alt="NA" className='p-4 hidden md:block' />
                </div>
            </div>
        </>
    )
}
export default Base;