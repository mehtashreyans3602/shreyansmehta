import Navbar from "@/components/Navbar"
import Base from "@/components/Base"
import About from "@/components/About"
import Project from "@/components/Project"
import Contact from "@/components/Contact"
export default function Home() {
  return (
    <div className="bg-black w-full overflow-scroll">
      <Navbar />
      <div className="mt-28">
        <Base />
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  )
}
