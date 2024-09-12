import { useEffect, useState, useCallback } from 'react';
import instance from '../api/apiConfig';
import SearchBar from '../components/Common/SearchBar';
import Table from '../components/Common/Table';
import Tab from '../components/Tab';
import check from '../assets/check-signup-request.svg';

// 재원이한테 내보내달라 부탁하기
interface UserData {
  cursorId: number;
  name: string;
  empNo: string;
  phoneNum: string;
  email: string;
  signUpRequestDateTime: string;
}

interface ApiResponse {
  data: {
    contents: UserData[];
  };
}

interface TableData {
  번호: number;
  체크박스: JSX.Element;
  이름: string;
  사원번호: string;
  연락처: string;
  이메일: string;
  가입요청일: string;
  승인버튼: JSX.Element;
  반려버튼: JSX.Element;
}

const SignUpRequest = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [selectedEmpNos, setSelectedEmpNos] = useState<string[]>([]);

  const handleCheckboxChange = useCallback((empNo: string) => {
    setSelectedEmpNos((prevSelectedEmpNos) =>
      prevSelectedEmpNos.includes(empNo)
        ? prevSelectedEmpNos.filter((no) => no !== empNo)
        : [...prevSelectedEmpNos, empNo],
    );
  }, []);

  const handleApprove = useCallback(async () => {
    if (selectedEmpNos.length > 0) {
      selectedEmpNos.forEach(async (empNo) => {
        try {
          const response = await instance.post('/api/v1/admin/approve-user', {
            userList: [{ empNo }],
          });
          console.log('API 호출 성공', response.data);
        } catch (error) {
          console.error('API 호출 실패', error);
        }
      });
    }
  }, [selectedEmpNos]);

  const handleReject = useCallback(async () => {
    if (selectedEmpNos.length > 0) {
      selectedEmpNos.forEach(async (empNo) => {
        try {
          const response = await instance.post('/api/v1/admin/reject-user', {
            userList: [{ empNo }],
          });
          console.log('API 호출 성공', response.data);
        } catch (error) {
          console.error('API 호출 실패', error);
        }
      });
    }
  }, [selectedEmpNos]);

  useEffect(() => {
    const fetchSignUpRequests = async () => {
      try {
        const response = await instance.get<ApiResponse>('/api/v1/admin/approve-user');
        const { data } = response.data || {};
        if (data && Array.isArray(data.contents)) {
          setUserData(data.contents);

          const formattedData = data.contents.map((item, index) => ({
            번호: index + 1,
            체크박스: (
              <input
                className="checkBox"
                type="checkbox"
                onChange={() => handleCheckboxChange(item.empNo)}
                checked={selectedEmpNos.includes(item.empNo)}
              />
            ),
            이름: item.name,
            사원번호: item.empNo,
            연락처: item.phoneNum,
            이메일: item.email,
            가입요청일: item.signUpRequestDateTime,
            승인버튼: <button onClick={() => handleApprove()}>승인</button>,
            반려버튼: <button onClick={() => handleReject()}>반려</button>,
          }));
          setTableData(formattedData);
        }
      } catch (error) {
        console.error('가입요청 못가져옴:', error);
      }
    };

    fetchSignUpRequests();
  }, [handleApprove, handleReject, handleCheckboxChange, selectedEmpNos]);

  return (
    <div className="sign-up-request">
      <div className="sign-up-request__container">
        <SearchBar>
          <Tab styleName="hover" content="반려" onClick={handleReject} />
          <Tab styleName="active" content="승인" onClick={handleApprove} />
        </SearchBar>
        <Table
          columns={[
            { name: '번호', width: '6.25vw' },
            {
              name: '체크박스',
              img: (
                <img
                  style={{ display: 'flex', justifyContent: 'center', width: '17px', height: '17px' }}
                  src={check}
                  alt="체크박스"
                />
              ),
              width: '6.25vw',
            },
            { name: '이름', width: '8.333vw' },
            { name: '사원번호', width: '8.75vw' },
            { name: '연락처', width: '17.708vw' },
            { name: '이메일', width: '21.875vw' },
            { name: '가입요청일', width: '13.542vw' },
            { name: '승인', width: '8vw' },
            { name: '반려', width: '8vw' },
          ]}
          data={tableData}
        />
      </div>
    </div>
  );
};

export default SignUpRequest;
