import { useNavigate } from 'react-router-dom';
import Table from '../../components/Table';
import SearchBar from '../../components/SearchBar';
import Filter from '../../components/Filter';
import Calendar from '../../components/Calendar';

const ManageEmp = () => {
  const navigate = useNavigate();

  const handleRowClick = (rowData) => {
    navigate(`/employee/${rowData.사원번호}`, { state: rowData });
  };

  return (
    <div className="manageEmp-wrapper">
      <SearchBar>
        <Filter />
        <Calendar />
      </SearchBar>
      <Table
        columns={[
          { name: '번호', width: '6.25vw', height: '50px' },
          { name: '사원번호', width: '10.417vw', height: '50px' },
          { name: '작업자', width: '10.417vw', height: '50px' },
          { name: '전체작업', width: '12.5vw', height: '50px' },
          { name: '미완료건', width: '12.5vw', height: '50px' },
          { name: '완료건', width: '12.5vw', height: '50px' },
          { name: '작업진척도', width: '17.708vw', height: '50px' },
        ]}
        data={[
          {
            번호: 1,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '70%',
          },
          {
            번호: 2,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 8,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 11,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 25,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 321,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 155,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 1992,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 22451,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 1,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 1,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 1,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
          {
            번호: 1,
            사원번호: 'A13425',
            작업자: '홍길동',
            전체작업: '10건',
            미완료건: '2건',
            완료건: '8건',
            작업진척도: '80%',
          },
        ]}
        onRowClick={handleRowClick}
      />
    </div>
  );
};

export default ManageEmp;
