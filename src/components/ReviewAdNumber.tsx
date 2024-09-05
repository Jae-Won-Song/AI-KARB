import fileSearch from '../assets/icon-file-search.svg';

const ReviewAdNumber = ({ adNumber }: { adNumber: string }) => {
  return (
    <div className="ReviewAdNumber">
      <div className="ReviewAdNumber_img">
        <img src={fileSearch} alt="검수 광고 아이콘" />
      </div>
      <div className="ReviewAdNumber_span">
        <span className="ReviewAdNumber_span_name">검수 광고</span>
        <div className="ReviewAdNumber_span_number">{adNumber}</div>
      </div>
    </div>
  );
};

export default ReviewAdNumber;
