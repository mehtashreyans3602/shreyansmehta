const About = () => {
    return (
        <>
            <div className="items-center justify-center text-center bg-black ">
                <div className="text-5xl text-center text-white items-center justify-center p-4 m-4 ">
                    <div className="flex items-center justify-center">
                        <h1 className=" p-4 border-b-4 border-blue-800 hover:border-white">About</h1>
                    </div>
                </div>
                <div className="flex justify-around  items-center m-5 p-4 ">
                    <div className="aspect-square">
                        <img style={{minHeight:'100px',minWidth:'250px', Height: '100px',width:'500px' }} className="rounded-full border-8 border-blue-800 hover:border-white  m-4" src="shreyans.jpg" alt="" />

                    </div>
                    <div className=" text-start">
                        <div className="ml-10 flex max-w-3xl">
                            <p className=" text-white text-lg">As a skilled Developer,
                                I am passionate about leveraging technology to create innovative and efficient solutions.
                                With experience in developing applications utilizing frameworks such as Vue.js, Next.js, Flask and Django, I have successfully delivered complex projects.
                                As a creative problem-solver, I thrive in fast-paced, collaborative environments and am committed to delivering high-quality work.
                                With a deep desire to continuously learn and expand my knowledge,
                                I am excited to explore new opportunities that challenge me to grow and make a positive impact in the tech industry.
                                I am dedicated to staying up-to-date with the latest industry trends and technologies to ensure that my skills are always relevant and cutting-edge.
                                By combining my technical expertise, problem-solving abilities, and passion for innovation,
                                I strive to deliver solutions that exceed expectations and drive positive change.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>

        </>)
}
export default About;