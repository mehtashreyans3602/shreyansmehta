'use client'
import { useState } from "react";
import Data from "./Data";
import ProjectCard from "./ProjectCard";

const FilterButton = ({ filter, activeFilter, onChange }) => {
    const isActive = filter === activeFilter;

    return (
        <button
            className={`px-2 py-1 rounded-full ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue`}
            onClick={() => onChange(filter)}
        >
            {filter}
        </button>
    );
};
const Project = () => {
    const [activeFilter, setActiveFilter] = useState('Best Work');
    const filteredProjects = activeFilter === 'Best Work' ? Data : Data.filter(project => project.Area.includes(activeFilter));

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };
    return (
        <div className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-blue-950 to-black">
            <div className="text-5xl text-center text-white items-center justify-center md:p-4 md:m-4 ">
                <div className="flex items-center justify-center">
                    <h1 className="p-4 border-b-4 border-blue-800 hover:border-white">Projects</h1>
                </div>
            </div>
            
            <div className="w-full m-4">
            <div className="m-4 flex md:justify-center justify-start md:space-x-4 space-x-2 overflow-scroll">
                <FilterButton filter="Best Work" activeFilter={activeFilter} onChange={handleFilterChange} />
                <FilterButton filter="FullStack" activeFilter={activeFilter} onChange={handleFilterChange} />
                <FilterButton filter="FrontEnd" activeFilter={activeFilter} onChange={handleFilterChange} />
                <FilterButton filter="BackEnd" activeFilter={activeFilter} onChange={handleFilterChange} />
                <FilterButton filter="MachineLearning" activeFilter={activeFilter} onChange={handleFilterChange} />
                <FilterButton filter="Web3" activeFilter={activeFilter} onChange={handleFilterChange} />
            </div>
            </div>
            <div className="w-full m-4">
            <div className="md:m-4 px-4 grid md:grid-flow-col grid-flow-row justify-start md:overflow-x-scroll">
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            </div>
        </div>
    )
}
export default Project;