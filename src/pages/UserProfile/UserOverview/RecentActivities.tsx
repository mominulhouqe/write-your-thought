
import { Card, List } from 'antd';
import { motion } from 'framer-motion';

const activities = [
    { activity: 'Liked a post', timestamp: '2 hours ago' },
    { activity: 'Commented on a post', timestamp: '5 hours ago' },
    { activity: 'Shared a post', timestamp: '1 day ago' },
];

const RecentActivities = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card title="Recent Activities" className="shadow-lg">
                <List
                    dataSource={activities}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={item.activity}
                                description={item.timestamp}
                            />
                        </List.Item>
                    )}
                />
            </Card>
        </motion.div>
    );
};

export default RecentActivities;
