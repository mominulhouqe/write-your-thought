import React from 'react';
import { Button, Tooltip } from 'antd';

interface PostDescriptionProps {
  description: string;
  onClick: () => void;
  isExpanded: boolean;
  toggleExpand: () => void;
}

const PostDescription: React.FC<PostDescriptionProps> = ({ description, onClick, isExpanded, toggleExpand }) => (
  <div>
    <Tooltip title={description}>
      <p className="text-gray-700 mb-3" onClick={onClick}>
        {isExpanded ? description : `${description.slice(0, 100)}...`}
      </p>
    </Tooltip>
    <Button type="link" onClick={toggleExpand}>
      {isExpanded ? 'See Less' : 'See More'}
    </Button>
  </div>
);

export default PostDescription;
