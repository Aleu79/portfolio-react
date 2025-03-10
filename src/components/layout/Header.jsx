import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguajeContext";
import Flag from 'react-world-flags';

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
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { darkMode, toggleDarkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage(); 

  const currentTheme = darkMode ? theme.dark : theme.light;

  const texts = {
    en: {
      home: "Home",
      about: "About",
      projects: "Projects",
      resume: "Resume",
      github: "Github",
    },
    es: {
      home: "Inicio",
      about: "Acerca de",
      projects: "Proyectos",
      resume: "Currículum",
      github: "Github",
    }
  };

  const currentTexts = texts[language];

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

  const linkClasses = `text-lg flex items-center space-x-2 py-1 ${currentTheme.text} ${currentTheme.hoverText}`;
  const activeLinkClasses = `${linkClasses} font-bold border-b-2 border-indigo-500`; 

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
              <span
                className={`text-lg font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text`}
              >
                Damián Agüero
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
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? activeLinkClasses : linkClasses} 
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome />
                <span>{currentTexts.home}</span>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? activeLinkClasses : linkClasses}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser />
                <span>{currentTexts.about}</span>
              </NavLink>
              <NavLink
                to="/project"
                className={({ isActive }) => isActive ? activeLinkClasses : linkClasses}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen />
                <span>{currentTexts.projects}</span>
              </NavLink>
              <NavLink
                to="/resume"
                className={({ isActive }) => isActive ? activeLinkClasses : linkClasses}
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument />
                <span>{currentTexts.resume}</span>
              </NavLink>
              <a
                href="https://github.com/Aleu79"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 py-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 px-3 py-1 rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 text-white"
              >
                <CgGitFork />
                <span>{currentTexts.github}</span>
              </a>
              <button
                onClick={toggleDarkMode}
                className={`py-1 px-3 rounded-md transition-all duration-300 ${currentTheme.toggleButton}`}
              >
                {darkMode ? "🌞" : "🌙"}
              </button>
              <button
                onClick={toggleLanguage}
                className={`py-1 px-3 rounded-md transition-all duration-300 ${currentTheme.toggleButton} flex items-center space-x-2`}
              >
                <Flag code={language === 'es' ? 'GB' : 'AR'} style={{ width: '20px', height: '15px' }} />
                <span className="ml-2">{language === 'es' ? 'English' : 'Español'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
