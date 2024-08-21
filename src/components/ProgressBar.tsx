import React from 'react';

interface Progress {
  width: number;
}

const ProgressBar = () => {
  const maxItem = 5;
  const availableItem = 1;
  const width = 100 - (availableItem * 100) / maxItem;

  return (
    <div className="progressBar-container">
      <div className="progressBar">
        <div className="progressBar__gauge" style={{ width: `${width}%` }} />
      </div>
      <div className="progressBar__rate">80%</div>
    </div>
  );
};

export default ProgressBar;
