import instance from '../apiConfig';

export const getUserList = () => {
  return instance.get('/api/v1/admin/manage-user');
};

// 회원 삭제

export const deleteUser = (userId: number) => {
  return instance.delete(`/api/v1/admin/manage-user/${userId}`);
};

// 가입 요청 목록 가져오기

export const fetchSignUpRequests = () => {
  return instance.get('/api/v1/admin/approve-user');
};

// 회원 승인 요청

export const approveUsers = (selectedEmpNos: string[]) => {
  return instance.post('/api/v1/admin/approve-user', {
    userList: selectedEmpNos.map((empNo) => ({ empNo })),
  });
};

// 회원 반려 요청

export const rejectUsers = (selectedEmpNos: string[]) => {
  return instance.post('/api/v1/admin/reject-user', {
    userList: selectedEmpNos.map((empNo) => ({ empNo })),
  });
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

// 작업자 목록 조회
export const fetchEmpList = () => {
  return instance.get('/api/v1/admin/manage-task/emp');
};

// 광고 목록 조회
export const fetchAdList = (currentCursorId: string | null = null) => {
  return instance.get('/api/v1/admin/manage-task/advertisement', {
    params: {
      cursorId: currentCursorId,
    },
  });
};

// 작업자 배분
export const fetchManageEmp = (data: { cursorId: number | null; sorted: string; period: string }) => {
  return instance.post('/api/v1/admin/manage-emp', data);
};

// 작업 배분 완료
export const fetchManageTask = (requestBody: any) => {
  return instance.post('/api/v1/admin/manage-task', requestBody);
};
