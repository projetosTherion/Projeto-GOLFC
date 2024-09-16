import React from 'react';
import { motion } from 'framer-motion';

const Accordion = ({ customClass, children, isOpen }) => {

  return (
    <div className={customClass}>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.5 }}
        style={{overflow: isOpen ? "" : "hidden"}}
      >
        <div
          className={`ease-in-out duration-500 transition-opacity
            ${isOpen ? 
              "opacity-100 delay-500" 
              : 
              "opacity-0"}`}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Accordion;