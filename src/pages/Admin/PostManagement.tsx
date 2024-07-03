import React from 'react';
import { Button, Card, List, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

interface PostManagementProps {
    posts: { id: string, content: string }[];
    onDeletePost: (postId: string) => void;
    onRestrictPost: (postId: string) => void;
}

const PostManagement: React.FC<PostManagementProps> = ({ posts, onDeletePost, onRestrictPost }) => {
    return (
        <Card title="Posts Management" className="shadow-lg">
            <List
                dataSource={posts}
                renderItem={item => (
                    <List.Item
                        actions={[
                            <Button icon={<EditOutlined />} onClick={() => onRestrictPost(item.id)}>Restrict</Button>,
                            <Popconfirm title="Are you sure to delete this post?" onConfirm={() => onDeletePost(item.id)}>
                                <Button icon={<DeleteOutlined />} danger>Delete</Button>
                            </Popconfirm>,
                        ]}
                    >
                        <List.Item.Meta
                            title={`Post ID: ${item.id}`}
                            description={item.content}
                        />
                    </List.Item>
                )}
            />
        </Card>
    );
};

export default PostManagement;
