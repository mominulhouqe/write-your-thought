import {  Dropdown, Button, message, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, CopyOutlined, MoreOutlined } from "@ant-design/icons";
import type { MenuProps } from 'antd';

interface PostActionsMenuProps {
  postId: string;
}

const PostActionsMenu: React.FC<PostActionsMenuProps> = ({ postId }) => {

  const handleEdit = () => {
    message.info("Edit action clicked");
  };

  const handleDelete = () => {
    Modal.confirm({
      title: "Are you sure you want to delete this post?",
      content: "This action cannot be undone.",
      onOk: () => {
        message.success("Post deleted");
      },
    });
  };

  const handleCopy = () => {
    console.log(postId);

    navigator.clipboard
      .writeText(
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi laboriosam praesentium voluptatibus obcaecati, magnam eum sapiente eos dolores iusto officiis suscipit. Voluptatibus natus dolores laboriosam. At asperiores quidem voluptas."
      )
      .then(() => {
        message.success("Post content copied to clipboard");
      })
      .catch(() => {
        message.error("Failed to copy content");
      });
  };

  // Define menu items array
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
    {
      key: 'delete',
      label: (
        <div onClick={handleDelete}>
          <DeleteOutlined /> Delete
        </div>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items: menuItems }} trigger={['click']}>
      <Button icon={<MoreOutlined />} />
    </Dropdown>
  );
};

export default PostActionsMenu;
