const ReviewTag = ({ size = 'default', containerBg = '#f7e5ea', circleBg = 'red', content = '이름' }) => {
  const containerClass = size === 'large' ? 'review-tag-large__container' : 'review-tag__container';
  const circleClass = size === 'large' ? 'review-tag-large__container__circle' : 'review-tag__container__circle';
  const contentClass = size === 'large' ? 'review-tag-large__container__content' : 'review-tag__container__content';

  return (
    <div className={containerClass} style={{ background: containerBg }}>
      <div className={circleClass} style={{ background: circleBg }} />
      <div className={contentClass}>{content}</div>
    </div>
  );
};

export default ReviewTag;
