
import { Card } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
    { name: 'Jan', followers: 30 },
    { name: 'Feb', followers: 45 },
    { name: 'Mar', followers: 70 },
    { name: 'Apr', followers: 100 },
    { name: 'May', followers: 130 },
    { name: 'Jun', followers: 150 },
];

const UsersGrowth = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card title="User Growth" className="shadow-lg">
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="followers" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </Card>
        </motion.div>
    );
};

export default UsersGrowth;
