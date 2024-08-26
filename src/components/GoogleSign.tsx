/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

// interface GoogleSignInButtonProps {
//   onClick: () => void;
//   className?: string;
//   title: string;
// }

const GoogleSign: React.FC<any> = ({ onClick, className }) => {
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
