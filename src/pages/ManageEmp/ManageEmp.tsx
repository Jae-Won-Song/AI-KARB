import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table, { EmpData } from '../../components/Common/Table';
import SearchBar from '../../components/Common/SearchBar';
import Filter from '../../components/Common/Filter';
import Calendar from '../../components/Common/Calendar';
import { fetchManageEmp } from '../../api/admin/adminApi';

const ManageEmp = () => {
  const navigate = useNavigate();
  const [empList, setEmpList] = useState<EmpData[]>([]);
  const [currentCursorId, setCurrentCursorId] = useState<number | null>(1);
  const [totalAd, setTotalAd] = useState();
  const [totalElements, setTotalElements] = useState<number>(0);

  const getEmpData = async () => {
    const requestData = {
      cursorId: currentCursorId,
      sorted: 'EmpNo',
      period: '2024-09-2',
    };

    try {
      const response = await fetchManageEmp(requestData);
      if (response && response.data && response.data.data) {
        const { totalElements, currentCursorId, contents } = response.data.data;
        setEmpList(
          contents.map((emp: any, index: number) => ({
            번호: index + 1,
            사원번호: emp.empNo,
            작업자: emp.name,
            전체작업: `${emp.totalAd}건`,
            미완료건: `${emp.notDoneAd}건`,
            완료건: `${emp.doneAd}건`,
            작업진척도: `${emp.doneRatio}%`,
          })),
        );
        setTotalElements(totalElements);
        setCurrentCursorId(currentCursorId);
      }
    } catch (error) {
      console.error('작업자 관리 정보 조회 실패:', error);
    }
  };

  useEffect(() => {
    getEmpData();
  });

  const handleRowClick = (rowData: EmpData) => {
    if (rowData.사원번호) {
      navigate(`/employee/${rowData.사원번호}`, { state: rowData });
    }
  };

  return (
    <div className="manageEmp-wrapper">
      <SearchBar totalCount={empList.length}>
        <Filter />
        <Calendar />
      </SearchBar>
      <Table
        columns={[
          { name: '번호', width: '6.25vw', columnHeight: '60px', rowHeight: '64px' },
          { name: '사원번호', width: '10.417vw' },
          { name: '작업자', width: '10.417vw' },
          { name: '전체작업', width: '12.5vw' },
          { name: '미완료건', width: '12.5vw' },
          { name: '완료건', width: '12.5vw' },
          { name: '작업진척도', width: '17.708vw' },
        ]}
        data={empList}
        onRowClick={handleRowClick}
      />
    </div>
  );
};

export default ManageEmp;
