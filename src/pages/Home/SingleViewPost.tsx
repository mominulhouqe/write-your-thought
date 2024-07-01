import React from "react";

import { Card, Avatar, Tooltip, Button, Spin } from "antd";
import {
  LikeOutlined,
  CommentOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import { useGetSinglePostByIdQuery } from "../../redux/features/post/postApi";
import { MoreOutlined } from "@ant-design/icons";

interface SingleViewPostProps {}

const SingleViewPost: React.FC<SingleViewPostProps> = () => {
  const { postId } = useParams();

  const { data: singlePost, isLoading: singlePostLoading } =
    useGetSinglePostByIdQuery({
      postId: postId,
      skip: !postId,
    });

  console.log(singlePost?.data);


  return (
    // <Card className="max-w-2xl mx-auto mt-6 shadow-md border border-gray-200">
    //   <div className="flex items-center mb-4">
    //     <Avatar src="..." size="large" />
    //     <div className="ml-4">
    //       <h4 className="text-lg font-semibold">name</h4>
    //       {/* <Tooltip title={format(new Date(post.createdAt), 'PPpp')}>
    //         <span className="text-gray-500">{format(new Date(post.createdAt), 'PPP')}</span>
    //       </Tooltip> */}
    //     </div>
    //   </div>
    //   <p className="mb-4 text-gray-800">{singlePost?.data?.post_description}</p>
    //   {/* {post.post_image?.url && (
    //     <img src={post.post_image.url} alt="Post" className="w-full h-auto rounded-lg mb-4" />
    //   )} */}
    //   <div className="flex justify-between items-center">
    //     <div className="flex space-x-4">
    //       <Button type="text" icon={<LikeOutlined />}>
    //         6 Likes
    //       </Button>
    //       <Button type="text" icon={<CommentOutlined />}>
    //         6 Comments
    //       </Button>
    //     </div>
    //     <Button type="text" icon={<ShareAltOutlined />}>
    //       Share
    //     </Button>
    //   </div>
    // </Card>

    <div className="mt-6 px-1">
      <Card
        className="my-4 border rounded-lg shadow-md"
        actions={[
          // <span onClick={() => handleLike(singlePost?.data?.post_id)} key="like">
          //   {post?.post_additional?.likes?.some(
          //     (like: { user_id: string | undefined }) =>
          //       like.user_id === userInfo?.user_id
          //   ) ? (
          //     <LikeFilled
          //       disabled={addLikeLoading}
          //       className="text-blue-500"
          //     />
          //   ) : (
          //     <LikeOutlined disabled={addLikeLoading} />
          //   )}{" "}
          //   {post?.post_additional?.likes?.length}
          // </span>,
          <span
            key="comment"
            // onClick={() => toggleComments(post?.post_id)}
            className="cursor-pointer"
          >
            <CommentOutlined />{" "}
            {/* {post?.total_comment > 0 && post?.total_comment} */}
          </span>,
          // <PostActionsMenu key="actions" postId={post?.post_id} />,
        ]}
      >
        <div className="flex items-center mb-4">
          <Link to="/user-profile">
            <Avatar
              src={
                singlePost?.data?.user_info?.avatar?.url ||
                "https://api.dicebear.com/7.x/miniavs/svg?seed=8"
              }
              size="large"
              className="border-2 border-blue-500"
            />
          </Link>
          <div className="ml-4">
            <h4 className="font-medium text-lg capitalize">
              {singlePost?.data?.user_info?.name}
            </h4>
            {/* <Tooltip title={format(new Date(post?.createdAt), "PPPp")}>
                <span className="text-gray-500">
                  {format(new Date(post?.createdAt), "MMMM do, yyyy h:mm a")}
                </span>
              </Tooltip> */}
          </div>
          <div className="ml-auto">
            <MoreOutlined className="text-lg" />
          </div>
        </div>
        <div>
          {singlePost?.data?.post_image?.url && (
            <img
              className="w-full my-2 rounded-lg"
              src={singlePost?.data?.post_image?.url}
              alt=""
            />
          )}
          <p className="text-gray-700 mb-3">
            {singlePost?.data?.post_description}
          </p>
        </div>
        {/* {showComments === post?.post_id && (
            <CommentsSection post={post} totalComment={post?.total_comment} />
          )} */}
      </Card>
    </div>
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
