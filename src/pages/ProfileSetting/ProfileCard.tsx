import { useAppSelector } from "../../hooks/hooks";
import { motion } from "framer-motion";
import TextInput from "./TextInput";
import SaveButton from "./SavesButton";
import { useUserInfo } from "../../redux/features/auth/authSlice";

const ProfileCard = () => {
  const userInfo = useAppSelector(useUserInfo);
  console.log(userInfo);
  return (
    <div className="bg-gray-200 ">
      <section className="max-w-3xl mx-auto ">
        <motion.div
          className="bg-white rounded-lg shadow-md border p-4 flex justify-between items-center my-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex gap-2 items-start">
            <div className="relative">
              <img
                src={userInfo?.avatar?.url || "Avatar"}
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
            <div>
              <h5 className="text-lg font-bold">{userInfo?.name || "Admin"}</h5>
              <p className="text-gray-600">{userInfo?.role}</p>
            </div>
          </div>

          {/* <div className="flex items-center gap-2 fill-gray-600 mr-4">
            <small className="text-gray-600">Switch to invisible </small>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 576 512"
              >
                <path d="M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H192c-70.7 0-128-57.3-128-128s57.3-128 128-128H384zM576 256c0-106-86-192-192-192H192C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192zM192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
              </svg>
            </span>
          </div> */}
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-md border p-4 mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-4">
            <h5 className="text-lg font-bold mb-4">Basic Info</h5>

            <TextInput label="Name" id="name" />

            <SaveButton text="Save Changes" />
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-md border p-4 mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-4">
            <h5 className="text-lg font-bold mb-4">Change Password</h5>
            <div className="">
              <TextInput label="Current Password" id="currentPass" />
              <TextInput label="New Password" id="newPass" />
              <TextInput label="Confirm New Password" id="confirmPass" />
            </div>
            <SaveButton text="Update Password" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProfileCard;
