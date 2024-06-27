import React, { useState } from 'react';
import { Card, message } from "antd";
import { LikeOutlined, LikeFilled, CommentOutlined } from "@ant-design/icons";
import PostActionsMenu from '../../components/PostActionsMenu';
import CommentsSection from '../../components/CommentsSection ';


const PostCard = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="mt-6  px-1">
      <Card
        className="shadow-lg my-2"
        actions={[
          <span onClick={handleLike}>
            {liked ? <LikeFilled /> : <LikeOutlined />} {likes}
          </span>,
          <CommentOutlined key="comment" />,
          <PostActionsMenu key="actions" />
        ]}
      >
        <div className="flex items-center mb-4">
          <img
            className="w-10 h-10 border border-green-700 rounded-full"
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
            alt="Avatar"
          />
          <div className="ml-4">
            <h4 className="font-medium text-lg">Person Name</h4>
            <small className="text-gray-500">25/6/2024</small>
          </div>
        </div>
        <div className='mb-3'>
          <img
            className="w-full my-2 rounded-lg"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            alt="Post"
          />
          <p className="text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tempora deserunt quae aperiam nulla, atque odio in iste non accusamus officia aspernatur quia architecto magni asperiores perferendis maxime ullam omnis.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
          </p>
        </div>
        <CommentsSection comments={comments} addComment={addComment} />
      </Card>
    </div>
  );
};

export default PostCard;
