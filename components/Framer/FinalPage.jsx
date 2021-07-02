import React, { useEffect } from "react";
import { motion, AnimatePresence, transform } from "framer-motion";
import { visibilityVariant, slideToRightVariant } from "./motionVariants";

const FinalPage = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 4000);
  }, []);
  // map through pizza toppings
  return (
    <motion.div
      variants={visibilityVariant}
      initial="initial"
      animate="animate"
      className="h-screen flex justify-center items-center bg-green-200 text-gray-900"
    >
      <motion.div
        variants={slideToRightVariant}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center justify"
      >
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-6">
            {`Thank you for your order :)`}
          </h1>
          <motion.p
            variant={visibilityVariant}
            className="mb-4"
          >{`You ordered a ${pizza.base} Pizza with :`}</motion.p>
          <motion.ul variants={visibilityVariant}>
            {pizza.toppings.map((toppings) => (
              <div key={toppings}>{toppings}</div>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FinalPage;
