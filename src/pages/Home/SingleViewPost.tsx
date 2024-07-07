/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Card, Avatar, Tooltip, message } from "antd";
import {
  LikeOutlined,
  CommentOutlined,
  LikeFilled,
  MoreOutlined,
} from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useAddLikeMutation,
  useGetSinglePostByIdQuery,
} from "../../redux/features/post/postApi";
import { useAppSelector } from "../../hooks/hooks";
import { useUserInfo } from "../../redux/features/auth/authSlice";
import PostActionsMenu from "../../components/PostActionsMenu";
import { format, isValid } from "date-fns";
import CommentsSection from "../../components/CommentsSection ";
import Loading from "../../components/Loading";
import { AddLikeResponse, HandleLikeParams } from "../types/types";

interface SingleViewPostProps {}

const SingleViewPost: React.FC<SingleViewPostProps> = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const [addLike, { isLoading: addLikeLoading }] = useAddLikeMutation();
  const userInfo = useAppSelector(useUserInfo);
  const [showComments, setShowComments] = useState<string | null>(null);

  const { data: post, isLoading: singlePostLoading } =
    useGetSinglePostByIdQuery({ postId: postId || "" }, { skip: !postId });

  const handleLike = async (postId: HandleLikeParams["postId"]) => {
    const data = { like: true };
    try {
      const res: AddLikeResponse = await addLike({ postId, ...data }).unwrap();
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

  if (singlePostLoading) {
    return <Loading className="mt-12 h-screen"></Loading>;
  }

  const postDate = new Date(post?.data?.createdAt);
  const formattedDate = isValid(postDate)
    ? format(postDate, "MMMM do, yyyy h:mm a")
    : "Invalid date";

  return (
    <div className=" px-1 max-w-3xl mx-auto">
      <Card
        className="my-4 border rounded-lg shadow-md"
        actions={[
          <span onClick={() => handleLike(post?.data?.post_id)} key="like">
            {post?.data?.post_additional?.likes?.some(
              (like: { user_id: string | undefined }) =>
                like.user_id === userInfo?.user_id
            ) ? (
              <LikeFilled disabled={addLikeLoading} className="text-blue-500" />
            ) : (
              <LikeOutlined disabled={addLikeLoading} />
            )}{" "}
            {post?.data?.post_additional?.likes?.length}
          </span>,
          <span
            key="comment"
            onClick={() => toggleComments(post?.data?.post_id)}
            className="cursor-pointer"
          >
            <CommentOutlined />{" "}
            {post?.data?.total_comment > 0 && post?.data?.total_comment}
          </span>,
          <PostActionsMenu key="actions" post={post?.data} />,
        ]}
      >
        <div className="flex items-center mb-4">
          <Link to={`/user-profile/${post?.data?.user_info?.user_id}`}>
            <Avatar
              src={
                userInfo?.avatar?.url ||
                "https://api.dicebear.com/7.x/miniavs/svg?seed=8"
              }
              size="large"
              className="border-2 border-blue-500"
            />
          </Link>
          <div className="ml-4">
            <h4 className="font-medium text-lg capitalize">{userInfo?.name}</h4>
            <Tooltip
              title={
                isValid(postDate) ? format(postDate, "PPPp") : "Invalid date"
              }
            >
              <span className="text-gray-500">{formattedDate}</span>
            </Tooltip>
          </div>
          <div className="ml-auto">
            <MoreOutlined className="text-lg" />
          </div>
        </div>
        <div>
          {post?.data?.post_image?.url && (
            <img
              className="w-full my-2 rounded-lg"
              src={post?.data?.post_image?.url}
              alt=""
            />
          )}
          <p className="text-gray-700 mb-3">{post?.data?.post_description}</p>
        </div>
        {showComments === post?.data?.post_id && (
          <CommentsSection
            post={post?.data}
            totalComment={post?.data?.total_comment}
          />
        )}
      </Card>
    </div>
  );
};

export default SingleViewPost;

