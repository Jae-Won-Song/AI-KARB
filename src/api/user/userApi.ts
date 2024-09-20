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
};
