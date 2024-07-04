import UserProfile from "../UserProfile/UserProfile";
import PostBox from "./PostBox";
import PostCard from "./PostCard";

const Home = () => {
  return (
    <div className="mx-auto container mt-3 w-full flex gap-4 px-1 ">
      <div className="w-80 hidden md:block h-screen ">
        <div className="fixed w-80 top-[60px] overflow-auto">
          <UserProfile></UserProfile>
        </div>
      </div>
      <div className="flex-1 md:max-w-3xl ">
        <PostBox />
        <PostCard />
      </div>
    </div>
  );
};

export default Home;
