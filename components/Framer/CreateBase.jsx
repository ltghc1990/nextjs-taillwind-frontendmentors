import React from "react";
import { motion } from "framer-motion";
import { slideToRightVariant, hoverVariant } from "./motionVariants";

const CreateBase = ({ toComponents, pages, addBase, pizza }) => {
  const pizzaBase = ["Classic", "Thin & Crispsy", "Thick Crust"];
  const baseList = pizzaBase.map((base) => {
    //  becuase the state updates imeddialtely when we click on a the li, w can see if it has been slected or not and apply a css to all the lis

    let selected = pizza.base.includes(base) ? "font-bold" : "font-base";
    return (
      <motion.li
        key={base}
        whileHover={{ scale: 1.3, originX: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={`cursor-pointer my-1 ${selected}`}
        onClick={() => addBase(base)}
      >
        {base}
      </motion.li>
    );
  });
  //adds base to pizza and moves on to next component
  const toNextPage = () => {
    toComponents({
      ...pages,
      basePage: false,
      toppingsPage: true,
    });
  };

  return (
    <motion.div
      className="h-screen bg-gray-200 text-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: "0" }}
        className="flex flex-col items-center justify-center h-screen text-3xl"
      >
        <div>
          <h2 className="border-b-2 mb-4">Step 1: Choose Your Base</h2>
          <ul className="">{baseList}</ul>
          {pizza.base && (
            <motion.div
              variants={slideToRightVariant}
              initial="initial"
              animate="animate"
              onClick={toNextPage}
            >
              <motion.button
                variants={hoverVariant}
                whileHover="whileHovering"
                className="btn"
              >
                Choose your toppings!
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CreateBase;
