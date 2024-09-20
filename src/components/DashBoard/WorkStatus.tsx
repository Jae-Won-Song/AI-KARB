import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import fetchDashBoardData from '../../api/dashboard/dashboardApi';
import allTask from '../../assets/all-task.png';
import notDone from '../../assets/not-done-task.png';
import doneTask from '../../assets/done-task.png';

const WorkStatus = () => {
  const [myAdData, setMyAdData] = useState(0); // 내 작업 건수
  const [myDoneAdData, setMyDoneAdData] = useState(0); // 내 완료된 작업
  const [myNotDoneAdData, setMyNotDoneAdData] = useState(0); // 내 완료되지 않은 작업
  const [totalAdData, setTotalAdData] = useState(0); // 회사가 보유한 총 광고수
  const [totalDoneAdData, setTotalDoneAdData] = useState(0); // 전체 광고 중 완료건
  const [totalNotDoneAdData, setTotalNotDoneAdData] = useState(0); // 전체 광고 중 미완료건

  const location = useLocation();
  const isAdminRoute = location.pathname === '/dashboard/admin';

  useEffect(() => {
    fetchDashBoardData()
      .then((response) => {
        const adCountData = response.data.data.adCount;
        setMyAdData(adCountData.myAd);
        setMyDoneAdData(adCountData.myDoneAd);
        setMyNotDoneAdData(adCountData.myNotDoneAd);
        setTotalAdData(adCountData.totalAd);
        setTotalDoneAdData(adCountData.totalDoneAd);
        setTotalNotDoneAdData(adCountData.totalNotDoneAd);
      })
      .catch((error) => {
        console.error('데이터 조회 실패:', error);
      });
  }, []);

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
                      {myAdData}
                      <div className="workStatus-wrapper__task__info__counts">건</div>
                    </div>
                  )}
                </div>
                <div className="workStatus-wrapper__task__info__subcount">
                  {!isAdminRoute && <div className="workStatus-wrapper__task__info__subcount__total">Total</div>}
                  {!isAdminRoute && (
                    <div className="workStatus-wrapper__task__info__admin-count">
                      {totalAdData}
                      <div className="workStatus-wrapper__task__info__count__text">건</div>
                    </div>
                  )}
                  {isAdminRoute && (
                    <div className="workStatus-wrapper__task__info__admin-counts">
                      {totalAdData}
                      <div className="workStatus-wrapper__task__info__counts">건</div>
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
                      {myDoneAdData}
                      <div className="workStatus-wrapper__task__info__counts">건</div>
                    </div>
                  )}
                </div>
                <div className="workStatus-wrapper__task__info__subcount">
                  {!isAdminRoute && <div className="workStatus-wrapper__task__info__subcount__total">Total</div>}
                  {!isAdminRoute && (
                    <div className="workStatus-wrapper__task__info__admin-count">
                      {totalDoneAdData}
                      <div className="workStatus-wrapper__task__info__count__text">건</div>
                    </div>
                  )}
                  {isAdminRoute && (
                    <div className="workStatus-wrapper__task__info__admin-counts">
                      {totalDoneAdData}
                      <div className="workStatus-wrapper__task__info__counts">건</div>
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
                      {myNotDoneAdData}
                      <div className="workStatus-wrapper__task__info__counts">건</div>
                    </div>
                  )}
                </div>
                <div className="workStatus-wrapper__task__info__subcount">
                  {!isAdminRoute && <div className="workStatus-wrapper__task__info__subcount__total">Total</div>}
                  {!isAdminRoute && (
                    <div className="workStatus-wrapper__task__info__admin-count">
                      {totalNotDoneAdData}
                      <div className="workStatus-wrapper__task__info__count__text">건</div>
                    </div>
                  )}
                  {isAdminRoute && (
                    <div className="workStatus-wrapper__task__info__admin-counts">
                      {totalNotDoneAdData}
                      <div className="workStatus-wrapper__task__info__counts">건</div>
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
