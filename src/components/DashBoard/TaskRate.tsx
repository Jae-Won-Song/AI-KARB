import ProgressBar from '../ProgressBar';
import myrate from '../../assets/icon-my-rate.svg';
import allrate from '../../assets/icon-all-rate.svg';

const TaskRate = () => {
  return (
    <section className="rate-wrapper">
      <div className="rate-wrapper__title">작업 진행률</div>
      <div className="rate-wrapper__mine">
        <div className="rate-wrapper__rate">
          <img src={myrate} alt="my-rate" />
          <div className="rate-wrapper__label">나</div>
        </div>
        <ProgressBar width={20.156} height={15} progressGauge={10} className="mine" />
        <div className="rate-wrapper__text">123 / 421건</div>
      </div>
      <div className="rate-wrapper__all">
        <div className="rate-wrapper__rate">
          <img src={allrate} alt="all-rate" />
          <div className="rate-wrapper__label">전체</div>
        </div>
        <ProgressBar width={20.156} height={15} progressGauge={27} className="all" />
        <div className="rate-wrapper__text">1724 / 6201건</div>
      </div>
    </section>
  );
};

export default TaskRate;
