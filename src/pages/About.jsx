import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Loading from '../components/Loading';

function About() {
  const { darkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <section
      className={`transition-colors duration-300 py-16 px-6 ${
        darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-800'
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <div className="lg:w-1/2">
          <h2
            className={`text-4xl font-bold mb-6 transition-colors duration-300 ${
              darkMode ? 'text-blue-400' : 'text-indigo-600'
            }`}
          >
            About Me
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            👋🏽 Hello, I'm Damian Agüero, a passionate programmer from Buenos Aires, Argentina.
            I recently finished my studies at Technical School No. 1, where I discovered my love
            for technology and programming. Now I am taking the next step in my professional path,
            studying Systems Engineering at the National Technological University (UTN), with the
            dream of building a career that combines innovation and development.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            🧳 My goal is to grow as a professional in the world of technology and programming,
            constantly learning and applying my knowledge in projects that make a difference.
            Although I am just beginning this journey, I have spent time developing practical
            skills through personal projects and exploring the most current development tools.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            💕 What excites me most about being a programmer is the possibility of solving complex
            problems and creating solutions that positively impact people. I love the creative
            process behind code and the way it can transform ideas into concrete realities.
            Additionally, I enjoy collaborating with others to add value and learn as a team.
          </p>
          <p className="text-lg leading-relaxed">
            ⭐️ In short, I am a programmer in training, motivated by innovation, continuous
            learning and the desire to leave a positive mark on the world through technology.
            Feel free to explore my projects and learn more about my path!
          </p>
          <div className="mt-6">
            <a
              href="https://github.com/Aleu79"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block rounded-md px-5 py-3 text-sm font-medium shadow-md transition-all duration-300 ${
                darkMode
                  ? 'bg-blue-600 text-white hover:bg-blue-500'
                  : 'bg-indigo-600 text-white hover:bg-indigo-500'
              }`}
            >
              Explore My Projects
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 flex items-center justify-center">
          {isLoading && <Loading />}
          <img
            src="https://via.placeholder.com/500"
            alt="Damian Aguero"
            className={`rounded-lg shadow-lg max-w-full h-auto ${isLoading ? 'hidden' : ''}`}
            onLoad={handleImageLoad}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
