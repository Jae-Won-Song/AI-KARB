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
    <div className="filter">
      <button
        className={`filter__filterBtn ${isActive ? 'filter__filterBtn--active' : ''}`}
        onClick={toggleActive}
        onBlur={handleBlur}>
        <span className="filter__filterBtn__span">필터</span>
        <div className="filter__filterBtn__icon">
          <img src={isActive ? FilterIconActive : FilterIcon} alt="필터 이미지" />
        </div>
      </button>
      {isActive && <div className="filter__dropdown">드롭다운</div>}
    </div>
  );
};

export default Filter;
