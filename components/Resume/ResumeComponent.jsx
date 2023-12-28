"use client"
import shreyansmehta from "@/Assets/PDF/Shreyans.pdf"
import { useState } from "react";
const ResumeComponent = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleClick = () => {
        setIsDownloading(true);
        fetch(shreyansmehta)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = "Shreyans.pdf";
                link.click();
                setIsDownloading(false);
            });
        
    };
    return (

        <div className="flex justify-around items-center m-5 p-4">
            
            <div className="p-4 ring-2 rounded-2xl text-white">
                <button onClick={handleClick}>Download Resume</button>
            </div>
        </div>

    )
};
export default ResumeComponent;