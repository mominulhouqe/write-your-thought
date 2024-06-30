import React from 'react';

interface ButtonProps {
  text: string;
}

const SaveButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="px-2 py-1.5 text-xs font-medium bg-gradient-to-r from-gray-800 to-gray-700 text-white uppercase border rounded-lg hover:shadow-lg transition duration-300">
      {text}
    </button>
  );
};

export default SaveButton;
