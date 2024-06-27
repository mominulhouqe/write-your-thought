
import { Menu, Dropdown, Button, message, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, CopyOutlined, MoreOutlined } from "@ant-design/icons";

const PostActionsMenu = () => {
  const handleEdit = () => {
    message.info("Edit action clicked");
  };

  const handleDelete = () => {
    Modal.confirm({
      title: "Are you sure you want to delete this post?",
      onOk: () => {
        message.success("Post deleted");
      },
    });
  };

  const handleCopy = () => {
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

  const menu = (
    <Menu>
      <Menu.Item key="edit" onClick={handleEdit}>
        <EditOutlined /> Edit
      </Menu.Item>
      <Menu.Item key="copy" onClick={handleCopy}>
        <CopyOutlined /> Copy
      </Menu.Item>
      <Menu.Item key="delete" onClick={handleDelete}>
        <DeleteOutlined /> Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Button icon={<MoreOutlined />} />
    </Dropdown>
  );
};

export default PostActionsMenu;
