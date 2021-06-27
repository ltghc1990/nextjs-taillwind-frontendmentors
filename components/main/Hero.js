import React from "react";

const Hero = ({ h1 }) => {
  return (
    <div className="max-w-screen-2xl mx-auto bg-white">
      <div className="max-w-6xl mx-auto  ">
        <div className="relative">
          <img
            src="/images/ableton/header.jpg"
            className="object-cover w-full h-screen"
          />
          <h1 className="absolute text-6xl lg:text-8xl font-bold text-red-500 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {h1}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
