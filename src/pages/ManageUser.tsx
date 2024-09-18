import { useEffect, useState } from 'react';
import instance from '../api/apiConfig';
import SearchBar from '../components/Common/SearchBar';
import Table from '../components/Common/Table';
import trash from '../assets/Icon-delete.svg';
import Modal from '../components/Common/Modal';

interface UserData {
  cursorId: number;
  empNo: string;
  name: string;
  authority: string;
  userId: string;
  phoneNum: string;
  email: string;
  signUpDate: string;
  finalLoginDateTime: string;
}

interface ApiResponse {
  data: {
    contents: UserData[];
  };
}

const ManageUser = () => {
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await instance.get<ApiResponse>('/api/v1/admin/manage-user');
        const { contents } = response.data?.data || {};
        if (contents && Array.isArray(contents)) {
          setUserData(contents);
        }
      } catch (error) {
        console.error('에러', error);
      }
    };

    fetchUserData();
  }, []);

  const formattedTableData = userData.map((user, index) => ({
    번호: index + 1,
    사원번호: user.empNo,
    이름: user.name,
    권한: user.authority,
    아이디: user.userId,
    연락처: user.phoneNum,
    이메일: user.email,
    회원가입일: user.signUpDate,
    최종로그인일: user.finalLoginDateTime,
    관리: <img style={{ paddingLeft: '5px' }} src={trash} alt="회원삭제" />,
  }));

  return (
    <div className="manageUser">
      <div className="manageUser__container">
        <SearchBar />
        <Table
          columns={[
            { name: '번호', width: '4.167vw' },
            { name: '사원번호', width: '6.25vw' },
            { name: '이름', width: '6.25vw' },
            { name: '권한', width: '6.25vw' },
            { name: '아이디', width: '9.375vw' },
            { name: '연락처', width: '10.417vw' },
            { name: '이메일', width: '12.5vw' },
            { name: '회원가입일', width: '10.417vw' },
            { name: '최종로그인일', width: '10.417vw' },
            { name: '관리', width: '6.25vw' },
          ]}
          data={formattedTableData}
        />
      </div>
    </div>
  );
};

export default ManageUser;
