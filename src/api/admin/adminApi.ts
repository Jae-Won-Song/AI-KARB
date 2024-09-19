import instance from '../apiConfig';

// 회원 목록 가져오기

export const getUserList = () => {
  return instance.get('/api/v1/admin/manage-user');
};

// 회원 삭제

export const deleteUser = (userId: number) => {
  return instance.delete(`/api/v1/admin/manage-user/${userId}`);
};
