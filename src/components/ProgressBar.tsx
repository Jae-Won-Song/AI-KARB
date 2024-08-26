import React from 'react';

interface Progress {
  progressGauge?: number;
  width?: number;
  height?: number;
  className?: string;
}

const ProgressBar = ({ progressGauge = 0, width = 100, height = 20, className = '' }: Progress) => {
  const widthProgress = progressGauge > 100 ? 100 : progressGauge < 0 ? 0 : progressGauge;

  return (
    <div className="progressBar-wrapper">
      <div className="progressBar-wrapper__mainbar">
        <div className="progressBar-wrapper__mainbar__gauge" style={{ width: `${width}%` }} />
      </div>
      {<div className="progressBar_wrapper__mainbar__rate">{progress}</div>}{' '}
    </div>
  );
};

export default ProgressBar;
