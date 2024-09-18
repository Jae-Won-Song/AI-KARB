import { useState, useEffect } from 'react';
import fetchDashBoardData from '../../api/dashboard/dashboardApi';
import ProgressBar from '../ProgressBar';
import myrate from '../../assets/icon-my-rate.svg';
import allrate from '../../assets/icon-all-rate.svg';

const TaskRate = () => {
  const [myAdData, setMyAdData] = useState(0); // 내 작업 건수
  const [myDoneAdData, setMyDoneAdData] = useState(0); // 내 완료된 작업
  const [totalAdData, setTotalAdData] = useState(0); // 회사가 보유한 총 광고수
  const [totalDoneAdData, setTotalDoneAdData] = useState(0); // 전체 광고 중 완료건

  useEffect(() => {
    fetchDashBoardData()
      .then((response) => {
        const adCountData = response.data.data.adCount;
        setMyAdData(adCountData.myAd);
        setMyDoneAdData(adCountData.myDoneAd);
        setTotalAdData(adCountData.totalAd);
        setTotalDoneAdData(adCountData.totalDoneAd);
      })
      .catch((error) => {
        console.error('데이터 조회 실패:', error);
      });
  }, []);

  const myProgress = myAdData > 0 ? Math.round((myDoneAdData / myAdData) * 100) : 0;
  const totalProgress = totalAdData > 0 ? Math.round((totalDoneAdData / totalAdData) * 100) : 0;

  return (
    <section className="rate-wrapper">
      <div className="rate-wrapper__title">작업 진행률</div>
      <div className="rate-wrapper__mine">
        <div className="rate-wrapper__rate">
          <img src={myrate} alt="my-rate" />
          <div className="rate-wrapper__label">나</div>
        </div>
        <ProgressBar width={20.156} height={15} progressGauge={myProgress} className="mine" />
        <div className="rate-wrapper__text">
          {myDoneAdData} / {myAdData}건
        </div>
      </div>
      <div className="rate-wrapper__all">
        <div className="rate-wrapper__rate">
          <img src={allrate} alt="all-rate" />
          <div className="rate-wrapper__label">전체</div>
        </div>
        <ProgressBar width={20.156} height={15} progressGauge={totalProgress} className="all" />
        <div className="rate-wrapper__text">
          {totalDoneAdData} / {totalAdData}건
        </div>
      </div>
    </section>
  );
};

export default TaskRate;
