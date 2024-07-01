/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Modal, Upload, message, Input, Image } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { useAddPostMutation } from "../../redux/features/post/postApi";
import { useAppSelector } from "../../hooks/hooks";
import { useUserInfo } from "../../redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

import { PlusOutlined } from "@ant-design/icons";
import type { GetProp, UploadFile, UploadProps } from "antd";
type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const PostBox: React.FC = () => {
  const [postText, setPostText] = useState<string>("");
  const [fileList, setFileList] = useState<any[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [addPost, { isLoading }] = useAddPostMutation();
  const userInfo = useAppSelector(useUserInfo);
  const navigate = useNavigate();

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(event.target.value);
  };

  const handleSubmit = async () => {
    if (!userInfo?.email) {
      navigate("/login");
      return;
    }

    const formData = new FormData();
    formData.append("post_description", postText);

    if (fileList.length > 0) {
      formData.append("postImage", fileList[0].originFileObj);
    }

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
      <div className="flex items-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
        {/* Profile Image */}
        {userInfo?.avatar?.url ? (
          <Link to="/user-profile">
            <img
              src={userInfo?.avatar?.url}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-500 shadow-md"
            />
          </Link>
        ) : (
          <Link to="/login">
            <div className="w-12 h-12 flex items-center justify-center border-2 border-blue-500 rounded-full bg-blue-100 text-blue-500 shadow-md">
              <UserAddOutlined className="text-2xl" />
            </div>
          </Link>
        )}

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
        open={isModalVisible}
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
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          {previewImage && (
            <Image
              wrapperStyle={{ display: "none" }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(""),
              }}
              src={previewImage}
            />
          )}

          {previewImage && (
            <Image
              wrapperStyle={{ display: "none" }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(""),
              }}
              src={previewImage}
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default PostBox;

