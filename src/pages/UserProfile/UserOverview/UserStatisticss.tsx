
import { Card, Statistic, Row, Col } from 'antd';
import { motion } from 'framer-motion';

const postCount = 35;
const likeCount = 250;
const commentCount = 100;

const UserStatisticss = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card title="User Statistics" className="shadow-lg">
                <Row gutter={16}>
                    <Col span={8}>
                        <Statistic title="Posts" value={postCount} />
                    </Col>
                    <Col span={8}>
                        <Statistic title="Likes" value={likeCount} />
                    </Col>
                    <Col span={8}>
                        <Statistic title="Comments" value={commentCount} />
                    </Col>
                </Row>
            </Card>
        </motion.div>
    );
};

export default UserStatisticss;
