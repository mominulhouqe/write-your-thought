import { motion } from "framer-motion";

const ProfilePicture = () => {
  return (
    <div className="relative">
      <img
        src="https://i.ibb.co/gdgBc7R/my-img5-1.jpg"
        alt="profile"
        className="w-12 h-12 rounded-full"
      />
      <motion.div
        className="bg-gray-200 flex justify-end items-center rounded-full p-2 w-6 h-6 ml-4 mt-2 absolute bottom-0 right-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          viewBox="0 0 512 512"
        >
          <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
        </svg>
      </motion.div>
    </div>
  );
};

export default ProfilePicture;
