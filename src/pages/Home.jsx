import React, { useState, useEffect } from "react";
import Particle from "../components/Particle";
import Typedos from "./Typedos";

function Home() {
  const [animateWave, setAnimateWave] = useState(false);

  useEffect(() => {
    setAnimateWave(true);
    const timer = setTimeout(() => {
      setAnimateWave(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-24" id="home">
      <Particle />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap items-center">
          <div className="pt-6 text-left w-full">
            <Typedos />
          </div>
          <div className="w-full md:w-7/12">
            <h1 className="text-4xl font-bold mb-4">
              Hi There!{" "}
              <span
                role="img"
                aria-labelledby="wave"
                className={`${
                  animateWave ? "animate-wave" : ""
                }`}
              >
                👋🏻
              </span>
            </h1>
            <h1 className="text-5xl font-extrabold mb-6">
              I'M <span className="text-blue-500">Damian Aguero</span>
            </h1>
            <div className="pt-6 text-left"></div>
          </div>
          <div className="w-full md:w-5/12 flex justify-center mt-8 md:mt-0"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
