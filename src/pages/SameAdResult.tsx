import arrowLeft from '../assets/arrow-left.svg';
import fileSearch from '../assets/icon-file-search.svg';
import fileCheck from '../assets/icon-file-check.svg';
import SameAdResultBox from '../components/SameAdResultBox';

const SameAdResult = () => {
  return (
    <main className="sameAdResult">
      <article className="sameAdResult__wrapperLeft">
        <img src={arrowLeft} alt="뒤로가기 화살표" className="sameAdResult__wrapperLeft_arrow" />
        <div className="sameAdResult__wrapperLeft_contents">
          <div className="sameAdResult__wrapperLeft_contents_title">
            <div className="sameAdResult__wrapperLeft_contents_title_img">
              <img src={fileSearch} alt="검수 광고 아이콘" />
            </div>
            <div className="sameAdResult__wrapperLeft_contents_title_span">
              <span className="sameAdResult__wrapperLeft_contents_title_span_name">검수 광고</span>
              <div className="sameAdResult__wrapperLeft_contents_title_span_number">A12345</div>
            </div>
          </div>
          <div className="sameAdResult__wrapperLeft_contents_table">
            <div className="sameAdResult__wrapperLeft_contents_table_small">상품명</div>
            <div className="sameAdResult__wrapperLeft_contents_table_large">명작수</div>
            <div className="sameAdResult__wrapperLeft_contents_table_small">광고주</div>
            <div className="sameAdResult__wrapperLeft_contents_table_large">아모레퍼시픽 코리아</div>
          </div>
          <div className="sameAdResult__wrapperLeft_contents_table">
            <div className="sameAdResult__wrapperLeft_contents_table_small">업종구분</div>
            <div className="sameAdResult__wrapperLeft_contents_table_large">식품/음료</div>
            <div className="sameAdResult__wrapperLeft_contents_table_small">게재일</div>
            <div className="sameAdResult__wrapperLeft_contents_table_large">2024-07-26</div>
          </div>
          <div className="sameAdResult__wrapperLeft_contents_article">기사내용 (스크롤 테스트 완료)</div>
        </div>
      </article>
      <article className="sameAdResult__wrapperRight">
        <div className="sameAdResult__wrapperRight_contents">
          <div className="sameAdResult__wrapperRight_contents_title">
            <div className="sameAdResult__wrapperRight_contents_title_img">
              <img src={fileCheck} alt="검수 결과 아이콘" />
            </div>
            <div className="sameAdResult__wrapperRight_contents_title_result">
              <div className="sameAdResult__wrapperRight_contents_title_result_box">
                <span className="sameAdResult__wrapperRight_contents_title_result_box_span">검수결과</span>
                <div className="sameAdResult__wrapperRight_contents_title_result_box_number">4</div>
              </div>
              <span className="sameAdResult__wrapperRight_contents_title_result_detail">
                동일 광고는 유사도 80% 이상의 광고만 간주합니다.
              </span>
            </div>
          </div>
          <SameAdResultBox />
          <SameAdResultBox />
          <SameAdResultBox />
        </div>
      </article>
    </main>
  );
};

export default SameAdResult;
