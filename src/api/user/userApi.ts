import instance from '../apiConfig';

// 사용자 정보 수정

// eslint-disable-next-line import/prefer-default-export
export const updateUserInfo = (payload: { phoneNumber?: string; email?: string; certNoCheckToken?: string }) => {
  return instance.put('/api/v1/user/info', payload);
};
