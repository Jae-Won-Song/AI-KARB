import DashBoardDate from '../../components/DashBoard/DashBoardDate';
import Worker from '../../components/DashBoard/Worker';
import TaskSummary from '../../components/DashBoard/TaskSummary';
import WorkStatus from '../../components/DashBoard/WorkStatus';
import DailyChart from '../../components/DashBoard/DailyChart';
import data from '../../../data.json';
import RecentTask from '../../components/DashBoard/RecentTask';
import TaskRate from '../../components/DashBoard/TaskRate';
import DailyRateChart from '../../components/DashBoard/DailyRateChart';

const HomeDashBoard = () => {
  return (
    <section style={{ background: 'white' }}>
      {' '}
      <section style={{ display: 'flex', padding: '10px 30px 24px 30px' }}>
        <Worker />
        <DashBoardDate />
        <TaskSummary />
      </section>
      <section style={{ display: 'flex', padding: '0 30px 24px 30px' }}>
        <WorkStatus />
        <TaskRate />
        <DailyRateChart />
      </section>
      <section style={{ display: 'flex', padding: '0 30px 62px 30px' }}>
        <DailyChart data={data} />
        <RecentTask />
      </section>
    </section>
  );
};

export default HomeDashBoard;
