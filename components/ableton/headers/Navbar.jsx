import React, { useState } from "react";
import { links } from "./navlinks";
import Accordion from "../ui/Accordion";

import Button from "../../ui/Button";
const AbletonNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const toggleAccordion = () => {
    setToggle(!toggle);
  };
  const navLinks = links.map((link) => {
    return (
      <Button
        className="font-semibold"
        href={link.link}
        onClick={() => setShowMenu(!showMenu)}
      >
        {link.name}
      </Button>
    );
  });

  return (
    <div className="bg-white border-b-2 border-gray-200 max-w-screen-2xl mx-auto">
      <div className="flex max-w-screen-xl mx-auto py-6 items-center relative ">
        <div className="PARENT flex items-center space-x-4  ">
          <Button className="flex space-x-1" href="/">
            <img src="/images/Ableton/logo.svg" width="30px" />
            <img
              src="/images/Ableton/logo.svg"
              width="30px"
              className="transform rotate-90"
            />
          </Button>
          <Button className="btn md:hidden " onClick={showMenuHandler}>
            MENU
          </Button>

          <ul
            className={`"hidden md:static md:flex md:h-auto flex-col md:flex-row space-x-4 lg:space-x-6 ${
              showMenu
                ? "flex absolute top-full z-50 bg-gray-400 h-screen w-full -left-4"
                : "hidden"
            } "`}
          >
            {navLinks}
            <button onClick={toggleAccordion} className="text-red-400">
              More {toggle ? <span>-</span> : <span>+</span>}
            </button>
          </ul>
        </div>
        <div className="flex justify-end flex-grow space-x-2 lg:space-x-10">
          <Button className="text-blue-500 font-bold">Try Live for Free</Button>
          <Button className="text-xs font-bold">Login or register</Button>
        </div>
      </div>
      {toggle && <Accordion />}
    </div>
  );
};

export default AbletonNavbar;
