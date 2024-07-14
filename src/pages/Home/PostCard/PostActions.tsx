
import { LikeOutlined, LikeFilled, CommentOutlined,EyeFilled  } from '@ant-design/icons';

import PostActionsMenu from '../../../components/PostActionsMenu';
import { Post } from '../../types/types';

interface PostActionsProps {
  post: Post;
  onLike: (postId: string) => void;
  onComment: (postId: string) => void;
  onMoreActions: (post: Post) => void;
  userId: string;
  isLiked: boolean;
  likeCount: number;
  commentCount: number;
  views:number
}


const PostActions: React.FC<PostActionsProps> = ({ post, onLike, onComment,  isLiked, likeCount, commentCount }) => (

  
  <div className="flex justify-evenly items-center space-x-4 px-2 text-gray-500 ">
    <span onClick={() => onLike(post.post_id)}>
      {isLiked ? <LikeFilled className="text-blue-500" /> : <LikeOutlined />}
      {likeCount}
    </span>
    <span className='hover:text-blue-500'> <EyeFilled ></EyeFilled> {post.views} </span>
    <span onClick={() => onComment(post.post_id)} className="cursor-pointer hover:text-blue-500">
      <CommentOutlined /> {commentCount > 0 && commentCount}
    </span>
    <PostActionsMenu post={post} />
  </div>
);

export default PostActions;
