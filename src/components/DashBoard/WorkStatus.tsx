import { useLocation } from 'react-router-dom';
import allTask from '../../assets/all-task.png';
import notDone from '../../assets/not-done-task.png';
import doneTask from '../../assets/done-task.png';

const WorkStatus = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/dashboard/admin';

  return (
    <section>
      <div style={{ height: isAdminRoute ? '28.125vh' : '28.125vh' }} className="workStatus-wrapper">
        {!isAdminRoute && <h1 className="workStatus-wrapper__title">작업현황</h1>}
        {isAdminRoute && <h1 className="workStatus-wrapper__title">전체 작업 현황</h1>}
        <div className="workStatus-wrapper__task">
          <div className="workStatus-wrapper__task__allTask">
            <div className="workStatus-wrapper__task__image-container">
              <img className="workStatus-wrapper__task__image-container-img" src={allTask} alt="전체 작업 이미지" />

              <div className="workStatus-wrapper__task__info">
                <div className="workStatus-wrapper__task__info__wrapper">
                  <div className="workStatus-wrapper__taskinfo__title">전체작업</div>
                  {!isAdminRoute && (
                    <div className="workStatus-wrapper__task__info__count">
                      421
                      <div className="workStatus-wrapper__task__info__counts">건</div>
                    </div>
                  )}
                </div>
                <div className="workStatus-wrapper__task__info__subcount">
                  {!isAdminRoute && <div className="workStatus-wrapper__task__info__subcount__total">Total</div>}
                  {!isAdminRoute && (
                    <div className="workStatus-wrapper__task__info__admin-count">
                      6,201<div className="workStatus-wrapper__task__info__count__text">건</div>
                    </div>
                  )}
                  {isAdminRoute && (
                    <div className="workStatus-wrapper__task__info__admin-counts">
                      6,242<div className="workStatus-wrapper__task__info__counts">건</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="workStatus-wrapper__task__doneTask">
            <div className="workStatus-wrapper__task__image-container">
              <img className="workStatus-wrapper__task__image-container-img" src={doneTask} alt="완료 작업 이미지" />

              <div className="workStatus-wrapper__task__info">
                <div className="workStatus-wrapper__task__info__wrapper">
                  <div className="workStatus-wrapper__task__info__title">완료건</div>
                  {!isAdminRoute && (
                    <div className="workStatus-wrapper__task__info__count">
                      123<div className="workStatus-wrapper__task__info__counts">건</div>
                    </div>
                  )}
                </div>
                <div className="workStatus-wrapper__task__info__subcount">
                  {!isAdminRoute && <div className="workStatus-wrapper__task__info__subcount__total">Total</div>}
                  {!isAdminRoute && (
                    <div className="workStatus-wrapper__task__info__admin-count">
                      6,201<div className="workStatus-wrapper__task__info__count__text">건</div>
                    </div>
                  )}
                  {isAdminRoute && (
                    <div className="workStatus-wrapper__task__info__admin-counts">
                      1,724<div className="workStatus-wrapper__task__info__counts">건</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="workStatus-wrapper__task__notDoneTask">
            <div className="workStatus-wrapper__task__image-container">
              <img className="workStatus-wrapper__task__image-container-img" src={notDone} alt="미완료 작업 이미지" />

              <div className="workStatus-wrapper__task__info">
                <div className="workStatus-wrapper__task__info__wrapper">
                  <div className="workStatus-wrapper__task__info__title">미완료건</div>
                  {!isAdminRoute && (
                    <div className="workStatus-wrapper__task__info__count">
                      298<div className="workStatus-wrapper__task__info__counts">건</div>
                    </div>
                  )}
                </div>
                <div className="workStatus-wrapper__task__info__subcount">
                  {!isAdminRoute && <div className="workStatus-wrapper__task__info__subcount__total">Total</div>}
                  {!isAdminRoute && (
                    <div className="workStatus-wrapper__task__info__admin-count">
                      6,201<div className="workStatus-wrapper__task__info__count__text">건</div>
                    </div>
                  )}
                  {isAdminRoute && (
                    <div className="workStatus-wrapper__task__info__admin-counts">
                      4,477<div className="workStatus-wrapper__task__info__counts">건</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkStatus;
