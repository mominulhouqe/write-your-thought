
import { Card } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const activeUsersData = [
    { day: 'Mon', activeUsers: 100 },
    { day: 'Tue', activeUsers: 200 },
    { day: 'Wed', activeUsers: 150 },
    { day: 'Thu', activeUsers: 250 },
    { day: 'Fri', activeUsers: 300 },
    { day: 'Sat', activeUsers: 400 },
    { day: 'Sun', activeUsers: 350 },
];

const ActiveUsers = () => {
    return (
        <Card title="Active Users" className="shadow-lg">
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={activeUsersData}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="activeUsers" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default ActiveUsers;
