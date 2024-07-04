
import { Card, Statistic, Row, Col } from 'antd';
import { motion } from 'framer-motion';

const followingCount = 120;
const followersCount = 180;

const FollowingFollowers = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="shadow-lg">
                <Row gutter={16}>
                    <Col span={12}>
                        <Statistic title="Following" value={followingCount} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Followers" value={followersCount} />
                    </Col>
                </Row>
            </Card>
        </motion.div>
    );
};

export default FollowingFollowers;
