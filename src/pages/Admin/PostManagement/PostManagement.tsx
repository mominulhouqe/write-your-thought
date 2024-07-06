import React from 'react';
import { Button, Card, List, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';



const PostManagement: React.FC = () => {
    const posts = [
        { id: "1", content: "Sample Post 1" },
        { id: "2", content: "Sample Post 2" },
      ];

      
  const handleDeletePost = (postId: string) => {
    console.log("Post deleted:", postId);
  };

  const handleRestrictPost = (postId: string) => {
    console.log("Post restricted:", postId);
  };

    return (
        <Card title="Posts Management" className="shadow-lg">
            <List
                dataSource={posts}
                renderItem={item => (
                    <List.Item
                        actions={[
                            <Button icon={<EditOutlined />} onClick={() => handleRestrictPost(item.id)}>Restrict</Button>,
                            <Popconfirm title="Are you sure to delete this post?" onConfirm={() => handleDeletePost(item.id)}>
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
