import React from 'react';
import { Button } from 'antd';
import { FacebookFilled } from '@ant-design/icons';

interface FacebookSignInButtonProps {
  onClick: () => void; // Function to handle Google sign-in logic
  className?: string; // Optional className for custom styling
}

const FacebookSign: React.FC<FacebookSignInButtonProps> = ({ onClick, className }) => {
  return (
    <Button
      type="default"
      icon={<FacebookFilled />}
      className={`w-full ${className}`}
      onClick={onClick}
    >
      Sign in with Google
    </Button>
  );
};

export default FacebookSign;
