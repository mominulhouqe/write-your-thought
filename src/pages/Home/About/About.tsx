
import { Card, Avatar } from 'antd';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import momin from "../../../assets/mominn-removebg-preview.png"
import saif from "../../../assets/122553771.jpg"
const { Meta } = Card;

const About = () => {
    const teamMembers = [
        { 
            name: 'Mominul Houqe', 
      
            image: momin,
            linkedin: 'https://www.linkedin.com/in/mominul-hoque-290340217/', 
            github: 'https://github.com/mominulhouqe' 
        },
        { 
            name: 'Saif Sajib', 
            image: saif, 
            linkedin: 'https://www.linkedin.com/in/sajib-hossain-5b255815a/', 
            github: 'https://github.com/sajib9090' 
        },
       
    ];

    return (
        <div className="container mx-auto p-3">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="shadow-lg">
                    <h1 className="text-4xl font-bold mb-4 text-center">About Our Social App</h1>
                    <p className="text-lg mb-4">
                        Welcome to our social app! Our platform is designed to connect people from all over the world, allowing them to share their thoughts, experiences, and ideas. Whether you want to stay in touch with friends, meet new people, or simply explore the diverse content created by our users, our app is here for you.
                    </p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-semibold mb-2">Features</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Connect with friends and family</li>
                            <li>Share photos, videos, and updates</li>
                            <li>Join and create groups based on interests</li>
                            <li>Discover trending topics and content</li>
                            <li>Private messaging and group chats</li>
                            <li>Follow your favorite content creators</li>
                            <li>Customizable profiles</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-semibold mb-2 mt-6">Our Team</h2>
                        <p className="text-lg mb-4">
                            Our team is a diverse group of passionate individuals committed to creating an inclusive and engaging social platform. We believe in the power of connection and aim to provide our users with the best experience possible.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.3, duration: 0.5 }}
                                >
                                    <Card
                                        className="shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
                                    >
                                        <img alt={member.name} src={member.image} className="w-full h-48 object-cover" />
                                        <div className="p-4">
                                            <Meta
                                                avatar={<Avatar src={member.image} />}
                                                title={<div className="text-center">{member.name}</div>}
                                              
                                            />
                                            <div className="flex justify-center mt-4 space-x-4">
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-xl text-blue-700 hover:text-blue-800">
                                                    <LinkedinOutlined />
                                                </a>
                                                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-xl text-gray-700 hover:text-gray-900">
                                                    <GithubOutlined />
                                                </a>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </Card>
            </motion.div>
        </div>
    );
};

export default About;
