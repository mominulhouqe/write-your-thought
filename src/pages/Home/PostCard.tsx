import {
  EditOutlined,
  // EllipsisOutlined,
  // SettingOutlined,
  DeleteOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import { Card, Modal, message } from "antd";

const PostCard = () => {

  //Todo: only users owner can edit post and delete post
  
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

  return (
    <div className="mt-6 mx-auto max-w-3xl">
      <Card
        className="shadow-lg my-2"
        actions={[
          // <SettingOutlined key="setting" />,
          <EditOutlined key="edit" onClick={handleEdit} />,
          <CopyOutlined key="copy" onClick={handleCopy} />,
          <DeleteOutlined key="delete" onClick={handleDelete} />,
          // <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <div className="flex items-center mb-4">
          <img
            className="w-10 h-10 border border-green-700 rounded-full"
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
            alt="Avatar"
          />
          <div className="ml-4">
            <h4 className="font-medium text-lg">Person Name</h4>
            <small className="text-gray-500">25/6/2024</small>
          </div>
        </div>
        <div>
          <img
            className="w-full my-2 rounded-lg"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            alt="Post"
          />
          <p className="text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            laboriosam praesentium voluptatibus obcaecati, magnam eum sapiente
            eos dolores iusto officiis suscipit. Voluptatibus natus dolores
            laboriosam. At asperiores quidem voluptas.
          </p>
        </div>
      </Card>
      <Card
        className="shadow-lg my-2"
        actions={[
          // <SettingOutlined key="setting" />,
          <EditOutlined key="edit" onClick={handleEdit} />,
          <CopyOutlined key="copy" onClick={handleCopy} />,
          <DeleteOutlined key="delete" onClick={handleDelete} />,
          // <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <div className="flex items-center mb-4">
          <img
            className="w-10 h-10 border border-green-700 rounded-full"
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
            alt="Avatar"
          />
          <div className="ml-4">
            <h4 className="font-medium text-lg">Person Name</h4>
            <small className="text-gray-500">25/6/2024</small>
          </div>
        </div>
        <div>
          <img
            className="w-full my-2 rounded-lg"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            alt="Post"
          />
          <p className="text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            laboriosam praesentium voluptatibus obcaecati, magnam eum sapiente
            eos dolores iusto officiis suscipit. Voluptatibus natus dolores
            laboriosam. At asperiores quidem voluptas.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default PostCard;
