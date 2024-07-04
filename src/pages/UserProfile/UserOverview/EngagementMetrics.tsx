
import { Card } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const engagementMetricsData = [
    { metric: 'Likes', value: 200 },
    { metric: 'Comments', value: 150 },
    { metric: 'Shares', value: 100 },
    { metric: 'Views', value: 300 },
];

const EngagementMetrics = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card title="Engagement Metrics" className="shadow-lg">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={engagementMetricsData}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="metric" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </Card>
        </motion.div>
    );
};

export default EngagementMetrics;
