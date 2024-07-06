/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Switch, Button, Card, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const followerGrowthData = [
  { month: 'Jan', followers: 50 },
  { month: 'Feb', followers: 80 },
  { month: 'Mar', followers: 120 },
  { month: 'Apr', followers: 150 },
  { month: 'May', followers: 200 },
  { month: 'Jun', followers: 250 },
];

interface TabContentProps {
  type: string;
  posts?: any[];
  settings?: any;
  followers?: any;
  engagement?: any;
}

const TabContent: React.FC<TabContentProps> = ({ type, posts, settings }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  if (type === 'overview') {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-blue-600">Achievements</h2>
        <p className="text-gray-700 mt-2">Completed 100+ Projects</p>
      </div>
    );
  }

  if (type === 'posts') {
    return (
      <div>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <motion.div
              key={post.id}
              className="mb-4 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-800">{post.content}</p>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-600">No posts available.</p>
        )}
      </div>
    );
  }

  if (type === 'settings') {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Settings</h2>
        <div className="mb-4">
          <Link to="/profile-setting">
            <Button type="primary">Profile Setting</Button>
          </Link>
        </div>
        <div className="mb-4">
          <p className="text-gray-800">Dark Mode</p>
          <Switch checked={settings?.darkMode} onChange={() => {}} />
        </div>
        <div className="mb-4">
          <p className="text-gray-800">
            Notifications: {settings?.notifications ? 'Enabled' : 'Disabled'}
          </p>
          <Switch checked={settings?.notifications} onChange={(_checked) => {}} />
        </div>
        <div className="mb-4">
          <p className="text-gray-800">Privacy Settings</p>
          <Switch checked={settings?.privacy} onChange={(_checked) => {}} />
        </div>
      </div>
    );
  }

  if (type === 'followers') {
    return (
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card title="Follower Growth" className="shadow-lg mb-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={followerGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="followers" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
        <div className="text-center mb-4">
          <Button type={isFollowing ? 'danger' : 'primary'} onClick={toggleFollow}>
            {isFollowing ? 'Unfollow' : 'Follow'}
          </Button>
        </div>
      </div>
    );
  }

  if (type === 'engagement') {
    return (
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card title="Engagement Metrics" className="shadow-lg">
            <Row gutter={16}>
              <Col span={8}>
                <Statistic title="Total Likes" value={450} />
              </Col>
              <Col span={8}>
                <Statistic title="Total Comments" value={220} />
              </Col>
              <Col span={8}>
                <Statistic title="Total Shares" value={100} />
              </Col>
            </Row>
          </Card>
        </motion.div>
      </div>
    );
  }

  return null;
};

export default TabContent;
