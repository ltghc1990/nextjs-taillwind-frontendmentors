import React from "react";
import Button from "../ui/Button";

export const TwoColumn = ({ image, content }) => {
  const bg = { backgroundColor: "#B1C5FF" };
  const linkColor = { color: "#0000FF" };
  return (
    <div className="max-w-screen-2xl mx-auto bg-white">
      <div className="max-w-screen-xl w-10/12 mx-auto flex flex-col lg:flex-row lg:w-full ">
        <div className="mx-auto lg:w-1/2">
          <img src={image} className="" />
        </div>

        <div
          style={bg}
          className="flex flex-col items-center justify-center lg:w-1/2"
        >
          <div className=" w-10/12 mx-auto md:w-8/12 lg:w-6/12">
            <h3 className="py-8 lg:text-2xl font-semibold">{content.text}</h3>
            <Button
              className="self-start mb-8 lg:text-2xl font-semibold focus:outline-none transform hover:scale-110"
              style={linkColor}
              hrerf={content.link.href}
            >
              {content.link.text}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
