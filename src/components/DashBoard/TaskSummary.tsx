import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import fetchDashBoardData from '../../api/dashboard/dashboardApi';
import targetIcon from '../../assets/icon-target.svg';
import caseIcon from '../../assets/icon-case.svg';
import adminCase from '../../assets/case-admin.svg';
import checkIcon from '../../assets/icon-check.svg';
import userIcon from '../../assets/user-icon.svg';
import rightArrow from '../../assets/chevron-right.svg';
import { getCurrentCycleDays, getDeadline } from './DashBoardDate';

const TaskSummary = () => {
  const [adCount, setAdCount] = useState({});
  const [myAdData, setMyAdData] = useState(0); // 내 작업 건수
  const [myDoneAdData, setMyDoneAdData] = useState(0); // 내 완료된 작업
  const [myNotDoneAdData, setMyNotDoneAdData] = useState(0); // 내 완료되지 않은 작업
  const [totalAdData, setTotalAdData] = useState(0); // 회사가 보유한 총 광고수
  const [totalDoneAdData, setTotalDoneAdData] = useState(0); // 전체 광고 중 완료건
  const [totalNotDoneAdData, setTotalNotDoneAdData] = useState(0); // 전체 광고 중 미완료건
  const [dailyDoneListData, setDailyDoneListData] = useState([]); // 오늘 검수 완료한 건
  const [recentDoneListData, setRecentDoneListData] = useState([]); // 최근 완료 건
  const [averageTaskCount, setAverageTaskCount] = useState(0); // 일일 평균 작업량
  const [recommendedTaskCount, setRecommendedTaskCount] = useState(0); // 하루 권장 작업량

  const location = useLocation();
  const isAdminRoute = location.pathname === '/dashboard/admin';
  const navigate = useNavigate();

  useEffect(() => {
    fetchDashBoardData()
      .then((response) => {
        const adCountData = response.data.data.adCount;
        setAdCount(adCountData);
        setMyAdData(adCountData.myAd);
        setMyDoneAdData(adCountData.myDoneAd);
        setMyNotDoneAdData(adCountData.myNotDoneAd);
        setTotalAdData(adCountData.totalAd);
        setTotalDoneAdData(adCountData.totalDoneAd);
        setTotalNotDoneAdData(adCountData.totalNotDoneAd);
        setDailyDoneListData(response.data.data.dailyDoneList);
        setRecentDoneListData(response.data.data.recentDoneList);

        const currentCycleDays = getCurrentCycleDays();
        const deadline = getDeadline();

        // 일일 평균 작업량
        if (currentCycleDays > 0) {
          const dailyAverageTasks = adCountData.myDoneAd / currentCycleDays;
          setAverageTaskCount(dailyAverageTasks);
        }

        // 하루 권장량
        if (deadline > 0) {
          const recommendedTasks = adCountData.myNotDoneAd / deadline;
          setRecommendedTaskCount(recommendedTasks);
        }
      })
      .catch((error) => {
        console.error('데이터 조회 실패:', error);
      });
  }, []);

  const movemanageTask = () => {
    navigate('/admin/manage-task');
  };

  const moveapproveUser = () => {
    navigate('/admin/approve-user');
  };

  return (
    <section className="task-wrapper">
      <div className="task-wrapper__deadline">
        <div className="task-wrapper__info">
          마감일
          <div className="task-wrapper__info__subtitle">D-{getDeadline()}</div>
        </div>
        <img src={targetIcon} alt="targetIcon" />
      </div>
      {isAdminRoute ? (
        <>
          <div className="task-wrapper__dailytask">
            <div className="task-wrapper__info">
              <div className="task-wrapper__title" onClick={movemanageTask}>
                작업 미배분량
                <img src={rightArrow} alt="작업배분관리 바로가기" />
              </div>
              <div className="task-wrapper__info__subtitle">{totalNotDoneAdData}건</div>
            </div>
            <img src={adminCase} alt="adminCaseIcon" />
          </div>
          <div className="task-wrapper__dailyrecommend">
            <div className="task-wrapper__info">
              <div className="task-wrapper__title" onClick={moveapproveUser}>
                가입 미승인 회원
                <img src={rightArrow} alt="가입 요청 관리 바로가기" />
              </div>
              <div className="task-wrapper__info__subtitle">5명</div>
            </div>
            <img src={userIcon} alt="userIcon" />
          </div>
        </>
      ) : (
        <>
          <div className="task-wrapper__dailytask">
            <div className="task-wrapper__info">
              일일 평균 작업량
              <div className="task-wrapper__info__subtitle">{averageTaskCount.toFixed(1)}건</div>
            </div>
            <img src={caseIcon} alt="caseIcon" />
          </div>
          <div className="task-wrapper__dailyrecommend">
            <div className="task-wrapper__info">
              하루 권장량
              <div className="task-wrapper__info__subtitle">{recommendedTaskCount.toFixed(1)}건</div>
            </div>
            <img src={checkIcon} alt="checkIcon" />
          </div>
        </>
      )}
    </section>
  );
};

export default TaskSummary;
