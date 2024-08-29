import WorkStatus from '../components/DashBoard/WorkStatus';
import DashBoardDate from '../components/DashBoard/DashBoardDate';
import TaskSummary from '../components/DashBoard/TaskSummary';
import TaskRateAdmin from '../components/DashBoard/TaskRateAdmin';
import DailyTaskChartAdmin from '../components/DashBoard/DailyTaskChartAdmin';
import data from '../../admindata.json';

const AdminDashBoard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <DashBoardDate />
      <TaskSummary />

      <div style={{ flex: '1 1 1%' }}>
        <DailyTaskChartAdmin data={data} />
      </div>

      <div style={{ display: 'flex', flex: '1 1 60%' }}>
        <WorkStatus />
        <TaskRateAdmin />
      </div>
    </div>
  );
};

export default AdminDashBoard;
