import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import About from '@/components/About';
import { skills } from '@/Data/Skills';
import ProjectComponent from '@/components/Project';
export default function Home() {
  return (
    <main className='relative w-full flex flex-col justify-center items-center gap-20'>
      <div className='sticky top-0'>
        <Navbar />
      </div>
      <div id='Home'>
        <HeroSection />
      </div>
      <div id='About' className=' flex flex-col items-center justify-center text-neutral-950 my-12'>
        <About />
      </div>
      <div id='Skills' className=' flex flex-col items-center justify-center my-2'>
        <h1 className='text-3xl'>My Skills</h1>
        <div className='p-8 lg:w-1/2 h-40 '>
          <div className='flex flex-wrap gap-1'>
            {skills.map((skill, index) => {
              return (
                <button key={index} className='px-2 py-1 text-neutral-950 rounded-md bg-gray-100'>{skill}</button>
              );

            })}
          </div>
        </div>
      </div>
      <div id='Projects' className=''>
        <ProjectComponent />
      </div>
      <div id='Contact' className='w-full'>

        <Footer />
      </div>
    </main>
  );
}
