
import { motion } from 'framer-motion';
import ProfilePicture from './ProfilePicture';
import TextInput from './TextInput';
import SaveButton from './SavesButton';

const ProfileCard = () => {
  return (
    <div className="bg-gray-200 ">
      <section className="max-w-3xl mx-auto mt-16 overflow-hidden">
        <motion.div
          className="bg-white rounded-lg shadow-md border p-4 flex justify-between items-center my-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex gap-2 items-start">
            <ProfilePicture />
            <div>
              <h5 className="text-lg font-bold">Admin</h5>
              <p className="text-gray-600">CEO/CO-Founder</p>
            </div>
          </div>

          <div className="flex items-center gap-2 fill-gray-600 mr-4">
            <small className="text-gray-600">Switch to invisible </small>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 576 512">
                <path d="M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H192c-70.7 0-128-57.3-128-128s57.3-128 128-128H384zM576 256c0-106-86-192-192-192H192C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192zM192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z" />
              </svg>
            </span>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-md border p-4 mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-4">
            <h5 className="text-lg font-bold mb-4">Basic Info</h5>
            <div className="grid grid-cols-2 gap-4">
              <TextInput label="Name" id="name" />
              <TextInput label="Email" id="email" />
            </div>
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
