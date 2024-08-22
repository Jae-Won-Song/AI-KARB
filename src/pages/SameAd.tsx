import TagFilter from '../components/TagFilter';
import Filter from '../components/Filter';

const SameAd = () => {
  return (
    <main className="sameAd">
      <section className="sameAd__topBar">
        <div className="sameAd__topBar_counter">
          <div className="sameAd__topBar_counter_total">총</div>
          <div className="sameAd__topBar_counter_number">200건</div>
        </div>
        <div className="sameAd__topBar_wrapper">{/* 여기에 각자 들어가는 컴포넌트 넣으면 됨 */}</div>
      </section>
    </main>
  );
};

export default SameAd;
