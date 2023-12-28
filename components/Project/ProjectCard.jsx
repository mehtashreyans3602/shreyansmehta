// ProjectCard.js
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
const ProjectCard = ({ project }) => {
    const [seeMore, setseeMore] = useState(false);
    const handleSeeMore = () => {
        setseeMore(!seeMore);
    }
    return (
        <div className='rounded-3xl m-4'>
            <div className="flex flex-col bg-indigo-500  ring-2 rounded-3xl shadow-md w-[99%]  md:w-96 h-auto text-start backdrop-filter backdrop-blur-3xl bg-opacity-20 text-white">

                <Image
                    height={400}
                    width={400}
                    src={project.ImageURL}
                    alt="Project Image"
                    className=" rounded-t-3xl p-1  md:h-64 object-cover"
                />
                <div className='flex flex-col p-2'>
                    <h2 className=" text-lg font-semibold">{project.ProjectName}</h2>
                    <br />
                    <div className='flex'>
                        <div>
                            <h3 className=" text-base font-semibold mb-2">Technologies</h3>
                            <ul className="flex flex-wrap">
                                {project.Technologies.map((tech) => (
                                    <li key={tech} className=" px-2 py-1 ring-2 rounded-2xl text-white mr-2 mb-2">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h3 className=" text-base font-semibold mb-2">Area</h3>
                        <ul className="flex flex-wrap">
                            {project.Area.map((area) => (
                                <li key={area} className=" px-2 py-1 ring-2 rounded-2xl text-white mr-2 mb-2">
                                    {area}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {seeMore ? (
                        <div className=''>
                            <div>
                                {project.ProjectLink === "" ? (<p className=' text-xs'>Project Link Not Available</p>):(<a
                                    href={project.ProjectLink || '#'}
                                    className="text-blue-500 hover:underline mr-4"
                                >
                                    Project Link
                                </a>)}
                                <a
                                    href={project.GithubLink || '#'}
                                    className="text-blue-500 hover:underline"
                                >
                                    Github Link
                                </a>
                            </div>
                            <p className="text-light font-light">{project.ProjectDescription}</p>
                            <a onClick={handleSeeMore}>See Less....</a>
                        </div>) : (
                        <a onClick={handleSeeMore}>See More....</a>
                    )}
                </div>


            </div>
        </div>

    );
};

export default ProjectCard;
