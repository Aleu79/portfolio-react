import React from "react";
import { TypeAnimation } from "react-type-animation";
import content from "../assets/json/hero.json";

const Typedos = () => {
  return (
    <TypeAnimation
      sequence={[
        content.start,
        1000,
        content.middle,
        500,
        "",
        200,
        content.end,
        1000,
        content.final,
        1000,
        content.extra1,
        1000,
        content.extra2,
        1000,
        content.extra3,
        1000,
        content.extra4,
        1000,
      ]}
      speed={50}
      deletionSpeed={40}
      wrapper="span" 
      cursor={true} 
      repeat={Infinity} 
      className="text-cyan-400" 
    />
  );
};

export default Typedos;
