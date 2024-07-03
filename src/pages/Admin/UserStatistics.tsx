import React from 'react';
import { Card } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', users: 400 },
    { name: 'Feb', users: 300 },
    { name: 'Mar', users: 200 },
    { name: 'Apr', users: 278 },
    { name: 'May', users: 189 },
    { name: 'Jun', users: 239 },
    { name: 'Jul', users: 349 },
    { name: 'Aug', users: 200 },
    { name: 'Sep', users: 300 },
    { name: 'Oct', users: 278 },
    { name: 'Nov', users: 189 },
    { name: 'Dec', users: 349 },
];

const UserStatistics = () => {
    return (
        <Card title="User Statistics" className="shadow-lg">
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default UserStatistics;
