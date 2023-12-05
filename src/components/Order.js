import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Order = ({ pizza }) => {
  const [showTitle, setshowTitle] = useState(true);
  setTimeout(() =>{
    setshowTitle(false)
  }, 4000)
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass:0.6,
        damping:9,
        when: "beforeChildren",
        staggerChildren:0.3,
      
      },
    },
  };

  const childVariants = {
    hidden:{
      opacity:0
    },

    visible:{
      opacity:1
    }
  }
  return (
    <motion.div className="container order"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    >
      <AnimatePresence>
        {showTitle && (<motion.h2 exit={{y:-1000}}>Thank you for your order :)</motion.h2>)}
      </AnimatePresence>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p >
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;