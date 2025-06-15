import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Freelancer",
          "Web Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 50,
        cursor: "|",
      }}
      onInit={(typewriter) => {
        typewriter
          .pauseFor(1000)
          .start();
      }}
    />
  );
};

export default Type; 