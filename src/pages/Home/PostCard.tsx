import React, { useState } from "react";
import { Card } from "antd";
import { LikeOutlined, LikeFilled, CommentOutlined } from "@ant-design/icons";
import PostActionsMenu from "../../components/PostActionsMenu";
import CommentsSection from "../../components/CommentsSection ";
import { useGetAllPostsQuery } from "../../redux/features/post/postApi";

interface Comment {
  id: number;
  text: string;
  author: string;
}

const PostCard: React.FC = () => {
  const [likes, setLikes] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);
  const [comments, setComments] = useState<Comment[]>([]);

  const { data: posts, isLoading } = useGetAllPostsQuery({});
  

  const handleLike = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  };

  const addComment = (comment: Comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="mt-6 px-1">
      {posts?.data?.map((post) => (
        <Card
          key={post?._id}
          className="shadow-lg my-2"
          actions={[
            <span onClick={handleLike} key="like">
              {liked ? <LikeFilled /> : <LikeOutlined />} {likes}
            </span>,
            <CommentOutlined key="comment" />,
            <PostActionsMenu key="actions" />,
          ]}
        >
          <div className="flex items-center mb-4">
            <img
              className="w-10 h-10 border border-green-700 rounded-full"
              src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
              alt="Avatar"
            />
            <div className="ml-4">
              <h4 className="font-medium text-lg">Person Name</h4>
              <small className="text-gray-500">{post?.createdAt}</small>
            </div>
          </div>
          <div className="mb-3">
            <img
              className="w-full my-2 rounded-lg"
              src={post?.post_image?.url}
              alt="Post"
            />
            <p className="text-gray-700">{post?.post_description}</p>
          </div>
          <CommentsSection comments={comments} addComment={addComment} />
        </Card>
      ))}
    </div>
  );
};

export default PostCard;
