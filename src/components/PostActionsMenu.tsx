import { Dropdown, Button, message, Modal } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CopyOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useAppSelector } from "../hooks/hooks";
import { useUserInfo } from "../redux/features/auth/authSlice";
import { useDeletePostMutation } from "../redux/features/post/postApi";

interface PostActionsMenuProps {
  postId: string;
}

const PostActionsMenu: React.FC<PostActionsMenuProps> = ({ post, }) => {

  
  const postId = post?.post_id;
  const userInfo = useAppSelector(useUserInfo);
  const [deletePost, { isLoading }] = useDeletePostMutation();

  const handleEdit = () => {
    message.info("Edit action clicked");
  };

  const handleDelete = () => {
    Modal.confirm({
      title: "Are you sure you want to delete this post?",
      content: "This action cannot be undone.",
      onOk: async () => {
        try {
          const res = await deletePost(postId).unwrap();
          message.success(res?.data?.message || res?.message);
        } catch (error) {
          message.error(error?.data?.message || error?.message);
        }
      },
    });
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(`http://localhost:5173/post-view/${postId}`)
      .then(() => {
        message.success("Post link copied");
      })
      .catch(() => {
        message.error("Failed to copy content");
      });
  };

  // Define menu items array
  const menuItems: MenuProps["items"] = [
    {
      key: "edit",
      label: (
        <div onClick={handleEdit}>
          <EditOutlined /> Edit
        </div>
      ),
    },
    {
      key: "copy",
      label: (
        <div onClick={handleCopy}>
          <CopyOutlined /> Copy
        </div>
      ),
    },
    ...(userInfo?.user_id === post?.createdBy
      ? [
          {
            key: "delete",
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
    <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
      <Button icon={<MoreOutlined />} />
    </Dropdown>
  );
};

export default PostActionsMenu;
