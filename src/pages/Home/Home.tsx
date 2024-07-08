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

    className="mx-auto container mt-3 w-full flex px-1 gap-3">
      <div className="w-80 hidden md:block h-screen ">
        <div className="fixed w-80 top-[60px]">
          <UserProfile></UserProfile>
        </div>
      </div>
      <div className="flex-1 sm:max-w-lg md:mx-0 sm:mx-auto md:max-w-3xl w-full  ">
        <PostBox />
        <PostCard />
      </div>
    </motion.div>
  );
};

export default Home;
