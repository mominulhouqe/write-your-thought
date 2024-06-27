import { Button } from "antd";


const PostBox = () => {
  return (

      <div className=" flex items-center justify-center  px-1">
        <textarea 
          className="bg-gray-200 w-full h-16 p-4 rounded-lg rounded-e-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          placeholder="What's on your mind?"
        />
        <Button 
          className="h-16  rounded-l-none "
          type="primary"
        >
          Post
        </Button>
      </div>

  );
};

export default PostBox;
