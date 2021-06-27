import { links } from "../ableton/headers/navlinks";
import Button from "../ui/Button";
import React, { useState } from "react";

const NavbarTest = () => {
  const [toggle, setToggle] = useState(false);

  const closeMenu = () => {
    setToggle(false);
  };
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-gray-400">
      <div>
        {/* button wrapper has 2 child, the button and the navlinks. its also relative so the navlinks can be absolute. - 100% of top means that it'll appear directly underneath the button wrapper*/}
        <div className="parent max-w-7xl mx-auto flex justify-between items-center p-2 relative border-2 border-gray-900 sm:justify-start md:px-4 lg:px-8">
          <div className="children sm:hidden">
            <button className="btn" onClick={toggleHandler}>
              MENU
            </button>
          </div>

          <div className="children border-2 border-red-500">
            <Button href="/Ableton" className="">
              LOGO
            </Button>
          </div>
          <ul
            className={`"children absolute sm:static sm:flex sm:flex-row  ${
              toggle
                ? "flex flex-col top-full border-2 border-gray-900 "
                : "hidden"
            } "`}
          >
            {links.map((link) => {
              return (
                <Button
                  href={link.link}
                  className="p-2 lg:px-4"
                  onClick={closeMenu}
                >
                  {link.name}
                </Button>
              );
            })}
          </ul>

          <div className="children flex sm:flex-grow sm:justify-end border-2 border-red-500 space-x-4">
            <Button href="">Sign Up</Button>
            <Button href="">Login In</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTest;
