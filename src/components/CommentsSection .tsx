import React, { useState, ChangeEvent } from "react";
import { Input, Button, List, message } from "antd";
import { CommentOutlined } from "@ant-design/icons";

interface Comment {
  id: number;
  text: string;
  author: string;
  postId: string;
}

interface CommentsSectionProps {
  comments: Comment[];
  addComment: (comment: Comment) => void;
  showInput: boolean;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({
  comments,
  addComment,
  showInput,
}) => {
  const [commentText, setCommentText] = useState<string>("");
  const [showAllComments, setShowAllComments] = useState<boolean>(false);

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      const newComment: Comment = {
        id: comments.length + 1,
        text: commentText,
        author: "Current User", // You might want to replace this with actual user data
        postId: comments.length > 0 ? comments[0].postId : "", // Assume all comments have the same postId
      };
      addComment(newComment);
      setCommentText("");
      message.success("Comment added");
    } else {
      message.error("Comment cannot be empty");
    }
  };

  const toggleShowAllComments = () => {
    setShowAllComments(!showAllComments);
  };

  const commentsToShow = showAllComments ? comments : comments.slice(0, 1);

  return (
    <div>
      {showInput && (
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
      )}
      {comments.length > 0 && (
        <List
          className="mt-2 px-4 font-medium"
          header={`${comments.length} ${
            comments.length === 1 ? "Comment" : "Comments"
          }`}
          dataSource={commentsToShow}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <img
                    className="w-8 h-8 border border-blue-500 rounded-full"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    alt="Avatar"
                  />
                }
                title={item.author}
                description={item.text}
              />
            </List.Item>
          )}
        />
      )}
      {comments.length > 1 && (
        <Button type="link" className="px-4" onClick={toggleShowAllComments}>
          {showAllComments ? "Show Less" : "See More"}
        </Button>
      )}
    </div>
  );
};

export default CommentsSection;
