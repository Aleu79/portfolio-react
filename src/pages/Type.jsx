import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="text-xl text-gray-700 font-semibold mt-4">
      <Typewriter
        options={{
          strings: [
            "Software Developer",
            "Freelancer",
            "MERN Stack Developer",
            "Open Source Contributor",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
