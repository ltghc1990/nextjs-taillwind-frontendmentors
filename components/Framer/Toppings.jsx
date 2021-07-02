import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideToRightVariant, visibilityVariant } from "./motionVariants";

const ToppingsComp = ({ toComponents, pages, pizza, addToppings }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onion",
    "olivers",
    "extra cheese",
    "tomatoes",
  ];
  const chooseToppings = (topping) => {
    addToppings(topping);
  };

  const toppingLists = toppings.map((topping) => {
    let selected = pizza.toppings.includes(topping) ? "font-bold" : "font-base";
    return (
      <motion.li
        // originX makes it so that it does not translate past the starting left position
        whileHover={{ scale: 1.3, originX: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        key={topping}
        onClick={() => chooseToppings(topping)}
        className={`${selected} cursor-pointer `}
      >
        {topping}
      </motion.li>
    );
  });

  const onClickHandler = () => {
    toComponents({
      ...pages,
      toppingsPage: false,
      finalPage: true,
    });
  };

  return (
    <motion.div
      variants={visibilityVariant}
      initial="initial"
      animate="animate"
      className="h-screen bg-yellow-200 flex items-center justify-center text-3xl text-gray-900"
    >
      <motion.div
        variants={slideToRightVariant}
        className="flex flex-col items-center"
      >
        <div>
          <h3>Step 2: Choose Toppings</h3>
          <ul>{toppingLists}</ul>
          <button className="btn" onClick={onClickHandler}>
            Order Pizza!
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ToppingsComp;
