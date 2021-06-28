import React from "react";
import { motion } from "framer-motion";

const FramerComp = () => {
  return (
    <div>
      <h4>framer component</h4>
      <motion.div animate={{ scale: 0.5 }} />
    </div>
  );
};

export default FramerComp;
