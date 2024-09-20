import instance from '../apiConfig';

// eslint-disable-next-line import/prefer-default-export
export const fetchMyTaskData = (cursorId: string | null, taskDataLength: number) => {
  const requestData = {
    cursorInfo: {
      cursorState: taskDataLength > 0,
      cursorId,
    },
  };

  return instance.post('/api/v1/user/my-task', requestData);
// 사용자 정보 수정

// eslint-disable-next-line import/prefer-default-export
export const updateUserInfo = (payload: { phoneNumber?: string; email?: string; certNoCheckToken?: string }) => {
  return instance.put('/api/v1/user/info', payload);
};
