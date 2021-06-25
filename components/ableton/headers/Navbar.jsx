import React, { useState } from "react";
import { links } from "./navlinks";
import Accordion from "../ui/Accordion";

import Button from "../../ui/Button";
const AbletonNavbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleAccordion = () => {
    setToggle(!toggle);
  };
  const navLinks = links.map((link) => {
    return (
      <Button className="font-semibold" href={link.link}>
        {link.name}
      </Button>
    );
  });

  return (
    <div className="border-b-2 border-gray-200 ">
      <div className="flex container mx-auto py-6 items-center">
        <p className="px-4 ">LOGO</p>

        <nav>
          <ul className="flex space-x-4 lg:space-x-6">
            {navLinks}
            <button onClick={toggleAccordion} className="text-red-400">
              More {toggle ? <span>+</span> : <span>-</span>}
            </button>
          </ul>
        </nav>
        <div className="flex justify-end border-2 flex-grow space-x-2 lg:space-x-10">
          <Button className="text-blue-500 font-bold">Try Live for Free</Button>
          <Button className="text-xs font-bold">Login or register</Button>
        </div>
      </div>
      {toggle && <Accordion />}
    </div>
  );
};

export default AbletonNavbar;
