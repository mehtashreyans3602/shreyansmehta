const navbar = () => {
    const scrollWidth = 45
    const handleScroll = (event) => {

    }
    return (<>
        <div style={{ maxWidth: '100%' }} className="sticky top-0 drop-shadow-lg backdrop-blur-2xl ">
            <div className="flex justify-around p-4 items-center text-lg backdrop-blur-2xl text-white">
                <div><a href="/"><span className=" font-semibold">Shreyans Mehta</span></a></div>
                <div>
                    <div className="flex justify-between  text-white m-2 backdrop-blur-2xl ">
                        <a className="mx-2 hover:bg-gray-500 p-4 rounded " href="/">Home</a>
                        <a className="mx-2 hover:bg-gray-500 p-4 rounded " href="/">About</a>
                        <a className="mx-2 hover:bg-gray-500 p-4 rounded " href="/">Projects</a>
                        <a className="mx-2 hover:bg-gray-500 p-4 rounded " href="/">Contact</a>
                    </div>
                </div>
            </div>
            <div class="bg-blue-600 h-2 rounded-r-full hidden" style={{width:'45%'}} ></div>
        </div>
    </>)
}
export default navbar