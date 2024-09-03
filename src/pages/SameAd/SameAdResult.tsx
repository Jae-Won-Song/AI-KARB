import arrowLeft from '../../assets/arrow-left.svg';
import fileCheck from '../../assets/icon-file-check.svg';
import SameAdResultBox from '../../components/SameAdResultBox';
import AdInfoTable from '../../components/AdInfoTable';
import ReviewAdNumber from '../../components/ReviewAdNumber';

const SameAdResult = () => {
  return (
    <main className="sameAdResult">
      <article className="sameAdResult__wrapperLeft">
        <img src={arrowLeft} alt="뒤로가기 화살표" className="sameAdResult__wrapperLeft_arrow" />
        <div className="sameAdResult__wrapperLeft_contents">
          <ReviewAdNumber adNumber="A12345" />
          <AdInfoTable title1="상품명" title2="광고주" content1="명작수" content2="아모레퍼시픽 코리아" />
          <AdInfoTable title1="업종구분" title2="게재일" content1="식품/음료" content2="2024-07-26" />
          <div className="sameAdResult__wrapperLeft_contents_article">기사내용 (스크롤 테스트 완료)</div>
        </div>
      </article>
      <div className="middleBar"> </div>
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
          <div className="sameAdResult__wrapperRight_contents_resultBox">
            <SameAdResultBox />
            <SameAdResultBox />
            <SameAdResultBox />
          </div>
        </div>
      </article>
    </main>
  );
};

export default SameAdResult;
