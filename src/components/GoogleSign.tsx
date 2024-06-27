import React from 'react';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

interface GoogleSignInButtonProps {
  onClick: () => void; // Function to handle Google sign-in logic
  className?: string; // Optional className for custom styling
}

const GoogleSign: React.FC<GoogleSignInButtonProps> = ({ onClick, className }) => {
  return (
    <Button
      type="default"
      icon={<GoogleOutlined />}
      className={`w-full ${className}`}
      onClick={onClick}
    >
      Sign in with Google
    </Button>
  );
};

export default GoogleSign;
