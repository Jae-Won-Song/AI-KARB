import { useLocation } from 'react-router-dom';
import targetIcon from '../../assets/icon-target.svg';
import caseIcon from '../../assets/icon-case.svg';
import checkIcon from '../../assets/icon-check.svg';
import userIcon from '../../assets/user-icon.svg';

const TaskSummary = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/dashboard/admin';

  return (
    <section className="task-wrapper">
      <div className="task-wrapper__deadline">
        <div className="task-wrapper__info">
          마감일
          <div className="task-wrapper__info__subtitle">D-2</div>
        </div>
        <img src={targetIcon} alt="targetIcon" />
      </div>
      {isAdminRoute ? (
        <>
          <div className="task-wrapper__dailytask">
            <div className="task-wrapper__info">
              잔여 배분량
              <div className="task-wrapper__info__subtitle">30건</div>
            </div>
            <img src={caseIcon} alt="caseIcon" />
          </div>
          <div className="task-wrapper__dailyrecommend">
            <div className="task-wrapper__info">
              가입 미승인 회원
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
