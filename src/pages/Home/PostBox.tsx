import React, { useState } from "react";
import { Button } from "antd";
import { useAddPostMutation } from "../../redux/features/post/postApi";
import { useAppSelector } from "../../hooks/hooks";
import { useUserInfo } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const PostBox: React.FC = () => {
  const [postText, setPostText] = useState<string>("");
  const [addPost, { isLoading }] = useAddPostMutation();
  const userInfo = useAppSelector(useUserInfo);
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!userInfo?.email) {
      navigate("login");
    }
    const data = {
      post_description: postText,
    };

    try {
      const res = await addPost(data).unwrap();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center px-1">
      <form onSubmit={handleSubmit} className="flex w-full">
        <textarea
          className="bg-gray-200 w-full h-16 p-4 rounded-lg rounded-e-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          placeholder="What's on your mind?"
          value={postText}
          onChange={handleInputChange}
        />
        <Button
          htmlType="submit"
          className="h-16 rounded-l-none"
          type="primary"
        >
          Post
        </Button>
      </form>
    </div>
  );
};

export default PostBox;
