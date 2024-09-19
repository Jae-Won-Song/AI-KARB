import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import fetchDashBoardData from '../../api/dashboard/dashboardApi';
import { getDeadline } from './DashBoardDate';
import rateDone from '../../assets/rate-done.svg';
import rateNotDone from '../../assets/rate-notdone.svg';

interface AdCount {
  myNotDoneAd: number;
}

interface DailyDoneItem {
  dailyMyDoneAd: number;
}

interface DashboardData {
  adCount: AdCount;
  dailyDoneList: DailyDoneItem[];
}

const DailyrateChart = () => {
  const [adCount, setAdCount] = useState<AdCount>({ myNotDoneAd: 0 });
  const [dailyDoneListData, setDailyDoneListData] = useState<DailyDoneItem[]>([]);
  const [recommendedTaskCount, setRecommendedTaskCount] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    fetchDashBoardData()
      .then((response) => {
        const { data } = response.data;
        const adCountData = data.adCount;
        setAdCount(adCountData);
        setDailyDoneListData(data.dailyDoneList);
        const deadline = getDeadline();

        if (deadline > 0) {
          const recommendedTasks = Math.max(1, Math.round(adCountData.myNotDoneAd / deadline));
          setRecommendedTaskCount(recommendedTasks);

          const todayDoneAd = (data.dailyDoneList.length > 0 && data.dailyDoneList[0]?.dailyMyDoneAd) || 0;

          const calculatedPercentage = Math.min(100, Math.round((todayDoneAd / recommendedTasks) * 100));
          setPercentage(calculatedPercentage);
        }
      })
      .catch((error) => {
        console.error('데이터 조회 실패:', error);
      });
  }, []);

  const completedTasks = dailyDoneListData.length > 0 ? dailyDoneListData[0]?.dailyMyDoneAd || 0 : 0;
  const totalTasks = recommendedTaskCount || 0;

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
          <div className="dailyRateWrapper__subtitle__legend__compare">
            {Math.max(0, totalTasks - completedTasks)}건
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyrateChart;
