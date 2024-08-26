import TagFilter from './TagFilter';
import Filter from './Filter';

const SearchBar = () => {
  return (
    <main className="searchBar">
      <section className="searchBar__topBar">
        <div className="searchBar__topBar_counter">
          <div className="searchBar__topBar_counter_total">총</div>
          <div className="searchBar__topBar_counter_number">200건</div>
        </div>
        <div className="searchBar__topBar_wrapper">{/* 여기에 각자 들어가는 컴포넌트 넣으면 됨 */}</div>
      </section>
    </main>
  );
};

export default SearchBar;
