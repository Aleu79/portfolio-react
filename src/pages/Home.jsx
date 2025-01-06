import React, { useState } from 'react';
import Header from "../components/layout/Header";
import Particle from "../components/Particle";
import Typedos from "./Typedos";
import { useTheme } from "../context/ThemeContext";
import { FaJs, FaPython, FaReact, FaTerminal, FaHtml5, FaCss3, FaGitAlt, FaNodeJs, FaDatabase, FaLinux } from "react-icons/fa";
import { BiLogoDjango } from "react-icons/bi";
import { SiMariadb, SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { useLanguage } from '../context/LanguajeContext';

const texts = {
  en: {
    intro: "I am a digital explorer, a constantly growing programmer, motivated by the passion to learn every day and to create innovative solutions that make a difference in the technological world.",
    getStarted: "Get started",
    learnMore: "Learn more",
    techDescriptions: {
      JavaScript: "I have nearly 2 years of experience with JavaScript, the language I am most proficient in and the one I've used to develop numerous dynamic and functional projects.",
      Python: "I have 9 months of hands-on experience with Python, working on versatile and efficient solutions for various scenarios.",
      React: "With 11 months of experience in React, I have designed and implemented modern, highly interactive user interfaces.",
      MariaDB: "I have 4 months of practical experience with MariaDB, efficiently managing databases to support robust applications.",
      HTML5: "With 2 years of experience in HTML5, I have built semantic and optimized structures for high-performance web projects.",
      Django: "With 8 months of experience in Django, I have developed solid and scalable web applications focused on speed and security.",
      Linux: "I have been using Linux for over a year and a half, starting with Ubuntu, moving to Arch, and currently using Debian 12, gaining deep knowledge of the Linux ecosystem.",
      CSS: "With 1 year and 3 months of experience in CSS, I have created visually appealing and responsive styles for a wide range of projects.",
      Tailwind: "With 6 months of experience in Tailwind CSS, I have designed fast and consistent interfaces with a minimalist and efficient approach.",
      Firebase: "I have used Firebase during my professional practices, integrating backend solutions such as authentication and real-time databases.",
      Node: "With 1 year of experience in Node.js, I have developed fast and scalable backend applications, optimizing server-side processes.",
      Bash: "I have 1 year of experience with Bash, automating tasks and optimizing workflows in Linux environments.",
      Git: "With over 1 and a half years of experience with Git, I efficiently manage version control, with over 60% of my progress documented on GitHub.",

    }
  },
  es: {
    intro: "Soy un explorador digital, un programador en constante crecimiento, motivado por la pasión de aprender cada día y crear soluciones innovadoras que marquen la diferencia en el mundo tecnológico.",
    getStarted: "Comienza ahora",
    learnMore: "Saber más",
    techDescriptions: {
      JavaScript: "Tengo casi 2 años de experiencia con JavaScript, el lenguaje en el que tengo más dominio y el que he usado para desarrollar numerosos proyectos dinámicos y funcionales.",
      Python: "Tengo 9 meses de experiencia práctica con Python, trabajando en soluciones versátiles y eficientes para diversos escenarios.",
      React: "Con 11 meses de experiencia en React, he diseñado e implementado interfaces de usuario modernas y altamente interactivas.",
      MariaDB: "Tengo 4 meses de experiencia práctica con MariaDB, gestionando bases de datos de manera eficiente para respaldar aplicaciones robustas.",
      HTML5: "Con 2 años de experiencia en HTML5, he creado estructuras semánticas y optimizadas para proyectos web de alto rendimiento.",
      Django: "Con 8 meses de experiencia en Django, he desarrollado aplicaciones web sólidas y escalables enfocadas en velocidad y seguridad.",
      Linux: "He estado usando Linux por más de un año y medio, comenzando con Ubuntu, luego pasando a Arch, y actualmente utilizando Debian 12, adquiriendo un profundo conocimiento del ecosistema Linux.",
      CSS: "Con 1 año y 3 meses de experiencia en CSS, he creado estilos visualmente atractivos y responsivos para una amplia variedad de proyectos.",
      Tailwind: "Con 6 meses de experiencia en Tailwind CSS, he diseñado interfaces rápidas y consistentes con un enfoque minimalista y eficiente.",
      Firebase: "He utilizado Firebase durante mis prácticas profesionales, integrando soluciones backend como autenticación y bases de datos en tiempo real.",
      Node: "Con 1 año de experiencia en Node.js, he desarrollado aplicaciones backend rápidas y escalables, optimizando los procesos del lado del servidor.",
      Bash: "Tengo 1 año de experiencia con Bash, automatizando tareas y optimizando flujos de trabajo en entornos Linux.",
      Git: "Con más de 1 año y medio de experiencia con Git, gestiono eficientemente el control de versiones, con más del 60% de mis avances documentados en GitHub.",
    }
  }
};

export default function Home() {
  const { darkMode } = useTheme();
  const [isPaused, setIsPaused] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);
  const { language, toggleLanguage } = useLanguage(); 

  const technologies = [
    { 
      name: "JavaScript", 
      icon: <FaJs />, 
      description: texts[language].techDescriptions.JavaScript
    },
    { 
      name: "Python", 
      icon: <FaPython />, 
      description: texts[language].techDescriptions.Python
    },
    { 
      name: "React", 
      icon: <FaReact />, 
      description: texts[language].techDescriptions.React
    },
    { 
      name: "MariaDB", 
      icon: <SiMariadb />, 
      description: texts[language].techDescriptions.MariaDB
    },
    { 
      name: "HTML5", 
      icon: <FaHtml5 />, 
      description: texts[language].techDescriptions.HTML5
    },
    { 
      name: "Django", 
      icon: <BiLogoDjango />, 
      description: texts[language].techDescriptions.Django
    },
    { 
      name: "Linux", 
      icon: <FaLinux />, 
      description: texts[language].techDescriptions.Linux
    },
    { 
      name: "CSS", 
      icon: <FaCss3 />, 
      description: texts[language].techDescriptions.CSS
    },
    { 
      name: "Tailwind", 
      icon: <SiTailwindcss />, 
      description: texts[language].techDescriptions.Tailwind
    },
    { 
      name: "Firebase", 
      icon: <IoLogoFirebase />, 
      description: texts[language].techDescriptions.Firebase
    },
    { 
      name: "Node.js", 
      icon: <FaNodeJs />, 
      description: texts[language].techDescriptions.Node
    },
    { 
      name: "Bash", 
      icon: <FaTerminal />, 
      description: texts[language].techDescriptions.Bash
    },
    { 
      name: "Git", 
      icon: <FaGitAlt />, 
      description: texts[language].techDescriptions.Git
    },
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
              Damián Agüero
            </h1>
            <p className={`mt-8 text-lg font-medium ${darkMode ? "text-gray-300" : "text-gray-500"} sm:text-xl transition-colors duration-300`}>
              {texts[language].intro}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/project"
                className={`rounded-md ${darkMode ? "bg-blue-600 hover:bg-blue-500" : "bg-indigo-600 hover:bg-indigo-500"} px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-300`}
              >
                {texts[language].getStarted}
              </a>
              <a
                href="/about"
                className={`text-sm font-semibold ${darkMode ? "text-gray-300" : "text-gray-900"} transition-colors duration-300`}
              >
                 {texts[language].learnMore} <span aria-hidden="true">→</span>
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
