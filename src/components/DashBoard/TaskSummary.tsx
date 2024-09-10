import { useLocation, useNavigate } from 'react-router-dom';
import fetchDashBoardData from '../../api/dashboard/dashboardApi';
import targetIcon from '../../assets/icon-target.svg';
import caseIcon from '../../assets/icon-case.svg';
import adminCase from '../../assets/case-admin.svg';
import checkIcon from '../../assets/icon-check.svg';
import userIcon from '../../assets/user-icon.svg';
import rightArrow from '../../assets/chevron-right.svg';
import { getDeadline } from './DashBoardDate';

const TaskSummary = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/dashboard/admin';
  const navigate = useNavigate();
  const movemanageTask = () => {
    navigate('/admin/manage-task');
  };
  const moveapproveUser = () => {
    navigate('/admin/approve-user');
  };

  fetchDashBoardData()
    .then((response) => {
      const { data } = response;

      const adCountData = data.data.adCount;
      const myAdData = adCountData.myAd;
      const myDoneAdData = adCountData.MyDoneAd;
      const myNotDoneAdData = adCountData.myNotDoneAd;
      const totalAdData = adCountData.totalAd;
      const totalDoneAdData = adCountData.totalDoneAd;
      const totalNotDoneAdData = adCountData.totalNotDoneAd;

      const dailyDoneListData = response.data.data.dailyDoneList;
      const recentDoneListData = response.data.data.recentDoneList;
    })
    .catch((error) => {
      console.error('데이터 조회 실패:', error);
    });

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
                잔여 배분량
                <img src={rightArrow} alt="잔여 배분량 바로가기" />
              </div>
              <div className="task-wrapper__info__subtitle">30건</div>
            </div>
            <img src={adminCase} alt="adminCaseIcon" />
          </div>
          <div className="task-wrapper__dailyrecommend">
            <div className="task-wrapper__info">
              <div className="task-wrapper__title" onClick={moveapproveUser}>
                가입 미승인 회원
                <img src={rightArrow} alt="가입 미승인 회원 바로가기" />
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
              <div className="task-wrapper__info__subtitle">81건</div>
            </div>
            <img src={caseIcon} alt="caseIcon" />
          </div>
          <div className="task-wrapper__dailyrecommend">
            <div className="task-wrapper__info">
              하루 권장량
              <div className="task-wrapper__info__subtitle">50건</div>
            </div>
            <img src={checkIcon} alt="checkIcon" />
          </div>
        </>
      )}
    </section>
  );
};

export default TaskSummary;
