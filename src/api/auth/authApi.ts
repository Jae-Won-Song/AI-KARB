import instance from '../apiConfig';

/*
 * 인증번호 확인
 * @param payload {type, phoneNumber, certNo}
 */
export const fetchCheckCertNoDuringSignUp = (payload: { type: string; phoneNumber: string; certNo: string }) => {
  return instance.post('/api/v1/auth/check-cert-no', payload);
};

// 단일 export const 안 쓰려고 임시로 놔두는 거
export const nextApi = {
  return: false,
};
