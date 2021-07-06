import React, { useState } from "react";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
const Layout = (props) => {
  const [togDropdown, setTogDropdown] = useState(false);

  const closeDropdown = () => {
    setTogDropdown(false);
  };

  const toggleDropdown = () => {
    setTogDropdown(!togDropdown);
  };

  return (
    <div className="relative border-4 h-screen">
      <Navbar togDropdown={togDropdown} toggleDropdown={toggleDropdown} />
      <Dropdown togDropdown={togDropdown} closeDropdown={closeDropdown} />
      {props.children}
    </div>
  );
};

export default Layout;
