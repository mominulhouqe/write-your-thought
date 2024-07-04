
import { Card, Avatar, List } from 'antd';
import { motion } from 'framer-motion';

const friends = [
    { name: 'Alice', avatar: 'https://via.placeholder.com/50' },
    { name: 'Bob', avatar: 'https://via.placeholder.com/50' },
    { name: 'Charlie', avatar: 'https://via.placeholder.com/50' },
];

const FriendsList = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card title="Friends List" className="shadow-lg">
                <List
                    dataSource={friends}
                    renderItem={friend => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={friend.avatar} />}
                                title={friend.name}
                            />
                        </List.Item>
                    )}
                />
            </Card>
        </motion.div>
    );
};

export default FriendsList;
