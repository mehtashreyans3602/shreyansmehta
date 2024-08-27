'use client'
import { useState } from "react";
import Data from "@/Data/projectData";
import ProjectCard from "../ProjectCard";

const FilterButton = ({ filter, activeFilter, onChange }) => {
    const isActive = filter === activeFilter;

    return (
        <div className="p-2">
            <button
                className={`p-2 text-sm rounded-full ${isActive ? 'bg-gray-200 ' : ''}  hover:bg-gray-200 focus:outline-none focus:shadow-outline-blue`}
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
        <div className="flex flex-col items-center justify-center text-center ">
            <div className="text-3xl text-center items-center justify-center md:p-4 md:m-4 ">
                <div className="flex items-center justify-center">
                    <h1 className="mt-20 p-4 border-b-4 hover:border-white">Projects</h1>
                </div>
            </div>

            <div className="m-4">
                <div className="flex flex-wrap md:justify-center justify-start md:space-x-4 space-x-2 overflow-auto">
                    <FilterButton filter="Best-Work" activeFilter={activeFilter} onChange={handleFilterChange} />
                    <FilterButton filter="FullStack" activeFilter={activeFilter} onChange={handleFilterChange} />
                    <FilterButton filter="FrontEnd" activeFilter={activeFilter} onChange={handleFilterChange} />
                    <FilterButton filter="BackEnd" activeFilter={activeFilter} onChange={handleFilterChange} />
                    <FilterButton filter="ML" activeFilter={activeFilter} onChange={handleFilterChange} />
                    <FilterButton filter="Web3" activeFilter={activeFilter} onChange={handleFilterChange} />
                </div>
            </div>
            <div className="md:m-4 overflow-hidden">
                <div className="md:m-4 md:px-4 flex flex-wrap justify-center md:gap-24 md:overflow-x-auto">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ProjectComponent;