import { useState } from 'react';
import SortIcon from '../assets/Icon-sort.svg';
import SortIconActive from '../assets/Icon-sort-a.svg';

const SortFilter = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <div className="sort">
      <button
        className={`sort__sortBtn ${isActive ? 'sort__sortBtn--active' : ''}`}
        onClick={toggleActive}
        onBlur={handleBlur}
      >
        <span className="sort__sortBtn__span">정렬</span>
        <div className="sort__sortBtn__icon">
          <img src={isActive ? SortIconActive : SortIcon} alt="정렬 이미지" />
        </div>
      </button>
      {isActive && <div className="sort__dropdown">드롭다운</div>}
    </div>
  );
};

export default SortFilter;
