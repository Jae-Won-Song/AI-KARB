import { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleClick = (page: number): void => {
    if (page >= 1 && page <= 10) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="pagination__container">
      <div
        className="pagination__container__button"
        onClick={() => handleClick(1)}
        style={{ pointerEvents: currentPage === 1 ? 'none' : 'auto', opacity: currentPage === 1 ? 0.5 : 1 }}
      >
        &lt;
      </div>
      <div
        className="pagination__container__button"
        onClick={() => handleClick(currentPage - 1)}
        style={{ pointerEvents: currentPage === 1 ? 'none' : 'auto', opacity: currentPage === 1 ? 0.5 : 1 }}
      >
        이전
      </div>
      {[...Array(10)].map((_, index) => (
        <div
          className={`pagination__container__button ${currentPage === index + 1 ? 'active' : ''}`}
          key={index + 1}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </div>
      ))}
      <div
        className="pagination__container__button"
        onClick={() => handleClick(currentPage + 1)}
        style={{ pointerEvents: currentPage === 10 ? 'none' : 'auto', opacity: currentPage === 10 ? 0.5 : 1 }}
      >
        다음
      </div>
      <div
        className="pagination__container__button"
        onClick={() => handleClick(10)}
        style={{ pointerEvents: currentPage === 10 ? 'none' : 'auto', opacity: currentPage === 10 ? 0.5 : 1 }}
      >
        &gt;
      </div>
    </div>
  );
};

export default Pagination;
