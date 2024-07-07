import PostCard from "../../Home/PostCard";

const PostManagement: React.FC = () => {
  return (
    <div>
      <PostCard className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 w-full" />
    </div>
  );
};

export default PostManagement;
