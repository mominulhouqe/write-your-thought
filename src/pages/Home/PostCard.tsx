import React, { useState } from "react";
import { Card } from "antd";
import { LikeOutlined, LikeFilled, CommentOutlined } from "@ant-design/icons";
import PostActionsMenu from "../../components/PostActionsMenu";

import {
  useAddLikeCommentMutation,
  useGetAllPostsQuery,
} from "../../redux/features/post/postApi";
import { format } from "date-fns";
import { useAppSelector } from "../../hooks/hooks";
import { useUserInfo } from "../../redux/features/auth/authSlice";
import CommentsSection from "../../components/CommentsSection ";



interface Comment {
  id: number;
  text: string;
  author: string;
}

interface Post {
  _id: string;
  post_id: string;
  createdAt: string;
  post_description: string;
  post_image?: { url: string };
  post_additional?: { likes: { user_id: string }[] };
  user_info?: { avatar?: { url: string }; name: string };
}

const PostCard: React.FC = () => {
  const userInfo = useAppSelector(useUserInfo);
  const [comments, setComments] = useState<Comment[]>([]);

  const { data: posts, } = useGetAllPostsQuery({});
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
  };

  const addComment = (comment: Comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="mt-6 px-1">
      {posts?.data?.map((post: Post) => (
        <Card
          key={post?._id}
          className="shadow-lg my-2"
          actions={[
            <span onClick={() => handleLike(post?.post_id)} key="like">
              {post?.post_additional?.likes?.some(
                (like: { user_id: string | undefined }) => like?.user_id === userInfo?.user_id
              ) ? (
                <LikeFilled
                  disabled={addLikeLoading}
                  className="text-blue-500"
                />
              ) : (
                <LikeOutlined disabled={addLikeLoading} />
              )}{" "}
              {post?.post_additional?.likes?.length}
            </span>,
            <CommentOutlined key="comment" />,
            <PostActionsMenu key="actions" postId={post?.post_id} />,
          ]}
        >
          <div className="flex items-center mb-4">
            <img
              className="w-10 h-10 border border-green-700 rounded-full"
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
            <p className="text-gray-700">{post?.post_description}</p>
          </div>
          <CommentsSection comments={comments} addComment={addComment} />
        </Card>
      ))}
    </div>
  );
};

export default PostCard;
