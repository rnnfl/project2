import PageHeader from '../components/dashboard/PageHeader';
import ActiveSitesCard from './dashboard/ActiveSitesCard';
import ActivityFeedCard from './dashboard/ActivityFeedCard';
import CameraHealthCard from './dashboard/CameraHealthCard';
import FollowUpCard from './dashboard/FollowUpCard';
import GateCheckCard from './dashboard/GateCheckCard';
import StatCards from './dashboard/StatCards';

function Dashboard() {
  return (
    <div className="p-6">
      <PageHeader breadcrumb="SITE KALTIM 2 · RUANG KENDALI K3" title="Dashboard" />
      <StatCards />

      <div className="mb-4 grid grid-cols-1 gap-4 xl:grid-cols-3">
        <ActiveSitesCard />
        <ActivityFeedCard />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <GateCheckCard />
        <CameraHealthCard />
        <FollowUpCard />
      </div>
    </div>
  );
}

export default Dashboard;
