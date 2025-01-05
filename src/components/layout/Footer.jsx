import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer className={`p-4 mt-8 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.
        </p>
        <p className="text-sm mt-2">
          Diseñado con ❤️ por <a href="/" className="hover:underline text-blue-400">Damian Aguero</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
