import { useEffect, useState } from 'react';
import { getUserList, deleteUser } from '../api/admin/adminApi';
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
  phoneNumber: string;
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserList();
        setCount(response.data.data.totalElements);
        const { contents } = response.data?.data || {};
        if (contents && Array.isArray(contents)) {
          setUserData(contents);
        }
      } catch (error) {
        console.error('실패', error);
      }
    };

    fetchUserData();
  }, []);

  const openDeleteModal = (userId: number) => {
    setSelectedUserId(userId);
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedUserId(null);
    setIsModalOpen(false);
  };

  const handleDeleteUser = async () => {
    if (selectedUserId === null) return;

    setLoading(true);
    try {
      await deleteUser(selectedUserId);
      setUserData(userData.filter((user) => user.cursorId !== selectedUserId));
      closeDeleteModal();
    } catch (error) {
      console.error('회원 삭제 실패', error);
    } finally {
      setLoading(false);
    }
  };

  const formattedTableData = userData.map((user, index) => ({
    번호: index + 1,
    사원번호: user.empNo,
    이름: user.name,
    권한: user.authority,
    아이디: user.userId,
    연락처: user.phoneNumber,
    이메일: user.email,
    회원가입일: user.signUpDate,
    최종로그인일: user.finalLoginDateTime,
    관리: (
      <button
        style={{ paddingLeft: '5px', background: 'none', border: 'none', cursor: 'pointer' }}
        onClick={() => openDeleteModal(user.cursorId)}
        tabIndex={0}
        aria-label={`${user.name} 회원 삭제`}>
        <img src={trash} alt="회원삭제" />
      </button>
    ),
  }));

  return (
    <div className="manageUser">
      {isModalOpen && <div className="manageUser__overlay" />}
      <div className="manageUser__container">
        <SearchBar totalCount={count} />
        <Table
          columns={[
            { name: '번호', width: '4.167vw', columnHeight: '5.556vh', rowHeight: '5.926vh' },
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

      {isModalOpen && (
        <Modal
          title="회원 정보 삭제"
          content="해당 사용자 정보는 삭제되며 복구되지 않습니다. 해당 사용자를 삭제하시겠습니까?"
          btnContentOne="취소"
          btnContentTwo={loading ? '삭제 중...' : '삭제'}
          mode="delUserInfo"
          onClickOne={closeDeleteModal}
          onClickTwo={handleDeleteUser}
        />
      )}
    </div>
  );
};

export default ManageUser;
