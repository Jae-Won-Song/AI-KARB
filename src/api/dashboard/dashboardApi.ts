import instance from '../apiConfig';

// 전체 대시보드
export const fetchDashBoardData = () => {
  return instance.get('/api/v1/dashboard');
};

// 관리자 대시보드
export const fetchAdminDashBoardData = () => {
  return instance.get('/api/v1/dashboard/admin');
};
