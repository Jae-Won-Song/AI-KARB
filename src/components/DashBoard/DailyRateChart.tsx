import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import rateDone from '../../assets/rate-done.svg';
import rateNotDone from '../../assets/rate-notdone.svg';

const DailyrateChart = () => {
  const totalTasks = 50;
  const completedTasks = 40;
  const percentage = Math.round((completedTasks / totalTasks) * 100);

  return (
    <section className="dailyRateWrapper">
      <h1 className="dailyRateWrapper__title">오늘의 달성률</h1>
      <div className="dailyRateWrapper__gauge">
        <div className="gauge" style={{ width: '130px', height: '130px' }}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={8}
            className="circular-progressbar"
            styles={buildStyles({
              rotation: 0.5,
              strokeLinecap: 'round',
              textSize: '20px',
              pathTransitionDuration: 0.5,
              pathColor: `rgba(0, 101, 151, ${percentage / 100})`,
              textColor: '#006597',
              trailColor: '#DDEFF8',
            })}
          />
        </div>
      </div>
      <div className="dailyRateWrapper__subtitle">
        <div className="dailyRateWrapper__subtitle__legend">
          <img src={rateDone} alt="rateDone" />
          <div className="dailyRateWrapper__subtitle__legend__main">완료</div>
          <div className="dailyRateWrapper__subtitle__legend__compare">{completedTasks}건</div>
        </div>
        <div className="dailyRateWrapper__subtitle__legend">
          <img src={rateNotDone} alt="rateNotDone" />
          <div className="dailyRateWrapper__subtitle__legend__main">잔여</div>
          <div className="dailyRateWrapper__subtitle__legend__compare">{totalTasks - completedTasks}건</div>
        </div>
      </div>
    </section>
  );
};

export default DailyrateChart;
