import { Card, Avatar, Tooltip, Carousel } from 'antd';
import { motion } from 'framer-motion';

const friends = [
    { name: 'Alice', avatar: 'https://via.placeholder.com/50' },
    { name: 'Bob', avatar: 'https://via.placeholder.com/50' },
    { name: 'Charlie', avatar: 'https://via.placeholder.com/50' },
    { name: 'David', avatar: 'https://via.placeholder.com/50' },
    { name: 'Eve', avatar: 'https://via.placeholder.com/50' },
    { name: 'Frank', avatar: 'https://via.placeholder.com/50' },
];

const FriendsCarousel = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          
        >
            <Card title="Friends List" className="border-0 mb-2 p-0">
           
                <Carousel
                    dots={false}
                    slidesToShow={6}
                    swipeToSlide
                    infinite
                    draggable
                    className="flex justify-center"
                >
                    {friends.map((friend, index) => (
                        <div key={index} className="flex justify-center">
                            <Tooltip title={friend.name}>
                                <Avatar src={friend.avatar} size={50} className="m-2" />
                            </Tooltip>
                        </div>
                    ))}
                </Carousel>
            </Card>
        </motion.div>
    );
};

export default FriendsCarousel;
