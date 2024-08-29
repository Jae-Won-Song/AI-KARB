const date = new Date();
const today = `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
const monthSplit = date.getDate() <= 14 ? '1차' : '2차';

const DashBoardDate = () => {
  return (
    <div className="date-wrapper">
      <div>
        <h2 className="date-wrapper__today">Today </h2>
      </div>
      <div className="date-wrapper__info">
        <div className="date-wrapper__info__today">{today}</div>
        <div className="date-wrapper__info__split">{`${date.getMonth() + 1}월 ${monthSplit}`}</div>
      </div>
    </div>
  );
};

export default DashBoardDate;
