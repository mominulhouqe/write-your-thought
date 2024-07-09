
import { Card, List } from 'antd';
import { motion } from 'framer-motion';

const adminActionsData = [
    { action: 'Deleted Post', count: 10 },
    { action: 'Restricted Post', count: 5 },
    { action: 'Deleted User', count: 3 },
    { action: 'Made User Admin', count: 2 },
];

const AdminActions = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card title="Admin Actions" className="shadow-lg">
                <List
                    dataSource={adminActionsData}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={item.action}
                                description={`Count: ${item.count}`}
                            />
                        </List.Item>
                    )}
                />
            </Card>
        </motion.div>
    );
};

export default AdminActions;
