import React from 'react';
// import targetIcon from '../../assets/icon-target.svg';
// import caseIcon from '../../assets/icon-case.svg';
// import checkIcon from '../../assets/icon-check.png';

const TaskSummary = () => {
  return (
    <div className="task-wrapper">
      <div className="task-wrapper__deadline">
        <h2 className="task-wrapper__info">
          마감일
          <h3 className="task-wrapper__info__subtitle">D-2</h3>
        </h2>
        {/* <img src={targetIcon} alt="마감일 아이콘" /> */}
      </div>
      <div className="task-wrapper__dailytask">
        <h2 className="task-wrapper__info">
          일일 평균 작업량
          <h3 className="task-wrapper__info__subtitle">81건</h3>
        </h2>
        {/* <img src={caseIcon} alt="작업량 아이콘" /> */}
      </div>
      <div className="task-wrapper__dailyrecommend">
        <h2 className="task-wrapper__info">
          하루 권장량
          <h3 className="task-wrapper__info__subtitle">50건</h3>
        </h2>
        {/* <img src={checkIcon} alt="체크 아이콘" /> */}
      </div>
    </div>
  );
};

export default TaskSummary;
