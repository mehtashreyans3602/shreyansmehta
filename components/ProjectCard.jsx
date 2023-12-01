// ProjectCard.js
import React from 'react';
import Image from 'next/image';
const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white ring-2 rounded-lg shadow-md p-6 m-4 md:w-96 w-80 text-start">
            <div className=" items-center mb-4">
                <Image
                    height={64}
                    width={64}
                    src=''
                    alt="Project Image"
                    className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                    <h2 className="text-xl font-semibold">{project.ProjectName}</h2>
                    <p className="text-gray-500">{project.ProjectDescription}</p>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                        <ul className="flex flex-wrap">
                            {project.Technologies.map((tech) => (
                                <li key={tech} className="bg-gray-200 px-2 py-1 rounded-full mr-2 mb-2">
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">Area</h3>
                        <ul className="flex flex-wrap">
                            {project.Area.map((area) => (
                                <li key={area} className="bg-gray-200 px-2 py-1 rounded-full mr-2 mb-2">
                                    {area}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>



            <div className="flex justify-center mt-4">
                <a
                    href={project.ProjectLink || '#'}
                    className="text-blue-500 hover:underline mr-4"
                >
                    Project Link
                </a>
                <a
                    href={project.GithubLink || '#'}
                    className="text-blue-500 hover:underline"
                >
                    Github Link
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
