import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";

function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode === "true") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${navColour ? "bg-gray-900 shadow-lg" : darkMode ? "bg-gray-800" : "bg-transparent backdrop-blur-md"} transition-all duration-300`}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className={`text-white ${darkMode ? 'text-gray-100' : 'text-black'} flex items-center`}>
              <h1 className={`${darkMode ? 'text-white' : 'text-black'}`}>Damian Aguero</h1>
            </Link>
          </div>
          <button onClick={() => updateExpanded(!expand)} className="block md:hidden">
            <span
              className={`block w-6 h-1 mb-1 ${expand ? "rotate-45 translate-y-2" : ""} ${darkMode ? "bg-white" : "bg-black"}`}
            ></span>
            <span
              className={`block w-6 h-1 mb-1 ${expand ? "opacity-0" : ""} ${darkMode ? "bg-white" : "bg-black"}`}
            ></span>
            <span
              className={`block w-6 h-1 ${expand ? "-rotate-45 -translate-y-2" : ""} ${darkMode ? "bg-white" : "bg-black"}`}
            ></span>
          </button>
        </div>
        <div className={`md:flex md:items-center md:justify-center md:space-x-8 ${expand ? "block" : "hidden"} mt-4 md:mt-0`}>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <Link
              to="/"
              className={`text-lg flex items-center space-x-2 py-2 ${darkMode ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'}`}
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineHome />
              <span>Home</span>
            </Link>
            <Link
              to="/about"
              className={`text-lg flex items-center space-x-2 py-2 ${darkMode ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'}`}
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineUser />
              <span>About</span>
            </Link>
            <Link
              to="/project"
              className={`text-lg flex items-center space-x-2 py-2 ${darkMode ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'}`}
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineFundProjectionScreen />
              <span>Projects</span>
            </Link>
            <Link
              to="/resume"
              className={`text-lg flex items-center space-x-2 py-2 ${darkMode ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'}`}
              onClick={() => updateExpanded(false)}
            >
              <CgFileDocument />
              <span>Resume</span>
            </Link>
            <a
              href="https://soumyajitblogs.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className={`text-lg flex items-center space-x-2 py-2 ${darkMode ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'}`}
            >
              <ImBlog />
              <span>Blogs</span>
            </a>
            <a
              href="https://github.com/Aleu79"
              target="_blank"
              className={`flex items-center space-x-2 py-2 mt-4 md:mt-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 px-4 py-2 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 ${darkMode ? 'text-white' : 'text-black'}`}
            >
              <CgGitFork />
              <AiFillStar />
              <span className="text-white">Github</span>
            </a>

            {/* Botón de cambio de modo oscuro */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`text-white py-2 px-4 mt-4 md:mt-0 rounded-full transition-all duration-300 ${darkMode ? "bg-gray-800" : "bg-transparent backdrop-blur-md hover:bg-gray-200"}`}
            >
              {darkMode ? "🌞" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
