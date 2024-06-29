import React, { useState } from "react";
import { Button, Modal, Upload, message, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useAddPostMutation } from "../../redux/features/post/postApi";
import { useAppSelector } from "../../hooks/hooks";
import { useUserInfo } from "../../redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { UserAddOutlined } from "@ant-design/icons";
const PostBox: React.FC = () => {
  const [postText, setPostText] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [fileList, setFileList] = useState<any[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [addPost, { isLoading }] = useAddPostMutation();
  const userInfo = useAppSelector(useUserInfo);
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(event.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileChange = (info: any) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
    setFileList(info.fileList);
  };

  const handleSubmit = async () => {
    if (!userInfo?.email) {
      navigate("/login");
      return;
    }

    const formData = new FormData();
    formData.append("post_description", postText);

    // Append files to formData
    fileList.forEach((file) => {
      formData.append("files", file.originFileObj);
    });

    try {
      await addPost(formData).unwrap();
      message.success("Post added successfully");
      setIsModalVisible(false);
      setPostText("");
      setFileList([]);
    } catch (error) {
      message.error("Failed to add post");
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        Create Post
      </Button>
      <div className="flex items-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <Link to="/profile">
        {/* Profile Image */}
        {userInfo?.avatar?.url ? (
          <img
            src={userInfo?.avatar?.url}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-500 shadow-md"
          />
        ) : (
          <div className="w-12 h-12 flex items-center justify-center border-2 border-blue-500 rounded-full bg-blue-100 text-blue-500 shadow-md">
            <UserAddOutlined className="text-2xl" />
          </div>
        )}
      </Link>
      <input
        type="text"
        placeholder="What's on your mind?"
        className="flex-1 ml-4 p-3 border rounded-full shadow-sm focus:outline-none bg-gray-100 focus:ring-blue-500 transition ease-in-out duration-300 cursor-pointer"
        readOnly
        onClick={() => setIsModalVisible(true)}
      />
    </div>

      <Modal
        title="Create a New Post"
        visible={isModalVisible}
        onOk={handleSubmit}
        onCancel={handleCancel}
        confirmLoading={isLoading}
        okText="Post"
        cancelText="Cancel"
        width={600}
      >
        <div className="flex flex-col gap-4">
          <Input.TextArea
            rows={4}
            placeholder="What's on your mind? "
            value={postText}
            
            onChange={handleInputChange}
          />
          <Upload
            fileList={fileList}
            onChange={handleFileChange}
            beforeUpload={() => false} // Prevent auto-upload
            multiple
          >
            <Button icon={<UploadOutlined />}>Upload Files</Button>
          </Upload>
        </div>
      </Modal>
    </>
  );
};

export default PostBox;
