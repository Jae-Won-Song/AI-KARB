import WorkStatus from '../../components/DashBoard/WorkStatus';
import DashBoardDate from '../../components/DashBoard/DashBoardDate';
import TaskSummary from '../../components/DashBoard/TaskSummary';
import TaskRateAdmin from '../../components/DashBoard/TaskRateAdmin';
import DailyTaskChartAdmin from '../../components/DashBoard/DailyTaskChartAdmin';
import admindata from '../../../admindata.json';
import data from '../../../comparedata.json';
import workerData from '../../../workerRateData.json';
import DailyChartAdmin from '../../components/DashBoard/DailyChartAdmin';
import WorkRateAdmin from '../../components/DashBoard/WorkerRateAdmin';

const AdminDashBoard = () => {
  return (
    <div style={{ background: 'white', height: '100%' }}>
      <div style={{ display: 'flex', marginLeft: '29px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '30px' }}>
          <div style={{ display: 'flex', marginBottom: '25px' }}>
            <div style={{ marginRight: '12px' }}>
              <DashBoardDate />
            </div>
            <div style={{ marginLeft: '12px' }}>
              <TaskSummary />
            </div>
          </div>
          <div style={{ display: 'flex', marginBottom: '25px' }}>
            <div style={{ marginRight: '24px' }}>
              <WorkStatus />
            </div>
            <div>
              <TaskRateAdmin />
            </div>
          </div>
        </div>
        <DailyTaskChartAdmin data={admindata} />
      </div>
      <div style={{ display: 'flex', marginLeft: '29px' }}>
        <div style={{ marginRight: '32px' }}>
          <DailyChartAdmin data={data} />
        </div>
        <WorkRateAdmin data={workerData} />
      </div>
    </div>
  );
};

export default AdminDashBoard;
