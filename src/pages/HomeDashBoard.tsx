import DashBoardDate from '../components/DashBoard/DashBoardDate';
import Worker from '../components/DashBoard/Worker';
import TaskSummary from '../components/DashBoard/TaskSummary';
import WorkStatus from '../components/DashBoard/WorkStatus';
import DailyTaskChart from '../components/DashBoard/DailyTaskChart';
import data from '../../data.json';
// import dailychart from '../../dailychart.json';
import RecentTask from '../components/DashBoard/RecentTask';
import TaskRate from '../components/DashBoard/TaskRate';
import DailyRateChart from '../components/DashBoard/DailyRateChart';

const HomeDashBoard = () => {
  return (
    <div>
      {' '}
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Worker />
        <DashBoardDate />
        <TaskSummary />
      </section>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <WorkStatus />
        <TaskRate />
        <DailyRateChart />
      </section>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <DailyTaskChart data={data} />
        <RecentTask />
      </section>
    </div>
  );
};

export default HomeDashBoard;
