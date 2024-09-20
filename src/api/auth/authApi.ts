import instance from '../apiConfig';

/*
 * 인증요청
 * @param payload {type, phoneNumber}
 */
export const fetchSendCertNo = (payload: { type: string; phoneNumber: string }) => {
  return instance.post('/api/v1/auth/cert-no', payload);
};

/*
 * 인증번호 확인
 * @param payload {type, phoneNumber, certNo}
 */
export const fetchCheckCertNo = (payload: { type: string; phoneNumber: string; certNo: string }) => {
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

/*
 * 아이디 찾기
 * @param payload {name, phoneNumber, certNoCheckToken}
 */
export const fetchFindId = (payload: { name: string; phoneNumber: string; certNoCheckToken: string }) => {
  return instance.post('/api/v1/auth/find-id', payload);
};

/*
 * 비밀번호 찾기 - 인증
 * @param payload {userId, name, phoneNumber, certNoCheckToken}
 */
export const fetchFindPw = (payload: {
  userId: string;
  name: string;
  phoneNumber: string;
  certNoCheckToken: string;
}) => {
  return instance.post('/api/v1/auth/find-password', payload);
};

/*
 * 비밀번호 수정
 * @param payload {password, passwordResetToken}
 */
export const fetchEditPw = (payload: { password: string; passwordResetToken: string }) => {
  return instance.post('/api/v1/auth/edit-password', payload);
};
