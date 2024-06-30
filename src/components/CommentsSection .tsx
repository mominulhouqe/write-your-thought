import { useState, ChangeEvent } from "react";
import { Input, Button, List, message } from "antd";
import { CommentOutlined } from "@ant-design/icons";
import {
  useAddCommentMutation,
  useGetSinglePostCommentQuery,
} from "../redux/features/likeComment/likeCommentApi";

const CommentsSection = ({ comments, totalComment, post }) => {
  const [commentText, setCommentText] = useState<string>("");
  const { data, isLoading: commentLoading } = useGetSinglePostCommentQuery({
    postId: post?.post_id,
    skip: !post,
  });

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
              title={<span className="capitalize">{item?.name}</span>}
              description={item?.comment}
              //todo-- add createdAt for comment date and comment user id same same current user than show delete button
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default CommentsSection;
