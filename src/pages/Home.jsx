import React, { useState } from 'react';
import Header from "../components/layout/Header";
import Particle from "../components/Particle";
import Typedos from "./Typedos";
import { useTheme } from "../context/ThemeContext";
import { FaJs, FaPython, FaReact, FaTerminal, FaHtml5, FaCss3, FaGitAlt, FaNodeJs, FaDatabase, FaLinux } from "react-icons/fa";
import { BiLogoDjango } from "react-icons/bi";
import { SiMariadb, SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

export default function Home() {
  const { darkMode } = useTheme();
  const [isPaused, setIsPaused] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);

  const technologies = [
    { 
      name: "JavaScript", 
      icon: <FaJs />, 
      description: "Próximamente"
    },
    { 
      name: "Python", 
      icon: <FaPython />, 
      description: "Próximamente"
    },
    { 
      name: "React", 
      icon: <FaReact />, 
      description: "Próximamente"
    },
    { 
      name: "Mariadb", 
      icon: <SiMariadb />, 
      description: "Próximamente"
    },
    { 
      name: "HTML5", 
      icon: <FaHtml5 />, 
      description: "Próximamente"
    },
    { 
      name: "Django", 
      icon: <BiLogoDjango />, 
      description: "Próximamente"
    },
    { 
      name: "Linux", 
      icon: <FaLinux />, 
      description: "Próximamente"
    },
    { 
      name: "CSS", 
      icon: <FaCss3 />, 
      description: "Próximamente"
    },
    { 
      name: "Tailwind", 
      icon: <SiTailwindcss />, 
      description: "Próximamente"
    },
    { 
      name: "Firebase", 
      icon: <IoLogoFirebase />, 
      description: "Próximamente"
    },
    { 
      name: "Node.js", 
      icon: <FaNodeJs />, 
      description: "Próximamente"
    },
    { 
      name: "Bash", 
      icon: <FaTerminal />, 
      description: "Próximamente"
    },
    { 
      name: "Git", 
      icon: <FaGitAlt />, 
      description: "Próximamente"
    },
    { 
      name: "Database", 
      icon: <FaDatabase />, 
      description: "Próximamente"
    }
  ];
  

  const blurredBalls = [
    { top: '10%', left: '15%', size: '20rem', from: '#a8ff78', to: '#78ffd6' },
    { top: '50%', left: '60%', size: '25rem', from: '#84fab0', to: '#8fd3f4' },
    { top: '70%', left: '10%', size: '15rem', from: '#cfd9df', to: '#e2ebf0' },
  ];

  const darkModeBalls = [
    { top: '15%', left: '20%', size: '20rem', from: '#00c6ff', to: '#0072ff' },
    { top: '40%', left: '70%', size: '25rem', from: '#4facfe', to: '#00f2fe' },
    { top: '80%', left: '5%', size: '15rem', from: '#43cea2', to: '#185a9d' },
  ];

  const balls = darkMode ? darkModeBalls : blurredBalls;

  return (
    <div className={`${darkMode ? "bg-gray-900" : "bg-white"} transition-colors duration-300 min-h-screen relative overflow-hidden`}>
      <Header />
      {balls.map((ball, index) => (
        <div
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            top: ball.top,
            left: ball.left,
            width: ball.size,
            height: ball.size,
            background: `radial-gradient(circle, ${ball.from}, ${ball.to})`,
            opacity: 0.5,
          }}
        />
      ))}

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative z-10">
          <div className="text-center">
            <Particle />
            <Typedos />
            <h1 className={`text-5xl font-semibold tracking-tight ${darkMode ? "text-white" : "text-gray-900"} sm:text-7xl transition-colors duration-300`}>
              Damian agüero
            </h1>
            <p className={`mt-8 text-lg font-medium ${darkMode ? "text-gray-300" : "text-gray-500"} sm:text-xl transition-colors duration-300`}>
              I am a digital explorer, a constantly growing programmer, motivated by the passion to learn every day and to create innovative solutions that make a difference in the technological world.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/project"
                className={`rounded-md ${darkMode ? "bg-blue-600 hover:bg-blue-500" : "bg-indigo-600 hover:bg-indigo-500"} px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-300`}
              >
                Get started
              </a>
              <a
                href="/about"
                className={`text-sm font-semibold ${darkMode ? "text-gray-300" : "text-gray-900"} transition-colors duration-300`}
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="mt-16 relative tech-section">
              {selectedTech && (
                <div className={`tech-description ${
                  darkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-white border-gray-200 text-gray-600'
                }`}>
                  <h3 className={`text-lg font-bold mb-2 ${
                    darkMode ? 'text-blue-400' : 'text-indigo-600'
                  }`}>
                    {selectedTech.name}
                  </h3>
                  <p className="text-sm">
                    {selectedTech.description}
                  </p>
                </div>
              )}
              
              <div 
                className="carousel-container"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => {
                  setIsPaused(false);
                  setSelectedTech(null);
                }}
              >
                <div className="carousel-wrapper">
                  <div className={`carousel-content ${isPaused ? 'paused' : ''}`}>
                    {technologies.concat(technologies).map((technology, index) => (
                      <div 
                        key={`${index}`} 
                        className="tech-item"
                        onMouseEnter={() => setSelectedTech(technology)}
                      >
                        <div
                          className={`tech-icon ${
                            darkMode ? 'bg-gray-800 text-blue-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          {technology.icon}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}