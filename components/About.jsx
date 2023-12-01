'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import DefaultImage from '@/public/shreyans.jpg';
import HoverImage from '@/public/shreyans2.jpg'; // Replace 'other-image.jpg' with the actual filename of your hover image

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="items-center justify-center text-center bg-black">
        <div className="text-5xl text-center text-white items-center justify-center p-4 m-4">
          <div className="flex items-center justify-center">
            <h1 className="p-4 border-b-4 border-blue-800 hover:border-white">About</h1>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-around items-center m-5 p-4">
          <div className="aspect-square">
            <Image
              width={500}
              height={100}
              className={`rounded-full border-8 border-blue-800 hover:border-white m-4 ${isHovered ? 'hovered-image' : ''
                }`}
              src={isHovered ? HoverImage : DefaultImage}
              alt=""
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
          <div className="text-center">

            <div className="ml-10 flex flex-col max-w-3xl text-start">
              <p className=" text-white text-lg">Software Engineer | IBM Certified DataScientist | FullStack Developer | IOT Developer.
              </p><br/>
              <p className=" text-white text-lg text-justify">Here&apos;s My Story:</p>
              <p className=" text-white text-lg">
                I started out with C, C++ and java just like regular software engineering students,
                after which I started learning python and made 2 games with it (Flappy Bird and Space Invaders) and final year diploma project I had made a FireFighting Robot Prototype with an interface which perform Face Recognition and Image Processing with opencv to identify people. Furthermore, I started web development with flask and django framework and did an internship where I had to learn Vue.js and apply my existing knowledge of django.
                This concluded my Diploma.
                </p>
                <p className=" text-white text-lg">
                While pursuing my Bachelor&apos;s I developed a knack for learning different technologies and I started learning DataScience and got certified by Coursera&apos;s IBM DataScience Professional Course. After that, I started learning about .NET Development and C# development.
                And at the end, I chose to develop a MERN Application for my final year project, where I learned typescript, REACT and Next.js.
              </p>
              <p className=" text-white text-lg">
              Subsequently, I have also participated in several hackathons and attended meetups too.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;
