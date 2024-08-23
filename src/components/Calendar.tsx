import { useEffect, useState } from 'react';
import calendarIcon from '../assets/icon-calendar.svg';
import arrowDown from '../assets/arrow-down.svg';

const Calendar = () => {
  const [isActiveMain, setIsActiveMain] = useState(false);
  const [isActiveYear, setIsActiveYear] = useState(false);
  const [isActiveMonth, setIsActiveMonth] = useState(false);
  const [isActiveWeek, setIsActiveWeek] = useState(false);

  const toggleActiveMain = () => {
    setIsActiveMain(!isActiveMain);
  };

  const toggleActiveYear = () => {
    setIsActiveYear(!isActiveYear);
  };

  const toggleActiveMonth = () => {
    setIsActiveMonth(!isActiveMonth);
  };

  const toggleActiveWeek = () => {
    setIsActiveWeek(!isActiveWeek);
  };

  // 컴포넌트 밖을 클릭하면 blur 처리
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (target && !target.closest('.Calendar')) {
      setIsActiveMain(false);
      setIsActiveYear(false);
      setIsActiveMonth(false);
      setIsActiveWeek(false);
    }
  };

  useEffect(() => {
    if (isActiveMain) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isActiveMain]);

  // 포커즈 된 날짜 상태 감지
  const years = ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'];
  const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  const weeks = ['1', '2', '3', '4', '5'];

  const [selectedIndex, setSelectedIndex] = useState({ year: 0, month: 0, week: 0 });

  const handleSelected = (type: 'year' | 'month' | 'week', index: number) => {
    setSelectedIndex((prevState) => ({
      ...prevState,
      [type]: index,
    }));
  };

  const renderDropdownList = (items: string[], type: 'year' | 'month' | 'week') => {
    return items.map((item, index) => (
      <div
        key={index}
        className={`Calendar__dropdown__wrapper_select ${
          selectedIndex[type] === index ? 'selected' : ''
        } ${selectedIndex[type] === index + 1 ? 'previous-selected' : ''}`}
        onClick={() => handleSelected(type, index)}>
        {item}
      </div>
    ));
  };

  return (
    <div className="Calendar">
      <button
        className={`Calendar__wrapper ${isActiveMain ? 'Calendar__wrapper--active' : ''}`}
        onClick={toggleActiveMain}>
        <div className="Calendar__wrapper__date">2024년 8월 1차</div>
        <img src={calendarIcon} alt="달력 아이콘" className="Calendar__wrapper__img" />
      </button>

      {isActiveMain && (
        <div className="Calendar__dropdown">
          <div className="Calendar__dropdown__wrapper">
            <div
              className={`Calendar__dropdown__wrapper_year ${isActiveYear ? 'Calendar__dropdown__wrapper_year--active' : ''}`}
              onClick={toggleActiveYear}>
              <div className="Calendar__dropdown__wrapper_year_span">2024</div>
              <img src={arrowDown} alt="아래 화살표" className="Calendar__dropdown__wrapper_year_img" />
            </div>
            <span className="Calendar__dropdown__wrapper_span">년</span>
            <div
              className={`Calendar__dropdown__wrapper_month ${isActiveYear ? 'Calendar__dropdown__wrapper_month--active' : ''}`}
              onClick={toggleActiveMonth}>
              <div className="Calendar__dropdown__wrapper_month_span">8</div>
              <img src={arrowDown} alt="아래 화살표" className="Calendar__dropdown__wrapper_month_img" />
            </div>
            <span className="Calendar__dropdown__wrapper_span">월</span>
            <div
              className={`Calendar__dropdown__wrapper_week ${isActiveWeek ? 'Calendar__dropdown__wrapper_week--active' : ''}`}
              onClick={toggleActiveWeek}>
              <div className="Calendar__dropdown__wrapper_week_span">1</div>
              <img src={arrowDown} alt="아래 화살표" className="Calendar__dropdown__wrapper_week_img" />
            </div>
            <span className="Calendar__dropdown__wrapper_span">차</span>
          </div>

          {isActiveYear && (
            <div className="Calendar__dropdown__wrapper_select-year">{renderDropdownList(years, 'year')}</div>
          )}

          {isActiveMonth && (
            <div className="Calendar__dropdown__wrapper_select-month">{renderDropdownList(months, 'month')}</div>
          )}

          {isActiveWeek && (
            <div className="Calendar__dropdown__wrapper_select-week">{renderDropdownList(weeks, 'week')}</div>
          )}

          <div className="Calendar__dropdown_reset-wrapper">
            <span className="Calendar__dropdown_reset-span">초기화</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
