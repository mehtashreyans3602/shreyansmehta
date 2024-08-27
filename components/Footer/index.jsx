import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { PiMailbox } from "react-icons/pi";
import Link from 'next/link';
const index = () => {
    return (<footer className='w-full bg-gray-100 py-4 backdrop-blur-md shadow-lg'>
        <p className='text-center '>To Avail my Services:</p>
        <div className='p-4  flex md:flex-row flex-col justify-center items-center text-center gap-2'>
            <div className='w-64'>
                <span>You can email me,</span>
                <p className='min-w-56 mx-2 p-2 flex justify-center items-center text-neutral-950 space-x-2'>
                    <PiMailbox />&nbsp;<span><Link href="mailto:mehtashreyans3602@gmail.com" className='text-blue-400'>mehtashreyans3602@gmail.com</Link></span>
                </p>
            </div>
            <span className='p-4'>OR</span>
            <div className='w-64'>
                <span>Drop a DM On my Socials:</span>
                <p className='min-w-56 mx-2 p-2 flex justify-around text-neutral-950 space-x-2'>
                    <Link href="https://x.com/shreyans3602"><button className='transition-transform duration-300 ease-in-out hover:text-blue-500'><FaTwitter /> </button></Link>
                    <Link href="https://www.instagram.com/shreyans3602/"><button className='transition-transform duration-300 ease-in-out hover:text-red-300'><FaInstagram /> </button></Link>
                    <Link href="https://www.linkedin.com/in/shreyans-mehta-4b406a1b3/"><button className='transition-transform duration-300 ease-in-out hover:text-blue-600'><FaLinkedinIn /> </button></Link>
                </p>
            </div>
        </div>
    </footer>
    )
}

export default index