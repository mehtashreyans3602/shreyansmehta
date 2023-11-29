import Navbar from "@/components/Navbar"
import Base from "@/components/Base"
import About from "@/components/About"
import Project from "@/components/Project"
import Contact from "@/components/Contact"
export default function Home() {
  return (
    <div className="bg-black h-100">
      <Navbar/>
      <Base/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  )
}
