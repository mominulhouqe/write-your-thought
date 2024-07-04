import React from "react";
import { Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

interface NotificationBadgeProps {
  count: number;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({ count }) => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Badge count={count}>
        <BellOutlined className="text-2xl text-gray-700" />
      </Badge>
    </motion.div>
  );
};

export default NotificationBadge;
