import SortIcon from '../assets/Icon-sort.svg';

const SortFilter = () => {
  return (
    <div className="sort">
      <button className="sort__sortBtn">
        <span className="sort__sortBtn__span">정렬</span>
        <div className="sort__sortBtn__icon">
          <img src={SortIcon} alt="정렬 이미지" />
        </div>
      </button>
    </div>
  );
};

export default SortFilter;
