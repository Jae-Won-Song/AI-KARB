import calendarIcon from '../assets/icon-calendar.svg';

const Calendar = () => {
  return (
    <div className="Calendar">
      <div className="Calendar__date">2024년 8월 1일차</div>
      <img src={calendarIcon} alt="달력 아이콘" className="Calendar__img" />
    </div>
  );
};

export default Calendar;
