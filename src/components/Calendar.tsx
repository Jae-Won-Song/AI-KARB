import { useState } from 'react';
import calendarIcon from '../assets/icon-calendar.svg';
import arrowDown from '../assets/arrow-down.svg';

const Calendar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="Calendar">
      <div className={`Calendar__wrapper ${isActive ? 'Calendar__wrapper--active' : ''}`} onClick={toggleActive}>
        <div className="Calendar__wrapper__date">2024년 8월 1차</div>
        <img src={calendarIcon} alt="달력 아이콘" className="Calendar__wrapper__img" />
      </div>

      {isActive && (
        <div className="Calendar__dropdown">
          <div className="Calendar__dropdown__wrapper">
            <div className="Calendar__dropdown__wrapper_year">
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

          <div className="Calendar__dropdown__wrapper_select-year">
            <div className="Calendar__dropdown__wrapper_select">2024</div>
            <div className="Calendar__dropdown__wrapper_select">2023</div>
            <div className="Calendar__dropdown__wrapper_select">2022</div>
            <div className="Calendar__dropdown__wrapper_select">2021</div>
            <div className="Calendar__dropdown__wrapper_select">2020</div>
          </div>

          <div className="Calendar__dropdown_reset-wrapper">
            <span className="Calendar__dropdown_reset-span">초기화</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
