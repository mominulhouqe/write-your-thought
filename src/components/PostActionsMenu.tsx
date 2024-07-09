/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Dropdown, Button, message, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, CopyOutlined, MoreOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useAppSelector } from '../hooks/hooks';
import { useUserInfo } from '../redux/features/auth/authSlice';
import { useDeletePostMutation } from '../redux/features/post/postApi';
import { Post } from '../pages/types/types';
import Loading from './Loading';

interface PostActionsMenuProps {
  post: Post;
}

const PostActionsMenu: React.FC<PostActionsMenuProps> = ({ post }) => {
  const postId = post?.post_id;
  const userInfo = useAppSelector(useUserInfo);
  const [deletePost, { isLoading }] = useDeletePostMutation();


  const handleEdit = () => {
    message.info('Edit action clicked');
  };

  const handleDelete = () => {
    Modal.confirm({
      title: 'Are you sure you want to delete this post?',
      content: 'This action cannot be undone.',
      onOk: async () => {
        try {
          const res = await deletePost(postId).unwrap();
          message.success(res?.data?.message || res?.message);
        } catch (error: any) {
          message.error(error?.data?.message || error?.message);
        }
      },
    });
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(`https://thoughts-app-v1.web.app/post-view/${postId}`)
      .then(() => {
        message.success('Post link copied');
      })
      .catch(() => {
        message.error('Failed to copy content');
      });
  };

  if (isLoading) {
    return <Loading className="mt-12 h-screen" />;
  }

  const isAdmin = userInfo?.role === 'admin';
  const isOwner = userInfo?.user_id === post?.createdBy;

  const menuItems: MenuProps['items'] = [
    {
      key: 'edit',
      label: (
        <div onClick={handleEdit}>
          <EditOutlined /> Edit
        </div>
      ),
    },
    {
      key: 'copy',
      label: (
        <div onClick={handleCopy}>
          <CopyOutlined /> Copy
        </div>
      ),
    },
    ...(isAdmin || isOwner
      ? [
          {
            key: 'delete',
            label: (
              <div onClick={handleDelete}>
                <DeleteOutlined /> Delete
              </div>
            ),
          },
        ]
      : []),
  ];

  return (
    <Dropdown menu={{ items: menuItems }} trigger={['click']}>
      <Button icon={<MoreOutlined />} />
    </Dropdown>
  );
};

export default PostActionsMenu;
