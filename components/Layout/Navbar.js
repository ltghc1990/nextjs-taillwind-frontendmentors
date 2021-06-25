import React from "react";
import Button from "../ui/Button";

const Navbar = () => {
  return (
    <div className="flex items-center space-x-4">
      <div>
        <Button className="btn" link="/">
          Home
        </Button>
      </div>
      <div className="flex items-center">
        <div>
          <Button className="btn bg-yellow-300 text-gray-500" link="/StatsCard">
            Stats Card Page
          </Button>
        </div>
        <div>
          <Button className="btn bg-red-500 text-gray-100" link="/Faqs">
            Faqs Page
          </Button>
        </div>
        <div>
          <Button className="btn bg-red-500 text-gray-100" link="/Ableton">
            Ableton Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
