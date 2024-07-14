
import { Card } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const userGrowthData = [
    { month: 'Jan', users: 50 },
    { month: 'Feb', users: 80 },
    { month: 'Mar', users: 150 },
    { month: 'Apr', users: 200 },
    { month: 'May', users: 300 },
    { month: 'Jun', users: 400 },
];

const UserGrowth = () => {
    return (
        <Card title="User Growth" className="shadow-lg">
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={userGrowthData}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default UserGrowth;
