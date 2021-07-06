import React from "react";
import Button from "../ui/Button";
// togDropdown value need for the close X
const Navbar = ({ togDropdown, toggleDropdown }) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center justify-between flex-grow md:flex-grow-0">
          <div>
            <Button className="md:hidden" onClick={toggleDropdown}>
              MENU
            </Button>
            <Button className="btn" link="/">
              Home
            </Button>
          </div>
          {togDropdown && (
            <Button className="btn" onClick={toggleDropdown}>
              X
            </Button>
          )}
        </div>
        <div className="hidden md:flex items-center">
          <div>
            <Button
              className="btn bg-yellow-300 text-gray-500"
              link="/StatsCard"
            >
              Stats Card Page
            </Button>
          </div>
          <div>
            <Button className="btn bg-blue-500 text-gray-100" link="/Faqs">
              Faqs Page
            </Button>
          </div>
          <div>
            <Button className="btn bg-red-500 text-gray-100" link="/Ableton">
              Ableton Page
            </Button>
          </div>
          <div>
            <Button className="btn bg-green-500 text-gray-100" link="/Framer">
              Framer Page
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
