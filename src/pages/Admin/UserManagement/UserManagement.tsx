import React, { useState } from "react";
import { Button, Card, List, Popconfirm, Input, Pagination } from "antd";
import { UserAddOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { useGetAllUsersQuery } from "../../../redux/features/user/userApi";

// Define the type for a single user
interface User {
  user_id: string;
  email: string;
  name: string;
  role: string;
}



const UserManagement: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [pageValue, setPageValue] = useState(1);
  const [limitValue, setLimitValue] = useState(10);

  // Fetch users with specified query parameters
  const { data } = useGetAllUsersQuery({
    searchValue,
    pageValue,
    limitValue,
  });

  const handleDeleteUser = (userId: string) => {
    console.log("User deleted:", userId);
  };

  const handleMakeAdmin = (userId: string) => {
    console.log("User made admin:", userId);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handlePageChange = (page: number, pageSize: number) => {
    setPageValue(page);
    setLimitValue(pageSize);
  };

  return (
    <Card title="Users Management" className="shadow-lg">
      <Input.Search
        placeholder="Search users"
        value={searchValue}
        onChange={handleSearchChange}
        style={{ marginBottom: 16 }}
      />
      <List
        dataSource={data?.data}
        renderItem={(item: User) => (
          <List.Item
            actions={[
              item.role !== "admin" && (
                <Button
                  icon={<UserAddOutlined />}
                  onClick={() => handleMakeAdmin(item.user_id)}
                >
                  Make Admin
                </Button>
              ),
              <Popconfirm
                title="Are you sure to delete this user?"
                onConfirm={() => handleDeleteUser(item.user_id)}
              >
                <Button icon={<UserDeleteOutlined />} danger>
                  Delete
                </Button>
              </Popconfirm>,
            ]}
          >
            <List.Item.Meta title={`${item.email}`} description={item.name} />
          </List.Item>
        )}
      />
      <Pagination
        current={pageValue}
        pageSize={limitValue}
        onChange={handlePageChange}
        total={data?.total || 0}
        showSizeChanger
        showQuickJumper
      />
    </Card>
  );
};

export default UserManagement;
