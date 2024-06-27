import React, { useState } from "react";
import { Input, Button, List, message } from "antd";
import { CommentOutlined } from "@ant-design/icons";
const CommentsSection = ({ comments, addComment }) => {
  const [comment, setComment] = useState("");
  const [showAllComments, setShowAllComments] = useState(false);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      addComment(comment);
      setComment("");
      message.success("Comment added");
    } else {
      message.error("Comment cannot be empty");
    }
  };

  const toggleShowAllComments = () => {
    setShowAllComments(!showAllComments);
  };

  const commentsToShow = showAllComments ? comments : comments.slice(0, 2);

  return (
    <div>
      <div className="flex justify-center items-start">
        <Input.TextArea
          rows={1}
          value={comment}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
          className=" rounded-e-none"
        />
        <Button
          type="primary"
          onClick={handleCommentSubmit}
          className="border-none rounded-l-none"
        >
          <CommentOutlined />
        </Button>
      </div>
      {comments.length > 0 && (
        <List
          className="mt-4"
          header={`${comments.length} ${
            comments.length === 1 ? "Comment" : "Comments"
          }`}
          dataSource={commentsToShow}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <img
                    className="w-6 h-6 border border-green-700 rounded-full"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                    alt="Avatar"
                  />
                }
                title="Person Name"
                description={item}
              />
            </List.Item>
          )}
        />
      )}
      {comments.length > 2 && (
        <Button type="link" onClick={toggleShowAllComments}>
          {showAllComments ? "Show Less" : "See More"}
        </Button>
      )}
    </div>
  );
};

export default CommentsSection;
