import React from 'react';
import Table from '../components/Table';
import Contents from '../components/Contents';
import SearchBar from '../components/SearchBar';

const ManageEmp = () => {
  return (
    <Contents>
      <SearchBar />
      <Table
        columns={[
          { name: '번호', width: '6.25vw' },
          { name: '사원번호', width: '10.417vw' },
          { name: '작업자', width: '10.417vw' },
          { name: '전체작업', width: '12.5vw' },
          { name: '미완료건', width: '12.5vw' },
          { name: '완료건', width: '12.5vw' },
          { name: '작업진척도', width: '17.708vw' },
        ]}
        data={[
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
      />
    </Contents>
  );
};

export default ManageEmp;
