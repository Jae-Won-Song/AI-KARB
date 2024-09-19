import instance from '../apiConfig';

/*
 * 지적광고 상세보기
 * @params {advertisementId}
 */
export const fetchLoadIssueAdDetail = ({ advertisementId }: { advertisementId: string }) => {
  return instance.get(`/api/v1/issue-ad/result/${advertisementId}`);
};

// 개별 export 생기는 에러 때문에 임시로 작성해둠
export const example = () => {
  return false;
};
