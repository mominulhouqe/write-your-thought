import UserProfile from "../UserProfile/UserProfile";
import PostBox from "./PostBox";
import PostCard from "./PostCard";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}

    className="mx-auto container mt-3 w-full flex gap-4 px-1 ">
      <div className="w-80 hidden md:block h-screen ">
        <div className="fixed w-80 top-[60px]">
          <UserProfile></UserProfile>
        </div>
      </div>
      <div className="flex-1 md:max-w-3xl ">
        <PostBox />
        <PostCard />
      </div>
    </motion.div>
  );
};

export default Home;
