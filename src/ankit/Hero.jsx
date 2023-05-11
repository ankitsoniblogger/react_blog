import React from "react";
import Email from "./Email";

const Hero = () => {
  return (
    <div className="mt-8 flex flex-col gap-4 items-center">
      <h1 className="text-4xl font-body">
        Latest Blog: Travels Guide & Stories
      </h1>
      <p className="font-text text-md">
        Subscribe to our Blog to get updated from Airlines, Travels, and
        Holidays packages offers...
      </p>
      <Email />
    </div>
  );
};

export default Hero;
