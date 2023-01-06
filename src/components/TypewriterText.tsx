import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterText = ({ text }) => {
  return (
    <Typewriter
      options={{
        strings: text,
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypewriterText;
