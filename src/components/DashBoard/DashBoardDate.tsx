const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const getMonth = () => {
  const date = new Date();
  return date.getMonth() + 1;
};

export const getDate = () => {
  const date = new Date();
  return date.getDate();
};

const getLastDay = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
};

export const getCurrentCycleDays = () => {
  const year = getYear();
  const month = getMonth();
  const currentDate = getDate();

  const lastDay = getLastDay(year, month);
  if (currentDate <= 14) {
    // 1차
    return currentDate;
  }
  // 2차
  return currentDate - 14;
};

export const getDeadline = (day = getDate()) => {
  const year = getYear();
  const month = getMonth();
  const lastDay = getLastDay(year, month);

  if (day <= 14) {
    return 15 - day;
  }
  return lastDay - day;
};

const DashBoardDate = () => {
  const today = `${getYear()}.${getMonth()}.${getDate()}`;
  const monthSplit = getDate() <= 14 ? '1차' : '2차';
  const deadline = getDeadline();

  return (
    <section className="date-wrapper">
      <div>
        <h2 className="date-wrapper__today">Today </h2>
      </div>
      <div className="date-wrapper__info">
        <div className="date-wrapper__info__today">{today}</div>
        <div className="date-wrapper__info__split">{`${getMonth()}월 ${monthSplit}`}</div>
      </div>
    </section>
  );
};

export default DashBoardDate;
