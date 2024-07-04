
import { Card, List } from 'antd';
import { motion } from 'framer-motion';

const events = [
    { title: 'Event 1', date: '2024-07-10', description: 'Description for event 1' },
    { title: 'Event 2', date: '2024-08-15', description: 'Description for event 2' },
    { title: 'Event 3', date: '2024-09-20', description: 'Description for event 3' },
];

const UpcomingEvents = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card title="Upcoming Events" className="shadow-lg">
                <List
                    itemLayout="vertical"
                    dataSource={events}
                    renderItem={item => (
                        <List.Item key={item.title}>
                            <List.Item.Meta
                                title={item.title}
                                description={item.date}
                            />
                            <div>{item.description}</div>
                        </List.Item>
                    )}
                />
            </Card>
        </motion.div>
    );
};

export default UpcomingEvents;
