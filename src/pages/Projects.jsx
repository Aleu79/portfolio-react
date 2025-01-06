import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Icon } from '@iconify/react';

function Projects() {
  const { darkMode } = useTheme();
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const projects = [
    {
      title: 'Instant Recipes',
      description: 'A mobile app developed with React Native that allows users to search, filter, and save cooking recipes...',
      liveLink: 'https://expo.dev/artifacts/eas/ihb9DqAgtysbu9bB39i6zQ.apk',
      githubLink: 'https://github.com/Aleu79/InstantRecipes-PP',
      image: 'cv_image.jpg',
      technologies: [
        { name: 'React Native', icon: 'logos:react' },
        { name: 'Firebase', icon: 'logos:firebase' },
        { name: 'JavaScript', icon: 'logos:javascript' }
      ],
    },
    {
      title: 'ClassPlanner',
      description: 'A web platform developed with React on the front-end and Go on the back-end...',
      liveLink: 'https://classplanner.mayola.net.ar/',
      githubLink: 'https://github.com/jmayola/classplanner',
      image: '/path/to/project2-image.jpg',
      technologies: [
        { name: 'React', icon: 'logos:react' },
        { name: 'Go', icon: 'logos:go' }
      ],
    },
    {
      title: 'Task Manager',
      description: 'A web-based task management app developed with Django...',
      liveLink: 'https://gestordetareas.guticao.net.ar/',
      githubLink: 'https://github.com/Aleu79/django-project',
      image: '/path/to/project3-image.jpg',
      technologies: [
        { name: 'Django', icon: 'logos:django' },
        { name: 'Python', icon: 'logos:python' },
        { name: 'Sqlite', icon: 'logos:sqlite' }
      ],
    },
    {
      title: 'Calculator',
      description: 'A simple yet functional calculator developed in Java...',
      liveLink: '',
      githubLink: 'https://github.com/Aleu79/Calculadora',
      image: '/path/to/project3-image.jpg',
      technologies: [
        { name: 'Java', icon: 'logos:java' }
      ],
    },
    {
      title: 'Provincia Reporta',
      description: 'Provincia Reporta is a web platform developed with Flask on the back-end and React on the front-end...',
      liveLink: '',
      githubLink: [
        'https://github.com/jmayola/trabajoEscuela',
        'https://github.com/jmayola/backendEscuela'
      ],
      image: '/path/to/project3-image.jpg',
      technologies: [
        { name: 'Flask', icon: 'logos:flask' },
        { name: 'React', icon: 'logos:react' },
        { name: 'MariaDB', icon: 'logos:mariadb' }
      ],
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen py-16 px-4 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-800'
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-4xl font-bold mb-12 ${
            darkMode ? 'text-blue-400' : 'text-indigo-600'
          }`}
        >
          My projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3
                  className={`text-2xl font-semibold mb-4 ${
                    darkMode ? 'text-blue-400' : 'text-indigo-600'
                  }`}
                >
                  {project.title}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                <div className="mb-6">
                  <div className="flex flex-wrap justify-center gap-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-4 py-2 rounded-full text-sm flex items-center gap-2 justify-center"
                      >
                        <Icon icon={tech.icon} className="text-lg" />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center gap-6">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 py-3 px-6 rounded-lg shadow-lg"
                    >
                      <Icon icon="carbon:link" className="mr-2 text-lg" /> View Demo
                    </a>
                  )}
                  {project.githubLink && Array.isArray(project.githubLink) ? (
                    project.githubLink.map((link, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center text-sm font-semibold text-white bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 py-3 px-6 rounded-lg shadow-lg"
                      >
                        <Icon icon="logos:github-icon" className="mr-2 text-lg" /> GitHub
                      </a>
                    ))
                  ) : (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center text-sm font-semibold text-white bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 py-3 px-6 rounded-lg shadow-lg"
                    >
                      <Icon icon="logos:github-icon" className="mr-2 text-lg" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showScrollToTop && (
        <div
          className="fixed bottom-10 right-10 cursor-pointer animate-bounce bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg"
          onClick={scrollToTop}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default Projects;
