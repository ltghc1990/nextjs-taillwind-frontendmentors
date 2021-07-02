import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { when: "beforeChildren" } },
};

const modalvariant = {
  initial: { y: "-100vh" },
  animate: {
    y: 0,
    transition: { type: "spring", stiffness: 160, damping: 10 },
  },
  exit: { y: "-100vh", transition: { duration: 0.3, ease: "easeInOut" } },
};

const Modal = ({ showModal, toComponents, setShowModal, pages }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {/* renders the modal if the prop showModal is true */}
      {showModal && (
        <motion.div
          variants={containerVariant}
          initial="initial"
          animate="animate"
          className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <motion.div
              variants={modalvariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="max-w-lg flex flex-col items-center justify-center bg-gray-100 bg-opacity-80 text-gray-900 rounded-xl p-8"
            >
              <h4 className="text-xl mb-4">Want to make another pizza?</h4>
              <button
                className="btn transform hover:scale-110"
                onClick={() => {
                  toComponents({ ...pages, finalPage: false, homePage: true });
                  setShowModal(false);
                }}
              >
                Back to first page
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
