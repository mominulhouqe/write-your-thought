
import { Button, Card, List, Popconfirm } from "antd";
import { UserAddOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { useGetAllUsersQuery } from "../../../redux/features/user/userApi";
import { UserInfo } from "../../types/types";

const UserManagement: React.FC = () => {
  // todo make search value page value and limit value dynamic
  //for pagination use page value and limit value
  const { data } = useGetAllUsersQuery({
    searchValue: "",
    pageValue: "",
    limitValue: "",
  });

  const handleDeleteUser = (userId: string) => {
    console.log("User deleted:", userId);
  };

  const handleMakeAdmin = (userId: string) => {
    console.log("User made admin:", userId);
  };

  return (
    <Card title="Users Management" className="shadow-lg">
      <List
        dataSource={data?.data}
        renderItem={(item:UserInfo) => (
          <List.Item
            actions={[
              item?.role !== "admin" && (
                <Button
                  icon={<UserAddOutlined />}
                  onClick={() => handleMakeAdmin(item?.user_id)}
                >
                  Make Admin
                </Button>
              ),
              <Popconfirm
                title="Are you sure to delete this user?"
                onConfirm={() => handleDeleteUser(item?.user_id)}
              >
                <Button icon={<UserDeleteOutlined />} danger>
                  Delete
                </Button>
              </Popconfirm>,
            ]}
          >
            <List.Item.Meta title={`${item?.email}`} description={item?.name} />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default UserManagement;
