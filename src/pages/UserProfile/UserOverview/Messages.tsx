
import { Card, List } from 'antd';
import { motion } from 'framer-motion';

const messages = [
    { id: '1', sender: 'Alice', content: 'Hey, how are you?', time: '2 hours ago' },
    { id: '2', sender: 'Bob', content: 'Check out this new post!', time: '5 hours ago' },
    { id: '3', sender: 'Charlie', content: 'Great job on your last post!', time: '1 day ago' },
];

const Messages = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card title="Messages" className="shadow-lg">
                <List
                    dataSource={messages}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={item.sender}
                                description={`${item.content} - ${item.time}`}
                            />
                        </List.Item>
                    )}
                />
            </Card>
        </motion.div>
    );
};

export default Messages;
