const TaskRateAdmin = () => {
  const totalTasks = 50;
  const completedTasks = 40;
  const completionRate = (completedTasks / totalTasks) * 75;
  const percentage = Math.round((completedTasks / totalTasks) * 100);

  return (
    <section className="dailyRateWrapper">
      <h1 className="dailyRateWrapper__title">오늘의 달성률</h1>
      <div className="dailyRateWrapper__gauge">
        <div className="gauge">
          <div className="gauge__circle">
            <div
              className="gauge__rate"
              style={{
                background: `conic-gradient(#006597 0deg, #006597 ${completionRate}%, transparent ${completionRate}% 270deg)`,
              }}
            />
          </div>
          <div className="gauge__center" />
          <div className="gauge__center__percentage">{percentage}%</div>
        </div>
      </div>
      <div className="dailyRateWrapper__subtitle">
        <div className="dailyRateWrapper__subtitle__legend">
          {/* <img src={rateDone} alt="rateDone" /> */}
          <div className="dailyRateWrapper__subtitle__legend__main">완료</div>
          <div className="dailyRateWrapper__subtitle__legend__compare">{completedTasks}건</div>
        </div>
        <div className="dailyRateWrapper__subtitle__legend">
          {/* <img src={rateNotDone} alt="rateNotDone" /> */}
          <div className="dailyRateWrapper__subtitle__legend__main">잔여</div>
          <div className="dailyRateWrapper__subtitle__legend__compare">{totalTasks - completedTasks}건</div>
        </div>
      </div>
    </section>
  );
};

export default TaskRateAdmin;
