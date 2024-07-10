import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className=" py-6 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Thought Apps. All rights reserved.
          </div>
          <div className="space-x-4">
            <a href="/privacy-policy" className="text-gray-400 hover:text-gray-200 transition duration-300">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="text-gray-400 hover:text-gray-200 transition duration-300">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
