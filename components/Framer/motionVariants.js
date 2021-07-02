import { animate } from "framer-motion";

// allows us to define the animations inside a different file.
// variants allows us to have a relation ship with the parent motion and a child motion. Example would be the child component will not run until the parent component has finished its transition

export const slideToRightVariant = {
  // the "key" is a variable that can be whatever you name
  initial: { x: "-100vw", opacity: 0 },
  // transition sits inside the animate
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      // duration wont work with spring, sets duration of animation to 5 secs
      duration: 5,
      delay: 0.1,
      // higher mass = slower, lowermass = faster
      mass: 0.4,
      // less opposing force, 0 means it'll bounce indefinietly
      damping: 8,
      // a "when" prop of afterChildren tells the component that it should run after the children motion component has completed
      when: "afterChildren",
      // every child motion component animates .4secs after one another
      staggerChildren: 0.4,
    },
  },
};

// fade the background in
export const visibilityVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

//  since the parent motion.dv initial and animate propagate down when we use variants, we dont have to declare the initial and animate props to the children. they will automatically inheirt the prop. However the variable key name has to be the same

export const hoverVariant = {
  whileHovering: { scale: 1.2, transition: { type: "spring", stiffness: 300 } },
};

// for custom animations we use keyframes
// visible is for the animate prop, does the animation on hover
export const hoverButtonVariant = {
  // visible: { x: [0, -20, 20, -20, 20, 0], transition: { delay: 2 } },
  // scale can also be an array of keyframes
  // yoyo prop inside transition cause it to repeat
  hover: {
    scale: 1.2,
    transition: { type: "spring", stiffness: 300, yoyo: Infinity },
  },
};
