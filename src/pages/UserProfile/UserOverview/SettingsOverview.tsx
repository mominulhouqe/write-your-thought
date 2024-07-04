
import { Card, List } from 'antd';
import { motion } from 'framer-motion';

const settings = [
    { title: 'Privacy', description: 'Manage your privacy settings' },
    { title: 'Notifications', description: 'Update your notification preferences' },
    { title: 'Account Info', description: 'Update your account details' },
];

const SettingsOverview = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card title="Settings Overview" className="shadow-lg">
                <List
                    itemLayout="vertical"
                    dataSource={settings}
                    renderItem={item => (
                        <List.Item key={item.title}>
                            <List.Item.Meta
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

export default SettingsOverview;
