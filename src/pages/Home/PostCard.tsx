import React, { useState } from "react";
import { Card } from "antd";
import { LikeOutlined, LikeFilled, CommentOutlined } from "@ant-design/icons";
import PostActionsMenu from "../../components/PostActionsMenu";
import CommentsSection from "../../components/CommentsSection ";
<<<<<<< HEAD
import { useGetAllPostsQuery } from "../../redux/features/post/postApi";
=======
import {
  useAddLikeCommentMutation,
  useGetAllPostsQuery,
} from "../../redux/features/post/postApi";
import { format } from "date-fns";
import { useAppSelector } from "../../hooks/hooks";
import { useUserInfo } from "../../redux/features/auth/authSlice";
>>>>>>> a64a58061c532c890b54451b8f7205d464102494

interface Comment {
  id: number;
  text: string;
  author: string;
}

const PostCard: React.FC = () => {
  const userInfo = useAppSelector(useUserInfo);
  const [comments, setComments] = useState<Comment[]>([]);

  const { data: posts, isLoading } = useGetAllPostsQuery({});
<<<<<<< HEAD
  

  const handleLike = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
=======
  const [addLikeComment, { isLoading: addLikeLoading }] =
    useAddLikeCommentMutation();

  const handleLike = async (postId: string) => {
    const data = {
      like: true,
    };
    try {
      const res = await addLikeComment({ postId, ...data }).unwrap();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
>>>>>>> a64a58061c532c890b54451b8f7205d464102494
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
<<<<<<< HEAD
            <span onClick={handleLike} key="like">
              {liked ? <LikeFilled /> : <LikeOutlined />} {likes}
=======
            <span onClick={() => handleLike(post?.post_id)} key="like">
              {post?.post_additional?.likes?.some(
                (like) => like?.user_id === userInfo?.user_id
              ) ? (
                <LikeFilled
                  disabled={addLikeLoading}
                  className="text-blue-500"
                />
              ) : (
                <LikeOutlined disabled={addLikeLoading} />
              )}{" "}
              {post?.post_additional?.likes?.length}
>>>>>>> a64a58061c532c890b54451b8f7205d464102494
            </span>,
            <CommentOutlined key="comment" />,
            <PostActionsMenu key="actions" />,
          ]}
        >
          <div className="flex items-center mb-4">
            <img
              className="w-10 h-10 border border-green-700 rounded-full"
<<<<<<< HEAD
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
=======
              src={
                post?.user_info?.avatar?.url ||
                "https://api.dicebear.com/7.x/miniavs/svg?seed=8"
              }
              alt=""
            />
            <div className="ml-4">
              <h4 className="font-medium text-lg capitalize">
                {post?.user_info?.name}
              </h4>
              <small className="text-gray-500">
                {format(new Date(post?.createdAt), "MMMM do, yy h:mm a")}
              </small>
            </div>
          </div>
          <div className="mb-3">
            {post?.post_image?.url && (
              <img
                className="w-full my-2 rounded-lg"
                src={post?.post_image?.url}
                alt=""
              />
            )}
>>>>>>> a64a58061c532c890b54451b8f7205d464102494
            <p className="text-gray-700">{post?.post_description}</p>
          </div>
          <CommentsSection comments={comments} addComment={addComment} />
        </Card>
      ))}
    </div>
  );
};

export default PostCard;
