import chevronRight from '../assets/chevron-right.svg';

type SameAdResultBoxProps = {
  id: string;
  product: string;
  advertiser: string;
  category: string;
  postDate: string;
  similarityPercent: number;
  sameSentenceCount: number;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const SameAdResultBox = ({
  id,
  product,
  advertiser,
  category,
  postDate,
  similarityPercent,
  sameSentenceCount,
  onClick,
}: SameAdResultBoxProps) => {
  return (
    <div className="SameAdResultBox">
      <div className="SameAdResultBox__container">
        <div className="SameAdResultBox__container_top">
          <span className="SameAdResultBox__container_top_number">No. 01</span>
          <span className="SameAdResultBox__container_top_id">{id}</span>
          <div className="SameAdResultBox__container_top_detail" onClick={onClick}>
            자세히 보기
            <img
              src={chevronRight}
              alt="자세히 보기 버튼"
              className="sameAdResult__wrapperRight_contents_articleWrapper_article_title_detail_img"
            />
          </div>
        </div>
        <div className="SameAdResultBox__container_bottom">
          <div className="SameAdResultBox__container_tableWrapper">
            <div className="SameAdResultBox__container_tableWrapper_table">
              <div className="SameAdResultBox__container_tableWrapper_table_small">상품명</div>
              <div className="SameAdResultBox__container_tableWrapper_table_medium">{product}</div>
              <div className="SameAdResultBox__container_tableWrapper_table_small">광고주</div>
              <div className="SameAdResultBox__container_tableWrapper_table_large">{advertiser}</div>
            </div>
            <div className="SameAdResultBox__container_tableWrapper_table">
              <div className="SameAdResultBox__container_tableWrapper_table_small">업종구분</div>
              <div className="SameAdResultBox__container_tableWrapper_table_medium">{category}</div>
              <div className="SameAdResultBox__container_tableWrapper_table_small">게재일</div>
              <div className="SameAdResultBox__container_tableWrapper_table_large">{postDate}</div>
            </div>
          </div>
          <div className="SameAdResultBox__container_result">
            <div className="SameAdResultBox__container_result_box">
              <div className="SameAdResultBox__container_result_similarity">유사도</div>
              <span className="SameAdResultBox__container_result_ratio">{similarityPercent}%</span>
            </div>
            <div className="SameAdResultBox__container_result_box">
              <span className="SameAdResultBox__container_result_same">동일문장</span>
              <span className="SameAdResultBox__container_result_same_num">{sameSentenceCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SameAdResultBox;
