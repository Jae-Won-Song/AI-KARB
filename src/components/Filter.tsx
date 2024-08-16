import { useState } from 'react';
import FilterIcon from '../assets/icon-filter.svg';
import FilterIconActive from '../assets/icon-filter-a.svg';

const Filter = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <button className={`filterBtn ${isActive ? 'filterBtn--active' : ''}`} onClick={toggleActive} onBlur={handleBlur}>
      <span className="filterBtn__span">필터</span>
      <div className="filterBtn__icon">
        <img src={isActive ? FilterIconActive : FilterIcon} alt="필터 이미지" />
      </div>
    </button>
  );
};

export default Filter;
