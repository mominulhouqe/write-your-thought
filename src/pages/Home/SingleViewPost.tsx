import React from 'react';

import { Card, Avatar, Tooltip, Button, Spin } from 'antd';
import { LikeOutlined, CommentOutlined, ShareAltOutlined } from '@ant-design/icons';


interface SingleViewPostProps {}

const SingleViewPost: React.FC<SingleViewPostProps> = () => {
//

//   if (isLoading) {
//     return <Spin size="large" />;
//   }

//   if (!post) {
//     return <div>Post not found</div>;
//   }

  return (
    <Card className="max-w-2xl mx-auto mt-6 shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <Avatar src="..." size="large" />
        <div className="ml-4">
          <h4 className="text-lg font-semibold">name</h4>
          {/* <Tooltip title={format(new Date(post.createdAt), 'PPpp')}>
            <span className="text-gray-500">{format(new Date(post.createdAt), 'PPP')}</span>
          </Tooltip> */}
        </div>
      </div>
      <p className="mb-4 text-gray-800">Lorem ipsum dolor sit.</p>
      {/* {post.post_image?.url && (
        <img src={post.post_image.url} alt="Post" className="w-full h-auto rounded-lg mb-4" />
      )} */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <Button type="text" icon={<LikeOutlined />} >
           6 Likes
          </Button>
          <Button type="text" icon={<CommentOutlined />}>
           6 Comments
          </Button>
        </div>
        <Button type="text" icon={<ShareAltOutlined />} >
          Share
        </Button>
      </div>
    </Card>
  );
};

export default SingleViewPost;

// <Card className="max-w-2xl mx-auto mt-6 shadow-md border border-gray-200">
//   <div className="flex items-center mb-4">
//     <Avatar src={post.user_info?.avatar?.url} size="large" />
//     <div className="ml-4">
//       <h4 className="text-lg font-semibold">{post.user_info?.name}</h4>
//       <Tooltip title={format(new Date(post.createdAt), 'PPpp')}>
//         <span className="text-gray-500">{format(new Date(post.createdAt), 'PPP')}</span>
//       </Tooltip>
//     </div>
//   </div>
//   <p className="mb-4 text-gray-800">{post.post_description}</p>
//   {post.post_image?.url && (
//     <img src={post.post_image.url} alt="Post" className="w-full h-auto rounded-lg mb-4" />
//   )}
//   <div className="flex justify-between items-center">
//     <div className="flex space-x-4">
//       <Button type="text" icon={<LikeOutlined />} onClick={() => onLike(post._id)}>
//         {post.post_additional?.likes?.length} Likes
//       </Button>
//       <Button type="text" icon={<CommentOutlined />} onClick={() => onComment(post._id)}>
//         {post.total_comment} Comments
//       </Button>
//     </div>
//     <Button type="text" icon={<ShareAltOutlined />} onClick={() => onShare(post._id)}>
//       Share
//     </Button>
//   </div>
// </Card>