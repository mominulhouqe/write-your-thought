import { Button } from 'antd';
import React from 'react';

interface ButtonProps {
  text: string;
}

const SaveButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <Button type='primary'>
      {text}
    </Button>
  );
};

export default SaveButton;
