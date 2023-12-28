'use client'
import Link from "next/link";
import { useState } from "react";

const Header = ({ active }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        style={{ maxWidth: "100%" }}
        className="fixed top-0 drop-shadow-lg backdrop-blur-2xl w-full z-10"
      >
        <div className="flex md:justify-around justify-between p-4 items-center text-lg backdrop-blur-2xl text-white">
          <div>
            <Link href="/">
              <span className="font-semibold">Shreyans</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex justify-between text-white m-2 backdrop-blur-2xl ">
              <Link
                href="/"
                className={`mx-2 p-4 rounded ${active === "Home" ? "bg-gray-500" : ""
                  }`}
              >
                Home
              </Link>
              <Link
                href="/About"
                className={`mx-2 p-4 rounded ${active === "About" ? "bg-gray-500" : ""
                  }`}
              >
                About
              </Link>
              <Link
                href="/Project"
                className={`mx-2 p-4 rounded ${active === "Project" ? "bg-gray-500" : ""
                  }`}
              >
                Projects
              </Link>
              <Link
                href="/Contact"
                className={`mx-2 p-4 rounded ${active === "Contact" ? "bg-gray-500" : ""
                  }`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden flex justify-end p-4">
            <button className="text-white" onClick={toggleMenu}>
              &#9776;
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black bg-opacity-100">
              <div className="flex justify-end p-4">
                <button className="text-white" onClick={toggleMenu}>
                  &times;
                </button>
              </div>
              <div className="flex flex-col items-center text-white">
                <Link
                  href="/"
                  className={`my-2 p-4 rounded ${active === "Home" ? "bg-gray-500" : ""
                    }`}
                >
                  Home
                </Link>
                <Link
                  href="/About"
                  className={`my-2 p-4 rounded ${active === "About" ? "bg-gray-500" : ""
                    }`}
                >
                  About
                </Link>
                <Link
                  href="/Project"
                  className={`my-2 p-4 rounded ${active === "Project" ? "bg-gray-500" : ""
                    }`}
                >
                  Projects
                </Link>
                <Link
                  href="/Contact"
                  className={`my-2 p-4 rounded ${active === "Contact" ? "bg-gray-500" : ""
                    }`}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
        
      </div>
    </>
  );
};

export default Header;
