import WorkStatus from '../components/DashBoard/WorkStatus';
import DashBoardDate from '../components/DashBoard/DashBoardDate';
import TaskSummary from '../components/DashBoard/TaskSummary';

const AdminDashBoard = () => {
  return (
    <div>
      <DashBoardDate />
      <TaskSummary />
      <WorkStatus />
    </div>
  );
};

export default AdminDashBoard;
