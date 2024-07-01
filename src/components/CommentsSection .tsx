import { useState, ChangeEvent } from "react";
import { Input, Button, List, message } from "antd";
import { CommentOutlined } from "@ant-design/icons";
import {
  useAddCommentMutation,
  useDeleteCommentMutation,
  useGetSinglePostCommentQuery,
  useHideCommentMutation,
} from "../redux/features/likeComment/likeCommentApi";
import { formatDistanceToNow } from "date-fns";
import { useAppSelector } from "../hooks/hooks";
import { useUserInfo } from "../redux/features/auth/authSlice";

const CommentsSection = ({ totalComment, post }) => {
  const userInfo = useAppSelector(useUserInfo);
  const [commentText, setCommentText] = useState<string>("");
  const { data, isLoading: commentLoading } = useGetSinglePostCommentQuery({
    postId: post?.post_id,
    skip: !post,
  });

  const [deleteComment, { isLoading: deleteCommentLoading }] =
    useDeleteCommentMutation();
  const [hideComment, { isLoading: hideCommentLoading }] =
    useHideCommentMutation();

  const [addComment, { isLoading: commentAddLoading }] = useAddCommentMutation(
    {}
  );

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = async () => {
    if (commentText.trim()) {
      const data = {
        comment: commentText,
      };

      try {
        const res = await addComment({
          postId: post?.post_id,
          ...data,
        }).unwrap();
        message.success(res?.message || "Comment added");
        setCommentText("");
      } catch (error) {
        message.error(error?.message || error?.data?.message);
      }
    } else {
      message.error("Comment cannot be empty");
    }
  };

  const handleCommentRemove = async (commentId) => {
    if (commentId) {
      try {
        const res = await deleteComment(commentId).unwrap();
        message.success(res?.message || res?.data?.message);
      } catch (error) {
        message.error(error?.message || error?.data?.message);
      }
    }
  };

  const handleHideComment = async (commentId) => {
    if (commentId) {
      try {
        const res = await hideComment(commentId).unwrap();
        console.log(res);
        message.success(res?.message || res?.data?.message);
      } catch (error) {
        message.error(error?.message || error?.data?.message);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-center items-start mt-2">
        <Input.TextArea
          value={commentText}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
          className="rounded-e-none h-14"
        />
        <Button
          type="primary"
          onClick={handleCommentSubmit}
          className="border-none rounded-l-none h-14"
        >
          <CommentOutlined />
        </Button>
      </div>

      <List
        className="mt-2 px-4 font-medium"
        header={
          totalComment == 0
            ? 0 + " " + "Comment"
            : totalComment + " " + "Comments"
        }
        dataSource={data?.data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <img
                  className="w-8 h-8 border border-blue-500 rounded-full"
                  src={
                    item?.avatar?.url ||
                    "https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                  }
                  alt="Avatar"
                />
              }
              title={
                <span className="capitalize text-blue-900">{item?.name}</span>
              }
              description={
                <div>
                  <p>{item?.comment}</p>
                  <div className="flex items-center gap-4">
                    <p className="text-[12px]">
                      {formatDistanceToNow(new Date(item?.createdAt), {
                        addSuffix: true,
                      })}
                    </p>
                    {userInfo?.user_id == post?.createdBy && (
                      <button onClick={() => handleHideComment(item?.id)}>
                        hide
                      </button>
                    )}
                    {userInfo?.user_id == item?.user_id && (
                      <button
                        onClick={() => handleCommentRemove(item?.id)}
                        className="text-red-900"
                      >
                        delete
                      </button>
                    )}
                  </div>
                </div>
              }
              //todo-- add createdAt for comment date and comment user id same same current user than show delete button
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default CommentsSection;
