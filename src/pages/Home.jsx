import React from 'react';
import Header from "../components/layout/Header";
import Particle from "../components/Particle";
import Typedos from "./Typedos";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const { darkMode } = useTheme();

  return (
    <div className={`${darkMode ? "bg-gray-900" : "bg-white"} transition-colors duration-300 min-h-screen`}>
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className={`relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr ${
              darkMode
                ? 'from-[#00c6ff] to-[#0072ff] opacity-20 sm:opacity-30'
                : 'from-[#a8ff78] to-[#78ffd6] opacity-30 sm:opacity-50'
            }`}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative z-10">
          <div className="text-center">
            <Particle />
            <Typedos />
            <h1 className={`text-5xl font-semibold tracking-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            } sm:text-7xl transition-colors duration-300`}>
              Damian Aguero
            </h1>
            <p className={`mt-8 text-lg font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-500'
            } sm:text-xl transition-colors duration-300`}>
             I am a digital explorer, a constantly growing programmer, motivated by the passion to learn every day and to create innovative solutions that make a difference in the technological world.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className={`rounded-md ${
                  darkMode
                    ? 'bg-blue-600 hover:bg-blue-500'
                    : 'bg-indigo-600 hover:bg-indigo-500'
                } px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-300`}
              >
                Get started
              </a>
              <a href="#" className={`text-sm font-semibold ${
                darkMode ? 'text-gray-300' : 'text-gray-900'
              } transition-colors duration-300`}>
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
