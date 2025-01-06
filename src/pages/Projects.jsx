import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Icon } from '@iconify/react';

function Projects() {
  const { darkMode } = useTheme();

  const projects = [
    {
      title: 'Instant Recipes',
      description: 'A mobile app developed with React Native that allows users to search, filter, and save cooking recipes. The app offers an intuitive and easy-to-use experience, ideal for those looking for new ideas to prepare meals and organize their favorite recipes.',
      liveLink: 'https://expo.dev/artifacts/eas/ihb9DqAgtysbu9bB39i6zQ.apk',
      githubLink: 'https://github.com/Aleu79/InstantRecipes-PP',
      image: '/path/to/project1-image.jpg',
    },
    {
      title: 'ClassPlanner',
      description: 'A web platform developed with React on the front-end and Go on the back-end, designed to connect students and teachers. Users can create classes, assign tasks, track progress, and manage their schedules efficiently. ClassPlanner facilitates interaction and organization within the educational environment.',
      liveLink: 'https://classplanner.mayola.net.ar/',
      githubLink: 'https://github.com/jmayola/classplanner',
      image: '/path/to/project2-image.jpg',
    },
    {
      title: 'Task Manager',
      description: 'A web-based task management app developed with Django that allows users to create, edit, delete, and view tasks easily. In addition to managing personal tasks, users can view others’ tasks, promoting collaboration and project tracking within teams.',
      liveLink: 'https://gestordetareas.guticao.net.ar/',
      githubLink: 'https://github.com/Aleu79/django-project',
      image: '/path/to/project3-image.jpg',
    },
    {
      title: 'Calculator',
      description: 'A simple yet functional calculator developed in Java that allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division. With an intuitive interface, this app provides a fast and efficient way to carry out daily calculations.',
      liveLink: '',
      githubLink: 'https://github.com/Aleu79/Calculadora',
      image: '/path/to/project3-image.jpg',
    },
    {
      title: 'Provincia Reporta',
      description: 'Provincia Reporta is a web platform developed with Flask on the back-end and React on the front-end, allowing students to report environmental issues in their community. These reports are reviewed and approved by teachers, who manage the cases and promote awareness and solutions. The platform facilitates collaboration between students and teachers in identifying and solving environmental problems, contributing to the community\'s well-being.',
      liveLink: '',
      githubLink: [
        'https://github.com/jmayola/trabajoEscuela',
        'https://github.com/jmayola/backendEscuela'
      ],
      image: '/path/to/project3-image.jpg',
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
    <div
      className={`min-h-screen py-16 px-4 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-800'
      }`}
    >
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
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-4xl font-bold mb-12 ${
            darkMode ? 'text-blue-400' : 'text-indigo-600'
          }`}
        >
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:scale-105 hover:rotate-3 hover:shadow-2xl duration-300"
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
                <div className="flex justify-center gap-6">
                  
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
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
                        className="inline-flex items-center justify-center text-sm font-semibold text-white bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        <Icon icon="logos:github-icon" className="mr-2 text-lg" /> GitHub
                      </a>
                    ))
                  ) : (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center text-sm font-semibold text-white bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
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
    </div>
  );
}

export default Projects;
