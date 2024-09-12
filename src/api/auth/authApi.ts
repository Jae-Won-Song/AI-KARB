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

/*
 * 아이디 중복 확인
 * @param payload {id}
 */
export const fetchCheckIdAvailable = (payload: { id: string }) => {
  return instance.post('/api/v1/auth/check-id', payload);
};

/*
 * 회원가입
 * @param payload {name, phoneNumber, id, password, empNo, email, idCheckToken, certNoCheckToken}
 */
export const fetchRequestSignUp = (payload: {
  name: string;
  phoneNumber: string;
  id: string;
  password: string;
  empNo: string;
  email: string;
  idCheckToken: string;
  certNoCheckToken: string;
}) => {
  return instance.post('/api/v1/auth/signup', payload);
};

/*
 * 로그인
 * @param payload {id, password}
 */
export const fetchSignIn = (payload: { id: string; password: string }) => {
  return instance.post('/api/v1/auth/signin', payload);
};
