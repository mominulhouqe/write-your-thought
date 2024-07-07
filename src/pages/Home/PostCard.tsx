/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState } from "react";
// import { Card, message, Avatar, Tooltip, Skeleton } from "antd";
// import {
//   LikeOutlined,
//   LikeFilled,
//   CommentOutlined,
//   MoreOutlined,
// } from "@ant-design/icons";
// import { format } from "date-fns";
// import PostActionsMenu from "../../components/PostActionsMenu";
// import {
//   useAddLikeMutation,
//   useGetAllPostsQuery,
// } from "../../redux/features/post/postApi";
// import { useAppSelector } from "../../hooks/hooks";
// import { useUserInfo } from "../../redux/features/auth/authSlice";
// import { Link, useNavigate } from "react-router-dom";

// import { Post } from "../types/types";
// import CommentsSection from "../../components/CommentsSection ";

// const PostCard: React.FC = ({ className }: any) => {
//   const userInfo = useAppSelector(useUserInfo);
//   const [showComments, setShowComments] = useState<string | null>(null);
//   const navigate = useNavigate();
//   const { data: posts, isLoading } = useGetAllPostsQuery({});
//   const [addLike, { isLoading: addLikeLoading }] = useAddLikeMutation();

//   const handleLike = async (postId: string) => {
//     if (!userInfo?.email) {
//       // User is not logged in, redirect to login page
//       navigate("/login");
//       return;
//     }

//     const data = {
//       like: true,
//     };
//     try {
//       const res = await addLike({ postId, ...data }).unwrap();
//       console.log(res);
//     } catch (error: any) {
//       if (error?.data?.message === "Key not found. Please Login First") {
//         navigate("/login");
//       }
//       message.error(error?.message || error?.data?.message);
//     }
//   };

//   const toggleComments = (postId: string) => {
//     setShowComments((prev) => (prev === postId ? null : postId));
//   };

//   const handlePostClick = (postId: string) => {
//     if (!userInfo?.email) {
//       navigate("/login");
//       return;
//     }
//     navigate(`/post-view/${postId}`);
//   };

//   return (
//     <div className={`mt-2 px-1 ${className}`}>
//       {/* {`flex justify-center items-center w-full ${className}`} */}
//       {isLoading ? (
//         // Skeleton loading state
//         <div className="space-y-4">
//           {[...Array(3)].map((_, index) => (
//             <Card key={index} className="my-4 border rounded-lg shadow-md">
//               <Skeleton loading={isLoading} avatar paragraph={{ rows: 4 }} />
//             </Card>
//           ))}
//         </div>
//       ) : (
//         posts?.data?.map((post: Post) => (
//           <Card
//             key={post?._id}
//             className="my-4 border rounded-lg shadow-md"
//             actions={[
//               <span onClick={() => handleLike(post?.post_id)} key="like">
//                 {post?.post_additional?.likes?.some(
//                   (like) => like.user_id === userInfo?.user_id
//                 ) ? (
//                   <LikeFilled
//                     disabled={addLikeLoading}
//                     className="text-blue-500"
//                   />
//                 ) : (
//                   <LikeOutlined disabled={addLikeLoading} />
//                 )}{" "}
//                 {post?.post_additional?.likes?.length}
//               </span>,
//               <span
//                 key="comment"
//                 onClick={() => toggleComments(post?.post_id)}
//                 className="cursor-pointer"
//               >
//                 <CommentOutlined />{" "}
//                 {post?.total_comment > 0 && post?.total_comment}
//               </span>,
//               <PostActionsMenu key="actions" post={post} />,
//             ]}
//           >
//             <div className="flex items-center mb-4">
//               <Link to="/user-profile">
//                 <Avatar
//                   src={
//                     post?.user_info?.avatar?.url ||
//                     "https://api.dicebear.com/7.x/miniavs/svg?seed=8"
//                   }
//                   size="large"
//                   className="border-2 border-blue-500"
//                 />
//               </Link>
//               <Link to={"/user-profile"} className="ml-4">
//                 <h4 className="font-medium text-lg capitalize">
//                   {post?.user_info?.name}
//                 </h4>
//                 <Tooltip title={format(new Date(post?.createdAt), "PPPp")}>
//                   <span className="text-gray-500">
//                     {format(new Date(post?.createdAt), "MMMM do, yyyy h:mm a")}
//                   </span>
//                 </Tooltip>
//               </Link>
//               <div className="ml-auto">
//                 <MoreOutlined className="text-lg" />
//               </div>
//             </div>
//             <div onClick={() => handlePostClick(post?.post_id)}>
//               {post?.post_image?.url && (
//                 <img
//                   className="w-full my-2 rounded-lg"
//                   src={post?.post_image?.url}
//                   alt=""
//                 />
//               )}
//               <p className="text-gray-700 mb-3">{post?.post_description}</p>
//             </div>
//             {showComments === post?.post_id && (
//               <CommentsSection post={post} totalComment={post?.total_comment} />
//             )}
//           </Card>
//         ))
//       )}
//     </div>
//   );
// };

// export default PostCard;

import React, { useState } from 'react';
import { Card, message, Skeleton } from 'antd';
import { useAddLikeMutation, useGetAllPostsQuery } from '../../redux/features/post/postApi';
import { useAppSelector } from '../../hooks/hooks';
import { useUserInfo } from '../../redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { Post } from '../types/types';
import PostActions from './PostCard/PostActions';
import PostHeader from './PostCard/PostHeader';
import PostImage from './PostCard/PostImage';
import PostDescription from './PostCard/PostDescription';
import CommentsSection from '../../components/CommentsSection ';


const PostCard: React.FC<{ className?: string }> = ({ className }) => {
  const userInfo = useAppSelector(useUserInfo);
  const [showComments, setShowComments] = useState<string | null>(null);
  const [expandedPost, setExpandedPost] = useState<string | null>(null);
  const navigate = useNavigate();
  const { data: posts, isLoading } = useGetAllPostsQuery({});
  const [addLike] = useAddLikeMutation();

  const handleLike = async (postId: string) => {
    if (!userInfo?.email) {
      navigate("/login");
      return;
    }
    try {
      await addLike({ postId, like: true }).unwrap();
    } catch (error: any) {
      if (error?.data?.message === "Key not found. Please Login First") {
        navigate("/login");
      }
      message.error(error?.message || error?.data?.message);
    }
  };

  const toggleComments = (postId: string) => {
    setShowComments((prev) => (prev === postId ? null : postId));
  };

  const handlePostClick = (postId: string) => {
    if (!userInfo?.email) {
      navigate("/login");
      return;
    }
    navigate(`/post-view/${postId}`);
  };

  return (
    <div className={`mt-2 px-1 ${className}`}>
      {isLoading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <Card key={index} className="my-4 border rounded-lg shadow-md">
              <Skeleton loading={isLoading} avatar paragraph={{ rows: 4 }} />
            </Card>
          ))}
        </div>
      ) : (
        posts?.data?.map((post: Post) => (
          <Card
            key={post?._id}
            className="my-4 border rounded-lg shadow-md"
            actions={[
              <PostActions
                key="actions"
                post={post}
                onLike={handleLike}
                onComment={toggleComments}
                onMoreActions={() => {}}
                userId={userInfo?.user_id || ''}
                isLiked={post?.post_additional?.likes?.some(like => like.user_id === userInfo?.user_id) || false}
                likeCount={post?.post_additional?.likes?.length || 0}
                commentCount={post?.total_comment || 0}
                views={post?.views}
              />
            ]}
          >
            <PostHeader
              userInfo={post?.user_info}
              createdAt={post?.createdAt}
            />
            <PostImage url={post?.post_image?.url} />
            <PostDescription
              description={post?.post_description}
              onClick={() => handlePostClick(post?.post_id)}
              isExpanded={expandedPost === post?.post_id}
              toggleExpand={() => setExpandedPost((prev) => (prev === post?.post_id ? null : post?.post_id))}
            />
            {showComments === post?.post_id && (
              <CommentsSection post={post} totalComment={post?.total_comment} />
            )}
          </Card>
        ))
      )}
    </div>
  );
};

export default PostCard;
