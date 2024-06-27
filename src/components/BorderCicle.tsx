import React from 'react';
import { motion } from 'framer-motion';

const BorderCircle: React.FC = () => {
    const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
  return (
    <div className="flex items-center justify-center">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        {colors.map((color, index) => (
          <motion.circle
            key={index}
            cx="100"
            cy="100"
            r="80"
            stroke={color}
            strokeWidth="10"
            fill="transparent"
            strokeLinecap="round"
            initial={{ rotate: index * (360 / colors.length) }}
            animate={{ rotate: (index + 1) * (360 / colors.length) }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>
    </div>
  );
};

export default BorderCircle;
