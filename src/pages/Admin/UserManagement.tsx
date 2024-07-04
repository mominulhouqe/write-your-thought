import React from 'react';
import { Button, Card, List, Popconfirm } from 'antd';
import { UserAddOutlined, UserDeleteOutlined } from '@ant-design/icons';

interface UserManagementProps {
    users: { id: string, name: string }[];
    onDeleteUser: (userId: string) => void;
    onMakeAdmin: (userId: string) => void;
}

const UserManagement: React.FC<UserManagementProps> = ({ users, onDeleteUser, onMakeAdmin }) => {
    return (
        <Card title="Users Management" className="shadow-lg">
            <List
                dataSource={users}
                renderItem={item => (
                    <List.Item
                        actions={[
                            <Button icon={<UserAddOutlined />} onClick={() => onMakeAdmin(item.id)}>Make Admin</Button>,
                            <Popconfirm title="Are you sure to delete this user?" onConfirm={() => onDeleteUser(item.id)}>
                                <Button icon={<UserDeleteOutlined />} danger>Delete</Button>
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
