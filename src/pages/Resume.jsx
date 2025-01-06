import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Loading from '../components/Loading';
import { useLanguage } from '../context/LanguajeContext';

const texts = {
  en: {
    title: "My Resume",
    downloadCV: "Download CV"
  },
  es: {
    title: "Mi Currículum",
    downloadCV: "Descargar CV"
  }
};

function Resume() {
  const { darkMode } = useTheme();
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-colors duration-300 min-h-screen py-10 px-4 ${
        darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-800'
      }`}
      style={{ paddingTop: '100px' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1
          className={`text-3xl font-bold mb-6 ${
            darkMode ? 'text-blue-400' : 'text-indigo-600'
          }`}
        >
          {texts[language].title}
        </h1>

        {loading ? (
          <Loading darkMode={darkMode} />
        ) : (
          <>
            <img
              src="/cv_image.jpg"
              alt="Resume Preview"
              className="w-full h-auto rounded-lg shadow-lg mb-6"
            />
            <a
              href="/cv.pdf"
              download
              className={`inline-block rounded-md px-5 py-3 text-sm font-medium shadow-md transition-all duration-300 ${
                darkMode
                  ? 'bg-blue-600 text-white hover:bg-blue-500'
                  : 'bg-indigo-600 text-white hover:bg-indigo-500'
              }`}
            >
              {texts[language].downloadCV}
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default Resume;
