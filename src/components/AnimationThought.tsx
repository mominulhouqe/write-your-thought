import React from 'react';
import { motion } from 'framer-motion';

const AnimationThought: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="100"
        height="100"
        className="relative"
      >
        {/* Thought bubble */}
        <motion.path
          d="M49.875,0C22.32,0,0,19.85,0,44.406c0,10.82,4.62,20.67,12.27,28.132c-1.128,4.38-2.296,8.808-3.38,13.176c-3.848,13.238,1.972,19.598,7.68,23.754c0.808,0.688,1.82,1.184,3.02,1.468C22.05,98.938,35.208,100,49.875,100c27.555,0,49.875-19.85,49.875-44.406S77.43,0,49.875,0z"
          fill="#fff"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        {/* Thought dots */}
        <motion.circle
          cx="50"
          cy="23"
          r="2"
          fill="#fff"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
        <motion.circle
          cx="60"
          cy="30"
          r="2"
          fill="#fff"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        <motion.circle
          cx="45"
          cy="40"
          r="2"
          fill="#fff"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        />
        {/* Thought lines */}
        <motion.rect
          x="30"
          y="50"
          width="40"
          height="2"
          fill="#000"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        />
        <motion.rect
          x="32"
          y="55"
          width="36"
          height="2"
          fill="#fff"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        />
      </svg>
    </div>
  );
};

export default AnimationThought;
