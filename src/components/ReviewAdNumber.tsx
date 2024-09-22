type ReviewAdNumberProps = {
  adTitle: string;
  adNumber: string;
  imgSrc: string;
};

const ReviewAdNumber = ({ adTitle, adNumber, imgSrc }: ReviewAdNumberProps) => {
  return (
    <div className="ReviewAdNumber">
      <div className="ReviewAdNumber_img">
        <img src={imgSrc} alt="검수 광고 아이콘" />
      </div>
      <div className="ReviewAdNumber_span">
        <span className="ReviewAdNumber_span_name">{adTitle}</span>
        <div className="ReviewAdNumber_span_number">{adNumber}</div>
      </div>
    </div>
  );
};

export default ReviewAdNumber;
