import { ReactNode } from 'react';

const SearchBar = ({ children }: { children: ReactNode }) => {
  return (
    <main className="searchBar">
      <section className="searchBar__topBar">
        <div className="searchBar__topBar_counter">
          <div className="searchBar__topBar_counter_total">총</div>
          <div className="searchBar__topBar_counter_number">200건</div>
        </div>
        <div className="searchBar__topBar_wrapper">{children}</div>
      </section>
    </main>
  );
};

export default SearchBar;
