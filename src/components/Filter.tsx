import FilterIcon from '../assets/icon-filter.svg';

const Filter = () => {
  return (
    <button className="filterBtn">
      <span className="filterBtn__span">필터</span>
      <div className="filterBtn__icon">
        <img src={FilterIcon} alt="필터 이미지" />
      </div>
    </button>
  );
};

export default Filter;
