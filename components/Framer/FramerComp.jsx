import React from "react";
import { motion } from "framer-motion";

const FramerComp = ({ toComponents, pages }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-center h-screen bg-red-200 "
    >
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: "0" }}
        className="flex flex-col text-4xl justify-content items-center"
      >
        <div className="mb-4">Welcome to Pizza Joint</div>

        <motion.button
          className="btn"
          // replaces animate, runs on hover
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            color: "#F3F4F6",
          }}
          onClick={() =>
            toComponents({
              ...pages,
              homePage: false,
              basePage: true,
            })
          }
        >
          Create Your Pizza
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default FramerComp;
// needs the tocreatebase function to route to the createBase
