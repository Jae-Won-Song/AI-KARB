// import allTask from '../../assets/all-task.png';
// import notDone from '../../assets/not-done-task.png';
// import doneTask from '../../assets/done-task.png';

const WorkStatus = () => {
  return (
    <div className="workStatus-wrapper">
      <h1 className="workStatus-wrapper__title">작업현황</h1>
      <div className="workStatus-wrapper__task">
        <div className="workStatus-wrapper__task__allTask">
          <div className="workStatus-wrapper__task__image-container">
            {/* <img src={allTask} alt="전체 작업 이미지" /> */}
            <div className="workStatus-wrapper__task__info">
              <div className="workStatus-wrapper__task__info__wrapper">
                <div className="workStatus-wrapper__task__info__title">전체작업</div>
                <div className="workStatus-wrapper__task__info__count">421</div>
              </div>
              <div className="workStatus-wrapper__task__info__subcount">
                <div className="workStatus-wrapper__task__info__subcount__total">Total</div>
                <div>6,201</div>
              </div>
            </div>
          </div>
        </div>
        <div className="workStatus-wrapper__task__doneTask">
          <div className="workStatus-wrapper__task__image-container">
            {/* <img src={doneTask} alt="전체 작업 이미지" /> */}
            <div className="workStatus-wrapper__task__info">
              <div className="workStatus-wrapper__task__info__wrapper">
                <div className="workStatus-wrapper__task__info__title">완료건</div>
                <div className="workStatus-wrapper__task__info__count">123</div>
              </div>
              <div className="workStatus-wrapper__task__info__subcount">
                <div className="workStatus-wrapper__task__info__subcount__total">Total</div>
                <div>1,724</div>
              </div>
            </div>
          </div>
        </div>
        <div className="workStatus-wrapper__task__notDoneTask">
          <div className="workStatus-wrapper__task__image-container">
            {/* <img src={notDone} alt="미완료 작업 이미지" /> */}
            <div className="workStatus-wrapper__task__info">
              <div className="workStatus-wrapper__task__info__wrapper">
                <div className="workStatus-wrapper__task__info__title">미완료건</div>
                <div className="workStatus-wrapper__task__info__count">298</div>
              </div>
              <div className="workStatus-wrapper__task__info__subcount">
                <div className="workStatus-wrapper__task__info__subcount__total">Total</div>
                <div>4,477</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkStatus;
