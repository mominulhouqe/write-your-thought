
import { Card, List } from 'antd';
import { motion } from 'framer-motion';

const notifications = [
    { message: 'You have a new friend request', timestamp: '1 hour ago' },
    { message: 'Your post received a new comment', timestamp: '3 hours ago' },
    { message: 'You have a new follower', timestamp: '5 hours ago' },
];

const Notifications = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card title="Notifications" className="shadow-lg">
                <List
                    dataSource={notifications}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={item.message}
                                description={item.timestamp}
                            />
                        </List.Item>
                    )}
                />
            </Card>
        </motion.div>
    );
};

export default Notifications;
