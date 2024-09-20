interface Progress {
  progressGauge?: number;
  width?: number;
  height?: number;
  className?: string;
}

const ProgressBar = ({ progressGauge = 0, width = 100, height = 20, className = '' }: Progress) => {
  const widthProgress = progressGauge > 100 ? 100 : progressGauge < 0 ? 0 : progressGauge;

  return (
    <div className="progressBar-container">
      <div className={`progressBar__${className}`} style={{ width: `${width}vw`, height: `${height}px` }}>
        <div
          className={`progressBar__gauge__${className}`}
          style={{ width: `${widthProgress}%`, height: `${height}px` }}
        />
      </div>
      <div className="progressBar__rate">{widthProgress}%</div>
    </div>
  );
};

export default ProgressBar;
