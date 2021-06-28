import React from "react";

const Quote = ({ h4, p }) => {
  return (
    <div className="">
      <div className="max-w-screen-2xl mx-auto bg-white">
        <div className="w-10/12 mx-auto sm:9/12 md:w-8/12 lg:w-6/12">
          <h4 className="font-semibold md:text-lg lg:text-2xl py-4">{p}</h4>
          <p className="text-sm md:text-base lg:text-lg py-4">{h4}</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
