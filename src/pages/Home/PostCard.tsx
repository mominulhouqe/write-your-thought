/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Card, message, Avatar, Tooltip } from "antd";
import {
  LikeOutlined,
  LikeFilled,
  CommentOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { format } from "date-fns";
import PostActionsMenu from "../../components/PostActionsMenu";
import {
  useAddLikeMutation,
  useGetAllPostsQuery,
} from "../../redux/features/post/postApi";
import { useAppSelector } from "../../hooks/hooks";
import { useUserInfo } from "../../redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

import { Post } from "../types/types";
import CommentsSection from "../../components/CommentsSection ";

const PostCard: React.FC = () => {
  const userInfo = useAppSelector(useUserInfo);
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
    } catch (error: any) {
      if (error?.data?.message === "Key not found. Please Login First") {
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
        <Card
          key={post?._id}
          className="my-4 border rounded-lg shadow-md"
          actions={[
            <span onClick={() => handleLike(post?.post_id)} key="like">
              {post?.post_additional?.likes?.some(
                (like) => like.user_id === userInfo?.user_id
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
            <PostActionsMenu key="actions" post={post} />,
          ]}
        >
          <div className="flex items-center mb-4">
            <Link to="/user-profile">
              <Avatar
                src={
                  post?.user_info?.avatar?.url ||
                  "https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                }
                size="large"
                className="border-2 border-blue-500"
              />
            </Link>
            <div className="ml-4">
              <h4 className="font-medium text-lg capitalize">
                {post?.user_info?.name}
              </h4>
              <Tooltip title={format(new Date(post?.createdAt), "PPPp")}>
                <span className="text-gray-500">
                  {format(new Date(post?.createdAt), "MMMM do, yyyy h:mm a")}
                </span>
              </Tooltip>
            </div>
            <div className="ml-auto">
              <MoreOutlined className="text-lg" />
            </div>
          </div>
          <div onClick={() => navigate(`/post-view/${post?.post_id}`)}>
            {post?.post_image?.url && (
              <img
                className="w-full my-2 rounded-lg"
                src={post?.post_image?.url}
                alt=""
              />
            )}
            <p className="text-gray-700 mb-3">{post?.post_description}</p>
          </div>
          {showComments === post?.post_id && (
            <CommentsSection
              post={post}
              totalComment={post?.total_comment}
            />
          )}
        </Card>
      ))}
    </div>
  );
};

export default PostCard;
