'use client';
import "@/app/globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProjectComponent from "@/components/Project/ProjectComponent";
const Project = () => {
    
    return (
        <>
        <Header active="Project"/>
        <div className="bg-black w-full overflow-scroll">
        <ProjectComponent/>
        
        </div>
        <Footer/>
        </>
    )
}
export default Project;