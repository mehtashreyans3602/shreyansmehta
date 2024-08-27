import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col gap-8 text-center my-4' id='About'>
            <h1 className='text-3xl'>About Me</h1>

            <div className="text-wrap text-justify ">
                <div className="m-auto p-2 flex flex-col max-w-3xl text-start">
                    <p className="text-lg">I am a Full Stack Developer with extensive proficiency in JavaScript and Python
                    </p><br />
                    {/* <p className="text-lg text-justify">Here&apos;s My Story:</p> */}
                    <p className="text-lg">
                        I started out with C, C++ and java in my Diploma, just like regular software engineering students. As my interest grew in Programming, I started learning python where I developed 2 games with pygame (Flappy Bird and Space Invaders). For my final year project, I created a Firefighting Robot Prototype equiped with an interface that utilized Face Recognition and Image Processing with opencv to identify people during fires.
                        <br /><br /> Moreover, I did an internship as a Web Dev Intern where I got practical experience by learning Vue.js and solidifying my knowledge of Django.
                    </p><br />
                    <p className="text-lg">
                        During my Bachelor&apos;s, I developed an interest in learning a variety of topics.
                        I started with Data Science, completing a certification through Coursera&apos;s IBM Data Science Professional Course.
                        Afterwards, I learned the fundamentals of Machine Learning and AI and completed several course in Kaggle, Udemy and Coursera.
                        I then learned about the fundamentals of .NET Development and C#.
                        For my final year project, I worked on a MERN stack application, using tools like Mapbox, TypeScript, React, and Next.js.
                        <br /><br />
                        Throughout my studies, I took part in several hackathons, attended industry meetups, and worked on various projects in different areas of Computer Science. I&apos;ve also gained practical experience through four internships and completed several certification courses, finishing my Bachelor&apos;s Degree in June 2024.
                    </p><br />
                    <p className="text-lg">
                        As of now I have a total of 11 months of Internship Experience and hands-on experience of 4+ years.
                    </p><br />
                    <img className=' h-64 '
                        src="https://github-readme-stats.vercel.app/api?username=mehtashreyans3602&show_icons=true&theme=default"
                    />
                </div>

            </div>
        </div>
    )
}

export default About;