import React from "react";
import Typewriter from "typewriter-effect";

interface Props {
  text: Array<string>;
}

const TypewriterText = ({ text }: Props) => {
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
