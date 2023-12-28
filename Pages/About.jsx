import "@/app/globals.css";
import Header from "@/components/Header/Header";
import AboutComponent from "@/components/About/AboutComponent";
import Footer from "@/components/Footer/Footer";
import TimeLine from "@/components/About/TimeLine";
const About = () => {
    return (
        <>
            <Header active="About" />
            <div className="bg-black w-full overflow-scroll">
            <div className=" mt-20">
            <AboutComponent />
            </div>
            <div>
                <TimeLine/>
            </div>
            <Footer></Footer>
            </div>
        </>
    )
};
export default About;