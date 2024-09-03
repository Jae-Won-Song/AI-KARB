import fileCheck from '../assets/icon-file-check.svg';

type ReviewAdResultProps = {
  reviewNumber: number;
  detailSpan: string;
};

const ReviewAdResult = ({ reviewNumber, detailSpan }: ReviewAdResultProps) => {
  return (
    <div className="ReviewAdResult">
      <div className="ReviewAdResult_img">
        <img src={fileCheck} alt="검수 결과 아이콘" />
      </div>
      <div className="ReviewAdResult_result">
        <div className="ReviewAdResult_result_box">
          <span className="ReviewAdResult_result_box_span">검수결과</span>
          <div className="ReviewAdResult_result_box_number">{reviewNumber}</div>
        </div>
        <span className="ReviewAdResult_result_detail">{detailSpan}</span>
      </div>
    </div>
  );
};

export default ReviewAdResult;
