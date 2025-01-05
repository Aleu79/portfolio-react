import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";

const theme = {
  light: {
    background: "bg-slate-100/70 backdrop-blur-md",
    text: "text-gray-800",
    hoverText: "hover:text-blue-600",
    hamburger: "bg-gray-800",
    toggleButton: "bg-gray-300/50 text-gray-800 hover:bg-gray-400/50 backdrop-blur-md"
  },
  dark: {
    background: "bg-gray-900/95",
    text: "text-gray-300",
    hoverText: "hover:text-blue-400",
    hamburger: "bg-gray-300",
    toggleButton: "bg-gray-800 text-gray-300 hover:bg-gray-700"
  }
};

function Header() {
  const [expand, updateExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const currentTheme = darkMode ? theme.dark : theme.light;

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode === "true") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const handleDarkModeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  const linkClasses = `text-lg flex items-center space-x-2 py-1 ${currentTheme.text} ${currentTheme.hoverText}`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-2 pt-2 transition-transform duration-300 ${
        show ? "transform-none" : "-translate-y-full"
      }`}
    >
      <div className={`rounded-md mx-auto max-w-7xl ${currentTheme.background} transition-all duration-300`}>
        <div className="max-w-screen-xl mx-auto px-3 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center md:hidden">
              <span className={`text-lg font-medium ${currentTheme.text}`}>
                Damian Aguero
              </span>
            </div>
            <button onClick={() => updateExpanded(!expand)} className="block md:hidden">
              <span
                className={`block w-6 h-1 mb-1 ${expand ? "rotate-45 translate-y-2" : ""} ${currentTheme.hamburger}`}
              ></span>
              <span
                className={`block w-6 h-1 mb-1 ${expand ? "opacity-0" : ""} ${currentTheme.hamburger}`}
              ></span>
              <span
                className={`block w-6 h-1 ${expand ? "-rotate-45 -translate-y-2" : ""} ${currentTheme.hamburger}`}
              ></span>
            </button>
          </div>
          <div className={`md:flex md:items-center md:justify-center md:space-x-6 ${expand ? "block" : "hidden"} mt-4 md:mt-0`}>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <Link to="/" className={linkClasses} onClick={() => updateExpanded(false)}>
                <AiOutlineHome />
                <span>Home</span>
              </Link>
              <Link to="/about" className={linkClasses} onClick={() => updateExpanded(false)}>
                <AiOutlineUser />
                <span>About</span>
              </Link>
              <Link to="/project" className={linkClasses} onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen />
                <span>Projects</span>
              </Link>
              <Link to="/resume" className={linkClasses} onClick={() => updateExpanded(false)}>
                <CgFileDocument />
                <span>Resume</span>
              </Link>
              <a href="/re" target="_blank" rel="noreferrer" className={linkClasses}>
                <ImBlog />
                <span>Blogs</span>
              </a>
              <a
                href="https://github.com/Aleu79"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 py-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 px-3 py-1 rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 text-white"
              >
                <CgGitFork />
                <AiFillStar />
                <span>Github</span>
              </a>
              <button
                onClick={handleDarkModeToggle}
                className={`py-1 px-3 rounded-md transition-all duration-300 ${currentTheme.toggleButton}`}
              >
                {darkMode ? "🌞" : "🌙"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;