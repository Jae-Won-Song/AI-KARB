import { useState } from 'react';
import SortIcon from '../assets/Icon-sort.svg';
import SortIconActive from '../assets/Icon-sort-a.svg';

const SortFilter = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="sort">
      <button className={`sort__sortBtn ${isActive ? 'sort__sortBtn--active' : ''}`} onClick={toggleActive}>
        <span className="sort__sortBtn__span">정렬</span>
        <div className="sort__sortBtn__icon">
          <img src={isActive ? SortIconActive : SortIcon} alt="정렬 이미지" />
        </div>
      </button>
    </div>
  );
};

export default SortFilter;
