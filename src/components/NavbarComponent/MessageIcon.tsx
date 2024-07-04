import React from "react";
import { Badge } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

interface MessageIconProps {
  count: number;
}

const MessageIcon: React.FC<MessageIconProps> = ({ count }) => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Badge count={count}>
        <MessageOutlined className="text-2xl text-gray-700" />
      </Badge>
    </motion.div>
  );
};

export default MessageIcon;
