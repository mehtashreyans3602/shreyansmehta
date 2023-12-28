import Base from "@/components/Base/Base";
import Header from "@/components/Header/Header";
import About from "@/components/About/AboutComponent";
import Data from "@/Data/projectData";
import ProjectCard from "@/components/Project/ProjectCard";
import ContactComponent from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
export default function Home() {
  const SortedData = [...Data].sort((a, b) => a.ProjectName.localeCompare(b.ProjectName));
  return (
    <div className="bg-black w-full overflow-scroll">
      <Header active="Home" />
      <div className="mt-28">
        <Base />
        <About />
        <div className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-blue-950 to-black w-full">
          <div className="text-5xl text-center text-white items-center justify-center md:p-4 md:m-4 w-full">
            <div className="flex items-center justify-evenly ">
              <h1 className="mt-20 p-4 border-b-4 border-blue-800 hover:border-white">Projects</h1>
            </div>
          </div>
          <div className="flex flex-col md:m-4 overflow-hidden p-2 ">
            <div><a className="p-2 ring-2 rounded-2xl text-white" href="/Project">See All </a></div>
            <div className="md:m-4 md:p-2 grid md:grid-cols-3 grid-flow-row md:gap-24 justify-start md:overflow-x-scroll">
              {SortedData.slice(0, 3).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
        <ContactComponent />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}
