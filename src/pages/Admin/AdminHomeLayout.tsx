import ActiveUsers from "./ActiveUsers/ActiveUsers";

import EngagementMetrics from "./EngagementMetrics/EngagementMetrics";
import PostStatistics from "./PostStatistics/PostStatistics";
import UserGrowth from "./UserGrowth/UserGrowth";
import UserStatistics from "./UserStatistics/UserStatistics";

const AdminHomeLayout = () => {
  return (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 mx-auto  gap-6">
      
      <UserStatistics />
      <ActiveUsers />
      <UserGrowth />
      <PostStatistics />
      <EngagementMetrics />
    </div>
  );
};

export default AdminHomeLayout;
