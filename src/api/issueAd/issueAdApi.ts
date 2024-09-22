import instance from '../apiConfig';

/*
 * 지적광고 리스트 조회
 * @params {cursorInfo, keyword, period, state, issue, media, category}
 */
export const fetchLoadIssueAdList = (payload: object) => {
  return instance.post('/api/v1/issue-ad', payload);
};

/*
 * 지적광고 상세보기
 * @params {advertisementId}
 */
export const fetchLoadIssueAdDetail = ({ advertisementId }: { advertisementId: string }) => {
  return instance.get(`/api/v1/issue-ad/result/202409${advertisementId}`);
};

/*
 * 위반 조항 리스트 불러오기
 */
export const fetchLoadIssueProvision = () => {
  return instance.get('/api/v1/issue-ad/options/provision');
};

/*
 * 심의결정 리스트 불러오기
 */
export const fetchLoadIssueDecision = () => {
  return instance.get('/api/v1/issue-ad/options/decision');
};

/*
 * 지적광고 심의결정 리뷰 저장
 * @params {reviewList}
 */
export const postSaveNewIssueTask = (reviewList: object) => {
  return instance.post('/api/v1/issue-ad/save-task', reviewList);
};

/*
 * 지적광고 심의결정 완료
 * @params {advertisementId, decisionId}
 */
export const postSaveIssueDecision = (payload: { advertisementId: string; decisionId: number }) => {
  return instance.post('/api/v1/issue-ad/result/decision', payload);
};
