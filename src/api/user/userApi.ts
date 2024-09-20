import instance from '../apiConfig';

export const fetchMyTaskData = (cursorId: string | null, taskDataLength: number, cursorState: boolean) => {
  const requestData = {
    cursorInfo: {
      cursorState,
      cursorId,
    },
  };

  return instance.post('/api/v1/user/my-task', requestData);
};

// 사용자 정보 수정
export const updateUserInfo = (payload: { phoneNumber?: string; email?: string; certNoCheckToken?: string }) => {
  return instance.put('/api/v1/user/info', payload);
};
