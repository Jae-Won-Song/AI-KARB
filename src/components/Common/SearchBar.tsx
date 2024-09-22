import { ReactNode } from 'react';

const SearchBar = ({ children, totalCount }: { children?: ReactNode; totalCount: string | number }) => {
  return (
    <div className="searchBar">
      <section className="searchBar__topBar">
        <div className="searchBar__topBar_counter">
          <div className="searchBar__topBar_counter_total">총</div>
          <div className="searchBar__topBar_counter_number">{totalCount}건</div>
        </div>
        <div className="searchBar__topBar_wrapper">{children}</div>
      </section>
    </div>
  );
};

export default SearchBar;
