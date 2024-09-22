import instance from '../apiConfig';

/*
 * 동일광고 리스트 조회
 * @params {cursorInfo, keyword, period, state, issue, media, category}
 */
export const fetchLoadSameAdList = (payload: object) => {
  return instance.post('/api/v1/same-ad', payload);
};

/*
 * 동일광고 유사율 리스트 조회
 * @params {advertisementId}
 */
export const fetchLoadSameAdResult = ({ inspectionAdvertisementId }: { inspectionAdvertisementId: string }) => {
  return instance.get(`/api/v1/same-ad/result/${inspectionAdvertisementId}`);
};

/*
 * 동일광고 유사율 상세화면 조회
 * @params {advertisementId}
 */
export const fetchLoadSameAdResultDetail = ({
  inspectionAdvertisementId,
  comparisonAdvertisementId,
}: {
  inspectionAdvertisementId: string;
  comparisonAdvertisementId: string;
}) => {
  return instance.get(`/api/v1/same-ad/result/${inspectionAdvertisementId}/detail/${comparisonAdvertisementId}`);
};
