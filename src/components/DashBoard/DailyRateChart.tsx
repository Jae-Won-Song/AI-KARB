import React from 'react';

interface DailyChart {
  dailyGauge?: number; // 게이지 값 (0 ~ 100)
  size?: number; // 원형 게이지의 크기
  className?: string; // 추가적인 클래스 이름
}

const DailyRateChart = ({ dailyGauge = 84, size = 150, className = '' }: DailyChart) => {
  const gaugeValue = dailyGauge > 100 ? 100 : dailyGauge < 0 ? 0 : dailyGauge;

  return (
    <div className={`dailychart-container ${className}`}>
      <div className="dailychartBar">
        <div className="dailychartBar__background" />
        <div
          className="dailychartBar__gauge"
          // style={{
          //   background: `conic-gradient(
          //     #006597 0deg ${gaugeValue * 2.7}deg,
          //     transparent ${gaugeValue * 2.7}deg 270deg
          //   )`,
          // }}
        />
        <div className="dailychartBar__center">
          <span className="dailychartBar__rate">{gaugeValue}%</span>
        </div>
      </div>
    </div>
  );
};

export default DailyRateChart;
