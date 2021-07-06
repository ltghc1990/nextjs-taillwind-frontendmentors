import React from "react";
import Button from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { slideToRightVariant } from "../Framer/motionVariants";

const slideTopDown = {
  initial: { y: "-100vh", opacity: 0 },
  animate: { y: 0, opacity: 1 },
};
const menuLinks = [
  { name: "Ableton", href: "/Ableton" },
  { name: "Framer", href: "/Framer" },
  { name: "test", href: "/Test" },
  { name: "Home", href: "/" },
];
// if togdropdown is false hide the dropdown
const Dropdown = ({ togDropdown, closeDropdown }) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={slideTopDown}
        initial="initial"
        animate="animate"
        exit={{ y: "-100vh" }}
        className={
          togDropdown ? "z-50 bg-red-500 h-screen w-screen absolute" : "hidden"
        }
      >
        <ul className="flex flex-col">
          {menuLinks.map((link) => {
            return (
              <Button key={link.name} link={link.href} onClick={closeDropdown}>
                {link.name}
              </Button>
            );
          })}
        </ul>
        <motion.button whileHover={{ scale: 2 }} className="btn">
          Choose your toppings!
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Dropdown;
