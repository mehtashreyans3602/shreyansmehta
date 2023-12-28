'use client'
import { useState } from "react";
import Data from "@/Data/projectData";
import ProjectCard from "./ProjectCard";

const FilterButton = ({ filter, activeFilter, onChange }) => {
    const isActive = filter === activeFilter;

    return (
        <div className="p-2">
            <button
            className={`p-2 text-sm rounded-full text-white ${isActive ? 'bg-blue-500 ' : 'ring-2'} hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue`}
            onClick={() => onChange(filter)}
        >
            {filter}
        </button>
        </div>
    );
};
const ProjectComponent = () => {
    const SortedData = [...Data].sort((a, b) => a.ProjectName.localeCompare(b.ProjectName));

    const [activeFilter, setActiveFilter] = useState('Best-Work');
    const filteredProjects = activeFilter === 'Best-Work' ? SortedData : SortedData.filter(project => project.Area.includes(activeFilter));

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };
    return (
        <div className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-blue-950 to-black w-full">
            <div className="text-5xl text-center text-white items-center justify-center md:p-4 md:m-4 ">
                <div className="flex items-center justify-center">
                    <h1 className="mt-20 p-4 border-b-4 border-blue-800 hover:border-white">Projects</h1>
                </div>
            </div>

            <div className="w-full m-4">
                <div className="flex md:justify-center justify-start md:space-x-4 space-x-2 overflow-scroll">
                    <FilterButton filter="Best-Work" activeFilter={activeFilter} onChange={handleFilterChange} />
                    <FilterButton filter="FullStack" activeFilter={activeFilter} onChange={handleFilterChange} />
                    <FilterButton filter="FrontEnd" activeFilter={activeFilter} onChange={handleFilterChange} />
                    <FilterButton filter="BackEnd" activeFilter={activeFilter} onChange={handleFilterChange} />
                    <FilterButton filter="MachineLearning" activeFilter={activeFilter} onChange={handleFilterChange} />
                    <FilterButton filter="Web3" activeFilter={activeFilter} onChange={handleFilterChange} />
                </div>
            </div>
            <div className="md:m-4 overflow-hidden">
                <div className="md:m-4 md:px-4 grid md:grid-cols-3 grid-flow-row md:gap-24 justify-start md:overflow-x-scroll">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ProjectComponent;