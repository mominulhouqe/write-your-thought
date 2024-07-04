
import { Card, List, Avatar } from 'antd';
import { TrophyOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const achievements = [
    { id: '1', title: 'First Post', description: 'Congratulations on your first post!' },
    { id: '2', title: '100 Followers', description: 'You have reached 100 followers!' },
    { id: '3', title: 'Top Contributor', description: 'You are a top contributor this month!' },
];

const Achievements = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card title="Achievements" className="shadow-lg">
                <List
                    dataSource={achievements}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar icon={<TrophyOutlined />} />}
                                title={item.title}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </Card>
        </motion.div>
    );
};

export default Achievements;
