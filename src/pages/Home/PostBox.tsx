import { Button } from "antd";


const PostBox = () => {
  return (
    <div className="flex flex-col items-center mt-4">
      <div className="w-full flex items-center justify-center">
        <textarea 
          className="bg-gray-200 w-full h-16 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          placeholder="What's on your mind?"
        />
        <Button 
          className="h-16"
          type="primary"
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default PostBox;
