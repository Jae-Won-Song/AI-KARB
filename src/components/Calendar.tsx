import { useState } from 'react';
import calendarIcon from '../assets/icon-calendar.svg';
import arrowDown from '../assets/arrow-down.svg';

const Calendar = () => {
  const [isActiveMain, setIsActiveMain] = useState(false);
  const [isActiveYear, setIsActiveYear] = useState(false);

  const toggleActiveMain = () => {
    setIsActiveMain(!isActiveMain);
  };

  const toggleActiveYear = () => {
    setIsActiveYear(!isActiveYear);
  };

  const handleBlur = () => {
    setIsActiveMain(false);
    setIsActiveYear(false);
  };

  return (
    <button className="Calendar" onBlur={handleBlur}>
      <div
        className={`Calendar__wrapper ${isActiveMain ? 'Calendar__wrapper--active' : ''}`}
        onClick={toggleActiveMain}>
        <div className="Calendar__wrapper__date">2024년 8월 1차</div>
        <img src={calendarIcon} alt="달력 아이콘" className="Calendar__wrapper__img" />
      </div>

      {isActiveMain && (
        <div className="Calendar__dropdown">
          <div className="Calendar__dropdown__wrapper">
            <div
              className={`Calendar__dropdown__wrapper_year ${isActiveYear ? 'Calendar__dropdown__wrapper_year--active' : ''}`}
              onClick={toggleActiveYear}>
              <div className="Calendar__dropdown__wrapper_year_span">2024</div>
              <img src={arrowDown} alt="아래 화살표" className="Calendar__dropdown__wrapper_year_img" />
            </div>
            년
            <div className="Calendar__dropdown__wrapper_month">
              <div className="Calendar__dropdown__wrapper_month_span">8</div>
              <img src={arrowDown} alt="아래 화살표" className="Calendar__dropdown__wrapper_month_img" />
            </div>
            월
            <div className="Calendar__dropdown__wrapper_week">
              <div className="Calendar__dropdown__wrapper_week_span">1</div>
              <img src={arrowDown} alt="아래 화살표" className="Calendar__dropdown__wrapper_week_img" />
            </div>
            차
          </div>

          {isActiveYear && (
            <div className="Calendar__dropdown__wrapper_select-year">
              <div className="Calendar__dropdown__wrapper_select">2024</div>
              <div className="Calendar__dropdown__wrapper_select">2023</div>
              <div className="Calendar__dropdown__wrapper_select">2022</div>
              <div className="Calendar__dropdown__wrapper_select">2021</div>
              <div className="Calendar__dropdown__wrapper_select">2020</div>
            </div>
          )}

          <div className="Calendar__dropdown_reset-wrapper">
            <span className="Calendar__dropdown_reset-span">초기화</span>
          </div>
        </div>
      )}
    </button>
  );
};

export default Calendar;
