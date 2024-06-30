import React, { useState } from "react";
import { Card, message } from "antd";
import {
  LikeOutlined,
  LikeFilled,
  CommentOutlined,
  EyeFilled,
} from "@ant-design/icons";
import PostActionsMenu from "../../components/PostActionsMenu";
import CommentsSection from "../../components/CommentsSection ";
import {
  useAddLikeMutation,
  useGetAllPostsQuery,
} from "../../redux/features/post/postApi";
import { format } from "date-fns";
import { useAppSelector } from "../../hooks/hooks";
import { useUserInfo } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

interface Comment {
  id: number;
  text: string;
  author: string;
  postId: string;
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
  const [showComments, setShowComments] = useState<string | null>(null);

  const navigate = useNavigate();

  const { data: posts, isLoading } = useGetAllPostsQuery({});
  const [addLike, { isLoading: addLikeLoading }] = useAddLikeMutation();

  const handleLike = async (postId: string) => {
    const data = {
      like: true,
    };
    try {
      const res = await addLike({ postId, ...data }).unwrap();
      console.log(res);
    } catch (error) {
      if (error?.data?.message == "Key not found. Please Login First") {
        navigate("/login");
      }
      message.error(error?.message || error?.data?.message);
    }
  };

  const toggleComments = (postId: string) => {
    setShowComments((prev) => (prev === postId ? null : postId));
  };

  return (
    <div className="mt-6 px-1">
      {posts?.data?.map((post: Post) => (
        <div key={post?._id} className="border p-4 my-3 rounded-lg shadow">
          <Card
            className="my-2 border-none"
            actions={[
              <span onClick={() => handleLike(post?.post_id)} key="like">
                {post?.post_additional?.likes?.some(
                  (like: { user_id: string | undefined }) =>
                    like.user_id === userInfo?.user_id
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
              <span
                key="comment"
                onClick={() => toggleComments(post?.post_id)}
                className="cursor-pointer"
              >
                <CommentOutlined />{" "}
                {post?.total_comment > 0 && post?.total_comment}
              </span>,
              <PostActionsMenu key="actions" postId={post?.post_id} />,
            ]}
          >
            <div className="flex items-center mb-4">
              <img
                className="w-10 h-10 border-2 border-blue-500 rounded-full"
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
          </Card>

          {showComments === post?.post_id && (
            <CommentsSection
              post={post}
              totalComment={post?.total_comment}
              comments={comments.filter(
                (comment) => comment?.postId === post?.post_id
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default PostCard;
