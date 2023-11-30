
const Project = () => {
    return (
        <div className="items-center justify-center text-center bg-gradient-to-b from-black via-blue-950 to-black">
            <div className="text-5xl text-center text-white items-center justify-center p-4 m-4 ">
                <div className="flex items-center justify-center">
                    <h1 className=" p-4 border-b-4 border-blue-800 ">Projects</h1>
                </div>
            </div>
            <div className="flex justify-around  items-center m-5 p-4 ">
            <div className="flex md:flex-row flex-col  p-4 m-4 justify-around ">
                            <div className="p-4 m-4   text-white border-8 border-blue-800 rounded-lg hover:border-white flex flex-col items-center justify-center">
                                <div className="text-5xl font-extrabold ">10+</div>
                                <div className="text-5xl font-extralight">
                                    Projects
                                </div>
                            </div>
                            <div className="p-4 m-4   text-white border-8 border-blue-800 rounded-lg hover:border-white flex flex-col items-center justify-center">
                                <div className="text-5xl font-extrabold ">2</div>
                                <div className="text-5xl font-extralight ">
                                    Internships
                                </div>
                            </div>
                            <div className="p-4 m-4   text-white border-8 border-blue-800 rounded-lg hover:border-white flex flex-col items-center justify-center">
                                <div className="text-5xl font-extrabold ">4</div>
                                <div className="text-2xl ">
                                    Hackathons
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    )
}
export default Project;