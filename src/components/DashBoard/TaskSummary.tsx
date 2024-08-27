import targetIcon from '../../assets/icon-target.svg';
import caseIcon from '../../assets/icon-case.svg';
import checkIcon from '../../assets/icon-check.svg';

const TaskSummary = () => {
  return (
    <section className="task-wrapper">
      <div className="task-wrapper__deadline">
        <div className="task-wrapper__info">
          마감일
          <div className="task-wrapper__info__subtitle">D-2</div>
        </div>
        <img src={targetIcon} alt="마감일 아이콘" />
      </div>
      <div className="task-wrapper__dailytask">
        <div className="task-wrapper__info">
          일일 평균 작업량
          <div className="task-wrapper__info__subtitle">81건</div>
        </div>
        <img src={caseIcon} alt="작업량 아이콘" />
      </div>
      <div className="task-wrapper__dailyrecommend">
        <div className="task-wrapper__info">
          하루 권장량
          <div className="task-wrapper__info__subtitle">50건</div>
        </div>
        <img src={checkIcon} alt="체크 아이콘" />
      </div>
    </section>
  );
};

export default TaskSummary;
