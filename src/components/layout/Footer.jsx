import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; 
import { FaSquareUpwork } from 'react-icons/fa6'; 

const Footer = () => {
  const { darkMode } = useTheme();

  const blurredBalls = [
    { top: '10%', left: '15%', size: '5rem', from: '#a8ff78', to: '#78ffd6' },
    { top: '50%', left: '60%', size: '6rem', from: '#84fab0', to: '#8fd3f4' },
    { top: '70%', left: '10%', size: '4rem', from: '#cfd9df', to: '#e2ebf0' },
  ];

  const darkModeBalls = [
    { top: '15%', left: '20%', size: '5rem', from: '#00c6ff', to: '#0072ff' },
    { top: '40%', left: '70%', size: '6rem', from: '#4facfe', to: '#00f2fe' },
    { top: '80%', left: '5%', size: '4rem', from: '#43cea2', to: '#185a9d' },
  ];

  const balls = darkMode ? darkModeBalls : blurredBalls;

  return (
    <footer className="relative overflow-hidden bg-gray-900 text-white">
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
      <div
        className={`p-8 transition-colors duration-300 ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        } w-full`}
      >
        <div className="container mx-auto text-center relative z-10">
          <p className="text-sm text-gradient hover:text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text transition-all duration-500">
            &copy; {new Date().getFullYear()} Use, change, etc. this theme! It is open source 🥰
          </p>
          <div className="mt-6 flex justify-center space-x-6">
            <a
              href="https://github.com/Aleu79"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ale-ag%C3%BCero-48636a322/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~010a10b44bc6b19652"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-green-500 transition-colors duration-300 transform hover:scale-110 transition-transform duration-500"
            >
              <FaSquareUpwork />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
