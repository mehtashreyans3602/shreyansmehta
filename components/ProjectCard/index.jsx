"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Modal from '../Modal'; // Import the Modal component

const ProjectCard = ({ project }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='rounded-3xl m-4'>
            <div onClick={openModal} className="flex flex-col rounded-3xl shadow-md w-80 md:w-96 h-96 text-start backdrop-filter  bg-opacity-20 p-4 transition duration-300 ease-in-out hover:scale-[102%]">
                {/* Image */}
                {project.ImageURL && (
                    <Image
                        height={400}
                        width={400}
                        src={project.ImageURL}
                        alt="Project Image"
                        className="rounded-3xl object-cover mb-4"
                    />
                )}

                {/* Project Name */}
                <h2 className="text-lg font-semibold mb-2">{project.ProjectName}</h2>

                {/* Short Description */}
                <p className="text-sm text-gray-700 mb-4">
                    {project.ProjectDescription.substring(0, 100)}...
                </p>

                {/* View More Button */}
                <button
                    onClick={openModal}
                    className="px-4 py-2 bg-gray-50 text-black rounded-full hover:bg-gray-100 transition"
                >
                    View More
                </button>
            </div>

            {/* Modal for Detailed Project Information */}
            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-2xl font-semibold">{project.ProjectName}</h2>
                        {project.ImageURL && (
                            <Image
                                height={400}
                                width={400}
                                src={project.ImageURL}
                                alt="Project Image"
                                className="rounded-3xl object-cover"
                            />
                        )}
                        <p className="text-sm text-gray-700">{project.ProjectDescription}</p>

                        <div>
                            <h3 className="text-lg font-semibold">Technologies</h3>
                            <ul className="flex flex-wrap">
                                {project.Technologies.map((tech) => (
                                    <li key={tech} className="px-2 py-1 ring-2 rounded-2xl mr-2 mb-2">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold">Area</h3>
                            <ul className="flex flex-wrap">
                                {project.Area.map((area) => (
                                    <li key={area} className="px-2 py-1 ring-2 rounded-2xl mr-2 mb-2">
                                        {area}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            {project.ProjectLink && (
                                <a
                                    href={project.ProjectLink}
                                    className="text-blue-500 hover:underline mr-4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Project Link
                                </a>
                            )}
                            {project.GithubLink && (
                                <a
                                    href={project.GithubLink}
                                    className="text-blue-500 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub Link
                                </a>
                            )}
                        </div>

                        <button
                            onClick={closeModal}
                            className="self-end px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default ProjectCard;
