import instance from '../apiConfig';

/*
 * 동일광고 리스트 조회
 * @params {cursorInfo, keyword, period, state, issue, media, category}
 */
export const fetchLoadSameAdList = (payload: object) => {
  return instance.post('/api/v1/same-ad', payload);
};

// 개별 export 막으려고 넣은 임시
export const example = () => {};
