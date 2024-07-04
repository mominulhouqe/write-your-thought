import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const SearchBar: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Input
        placeholder="Search..."
        prefix={<SearchOutlined />}
        className="w-full"
      />
    </motion.div>
  );
};

export default SearchBar;
