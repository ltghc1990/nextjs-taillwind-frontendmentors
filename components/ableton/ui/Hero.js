import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center relative">
        <img src="/images/ableton/header.jpg" className="object-cover" />
        <h1 className="absolute text-6xl font-bold text-red-500 top-1/2">
          ABLETON
        </h1>
      </div>
    </div>
  );
};

export default Hero;
