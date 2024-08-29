interface progressBarProps {
  progress: number;
}
const ProgressBar = ({ progress }: progressBarProps) => {
  const maxItem = 5;
  const availableItem = 1;
  const width = 100 - (availableItem * 100) / maxItem;

  return (
    <div className="progressBar-container">
      <div className="progressBar">
        <div className="progressBar__gauge" style={{ width: `${width}%` }} />
      </div>
      {<div className="progressBar__rate">{progress}</div>}{' '}
    </div>
  );
};

export default ProgressBar;
