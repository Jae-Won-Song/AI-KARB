import WorkStatus from '../components/DashBoard/WorkStatus';
import DashBoardDate from '../components/DashBoard/DashBoardDate';
import TaskSummary from '../components/DashBoard/TaskSummary';
import TaskRateAdmin from '../components/DashBoard/TaskRateAdmin';
import DailyTaskChartAdmin from '../components/DashBoard/DailyTaskChartAdmin';
import admindata from '../../admindata.json';
import data from '../../comparedata.json';
import workerData from '../../workerRateData.json';
import DailyChartAdmin from '../components/DashBoard/DailyChartAdmin';
import WorkRateAdmin from '../components/DashBoard/WorkerRateAdmin';

const AdminDashBoard = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <DashBoardDate />
            <TaskSummary />
          </div>
          <div style={{ display: 'flex' }}>
            <WorkStatus />
            <TaskRateAdmin />
          </div>
        </div>
        <DailyTaskChartAdmin data={admindata} />
      </div>
      <div style={{ display: 'flex' }}>
        <DailyChartAdmin data={data} />
        <WorkRateAdmin data={workerData} />
      </div>
    </>
  );
};

export default AdminDashBoard;
