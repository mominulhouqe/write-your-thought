import React from "react";
import { Button, Card, List, Popconfirm } from "antd";
import { UserAddOutlined, UserDeleteOutlined } from "@ant-design/icons";

const UserManagement: React.FC = () => {
  const users = [
    { id: "1", name: "User 1" },
    { id: "2", name: "User 2" },
  ];

  const handleDeleteUser = (userId: string) => {
    console.log("User deleted:", userId);
  };

  const handleMakeAdmin = (userId: string) => {
    console.log("User made admin:", userId);
  };

  return (
    <Card title="Users Management" className="shadow-lg">
      <List
        dataSource={users}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                icon={<UserAddOutlined />}
                onClick={() => handleMakeAdmin(item.id)}
              >
                Make Admin
              </Button>,
              <Popconfirm
                title="Are you sure to delete this user?"
                onConfirm={() => handleDeleteUser(item.id)}
              >
                <Button icon={<UserDeleteOutlined />} danger>
                  Delete
                </Button>
              </Popconfirm>,
            ]}
          >
            <List.Item.Meta
              title={`User ID: ${item.id}`}
              description={item.name}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default UserManagement;
