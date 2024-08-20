import Table from '../components/Table';
import Contents from '../components/Contents';
import React from 'react';
import SortFilter from '../components/SortFilter';

const ManageEmp = () => {
  return (
    <Contents>
      {/* <SortFilter /> */}
      <Table num={0} empNum={0} empName="test" allTask="367 건" notDone="300 건" done="67 건" doneTaskRate={80} />
    </Contents>
  );
};

export default ManageEmp;
