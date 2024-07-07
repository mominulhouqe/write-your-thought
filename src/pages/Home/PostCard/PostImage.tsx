import React from 'react';

interface PostImageProps {
  url?: string;
}

const PostImage: React.FC<PostImageProps> = ({ url }) => (
  url ? <img className="w-full my-2 rounded-lg" src={url} alt="Post" /> : null
);

export default PostImage;
