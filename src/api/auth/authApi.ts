import instance from '../apiConfig';

/*
 * 인증요청
 * @param payload {type, phoneNumber}
 */
export const fetchSendCertNoDuringSignUp = (payload: { type: string; phoneNumber: string }) => {
  return instance.post('/api/v1/auth/cert-no', payload);
};

/*
 * 인증번호 확인
 * @param payload {type, phoneNumber, certNo}
 */
export const fetchCheckCertNoDuringSignUp = (payload: { type: string; phoneNumber: string; certNo: string }) => {
  return instance.post('/api/v1/auth/check-cert-no', payload);
};
