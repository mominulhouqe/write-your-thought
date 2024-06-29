// src/components/CustomDrawer.tsx

import React from "react";
import { Drawer, Button, DrawerProps } from "antd";
import { Radio, RadioChangeEvent, Space } from "antd";

interface CustomDrawerProps {
  title: string;
  placement: DrawerProps["placement"];
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
  onPlacementChange: (e: RadioChangeEvent) => void;
  children: React.ReactNode;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  title,
  placement,
  open,
  onClose,
  onOpen,
  onPlacementChange,
  children,
}) => {
  return (
    <div>
      <Space>
        <Radio.Group value={placement} onChange={onPlacementChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <Button type="primary" onClick={onOpen}>
          Open
        </Button>
      </Space>
      <Drawer
        title={title}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        {children}
      </Drawer>
    </div>
  );
};

export default CustomDrawer;
