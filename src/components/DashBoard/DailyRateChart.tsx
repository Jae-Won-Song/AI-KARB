import React from 'react';
import dailyRate from '../../assets/daily-rate.svg';

const DailyrateChart = () => {
  return (
    <div className="dailyRateWrapper">
      <h1 className="dailyRateWrapper__title">오늘의 달성률</h1>
      <img src={dailyRate} alt="eclipse" />
      <div className="dailyRateWrapper__subtitle">
        <div className="dailyRateWrapper__subtitle__legend">
          완료
          <div>42건</div>
        </div>
        <div className="dailyRateWrapper__subtitle__legend">
          잔여
          <div>21건</div>
        </div>
      </div>
    </div>
  );
};

export default DailyrateChart;
