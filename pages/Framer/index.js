import React, { useState } from "react";
import FramerComp from "../../components/Framer/FramerComp";
import CreateBase from "../../components/Framer/CreateBase";
import ToppingsComp from "../../components/Framer/Toppings";
import FinalPage from "../../components/Framer/FinalPage";
import Modal from "../../components/Framer/Modal";

const FramerPage = () => {
  const [toComponents, setToComponents] = useState({
    homePage: true,
    basePage: false,
    toppingsPage: false,
    finalPage: false,
  });

  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);

  const addToppings = (topping) => {
    // if the topping has not been selected add it the new toppings
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
      // if the topping has been selected we deselect it by filtering it out of the pizza array
    } else {
      // will return everything that does not match the topping
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  const addBase = (base) => {
    setPizza({ ...pizza, base: base });
  };

  return (
    // can replace this with a switch statement
    <div>
      {toComponents.homePage && (
        <FramerComp toComponents={setToComponents} pages={toComponents} />
      )}
      {toComponents.basePage && (
        <CreateBase
          toComponents={setToComponents}
          addBase={addBase}
          pages={toComponents}
          pizza={pizza}
        />
      )}
      {toComponents.toppingsPage && (
        <ToppingsComp
          toComponents={setToComponents}
          pages={toComponents}
          pizza={pizza}
          addToppings={addToppings}
        />
      )}
      {toComponents.finalPage && (
        <FinalPage
          toComponents={setToComponents}
          pizza={pizza}
          setShowModal={setShowModal}
        />
      )}
      <Modal
        toComponents={setToComponents}
        pages={toComponents}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default FramerPage;
// pass in our createbase array to createbase
