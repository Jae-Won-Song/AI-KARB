import { useLocation, useNavigate } from 'react-router-dom';
import targetIcon from '../../assets/icon-target.svg';
import caseIcon from '../../assets/icon-case.svg';
import adminCase from '../../assets/case-admin.svg';
import checkIcon from '../../assets/icon-check.svg';
import userIcon from '../../assets/user-icon.svg';
import rightArrow from '../../assets/chevron-right.svg';

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
              <div className="task-wrapper__title" onClick={movemanageTask}>
                작업 미배분량
                <img src={rightArrow} alt="작업배분관리 바로가기" />
              </div>
              <div className="task-wrapper__info__subtitle">30건</div>
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
