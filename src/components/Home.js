import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonAnimate = {
  hover: {
    scale:[1,1.1,1,1.1,1,1.1,1],
    boxShadow:"0px 0px 8px rgb(255,255,255)"
  }
}

const Home = () => {
  return (
    <motion.div className="home container"
      animate={{ }}
    >
      <motion.h2 
        animate={{ }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonAnimate}
          whileHover="hover"
          transition={{duration:0.5}}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;