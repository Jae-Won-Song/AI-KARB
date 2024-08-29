import WorkStatus from '../components/DashBoard/WorkStatus';
import DashBoardDate from '../components/DashBoard/DashBoardDate';
import TaskSummary from '../components/DashBoard/TaskSummary';
import TaskRateAdmin from '../components/DashBoard/TaskRateAdmin';

const AdminDashBoard = () => {
  return (
    <>
      <div>
        <DashBoardDate />
        <TaskSummary />
        <WorkStatus />
      </div>
      <div>
        <TaskRateAdmin />
      </div>
    </>
  );
};

export default AdminDashBoard;
