import React from 'react';
import { Card } from 'antd';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const postStatsData = [
    { name: 'Posts Created', value: 400 },
    { name: 'Posts Liked', value: 300 },
    { name: 'Posts Shared', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PostStatistics = () => {
    return (
        <Card title="Post Statistics" className="shadow-lg">
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={postStatsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {postStatsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default PostStatistics;
