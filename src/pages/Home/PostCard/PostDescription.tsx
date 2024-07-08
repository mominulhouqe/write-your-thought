import React from 'react';
import { Button,  } from 'antd';

interface PostDescriptionProps {
  description: string;
  onClick: () => void;
  isExpanded: boolean;
  toggleExpand: () => void;
}

const PostDescription: React.FC<PostDescriptionProps> = ({ description, onClick, isExpanded, toggleExpand }) => {
  const wordCount = description.split(' ').length;
  const showSeeMore = wordCount > 70;

  return (
    <div>
     
        <p className="text-gray-700 mb-3" onClick={onClick}>
          {isExpanded ? description : `${description.split(' ').slice(0, 70).join(' ')}${showSeeMore ? '...' : ''}`}
        </p>
       {showSeeMore && (
        <Button type="link" onClick={toggleExpand}>
          {isExpanded ? 'See Less' : 'See More'}
        </Button>
      )}
    </div>
  );
};

export default PostDescription;
