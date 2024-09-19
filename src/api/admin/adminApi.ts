import instance from '../apiConfig';

export const getUserList = () => {
  return instance.get('/api/v1/admin/manage-user');
};

// 회원 삭제

export const deleteUser = (userId: number) => {
  return instance.delete(`/api/v1/admin/manage-user/${userId}`);
};

export const fetchmytaskData = () => {
  return instance.post('/api/v1/user/my-task', {
    // keyword: 'keyword',
    // period: 'date',
    // state: true,
    // issue: true,
    // media: [],
    // category: [],
  });
};
