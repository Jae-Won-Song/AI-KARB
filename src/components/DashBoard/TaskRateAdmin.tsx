const TaskRateAdmin = () => {
  const totalTasks = 5000;
  const completedTasks = 3000;
  const completionRate = (completedTasks / totalTasks) * 180;
  const percentage = Math.round((completedTasks / totalTasks) * 100);

  return (
    <section className="dailyRateContainer">
      <h1 className="dailyRateContainer__title">작업 진행률</h1>
      <div className="dailyRateContainer__gauge">
        <div className="adminGauge">
          <div
            className="adminGauge__rate"
            style={{
              background: `conic-gradient(
                from 0deg, 
                #349bcd 0deg, 
                #006597 ${completionRate}deg,
                transparent ${completionRate}deg,
                transparent 360deg
              )`,
            }}
          />
          <div className="adminGauge__center">
            <div className="adminGauge__center__percentage">{percentage}%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskRateAdmin;
