import React from 'react';

interface EmpInfo {
  num: number;
  empNum: number;
  empName: string;
  allTask: string | number;
  notDone: string | number;
  done: string;
  doneTaskRate: number;
}

const Table = (props: EmpInfo) => {
  const { num, empNum, empName, allTask, notDone, done, doneTaskRate } = props;

  return (
    <table>
      <thead className="table">
        <tr className="table__head">
          <th className="table__head__num">번호</th>
          <th className="table__head__empNum">사원번호</th>
          <th className="table__head__empName">작업자</th>
          <th className="table__head__allTask">전체작업</th>
          <th className="table__head__notDone">미완료건</th>
          <th className="table__head__done">완료건</th>
          <th className="table__head__doneTaskRate">작업진척도</th>
        </tr>
      </thead>
      <tbody className="table">
        <tr className="teble__data">
          <td className="table__data__num">{num}</td>
          <td className="table__data__empNum">{empNum}</td>
          <td className="table__data__empName">{empName}</td>
          <td className="table__data__allTask">{allTask}</td>
          <td className="table__data__notDone">{notDone}</td>
          <td className="table__data__done">{done}</td>
          <td className="table__data__doneTaskRate">{doneTaskRate}%</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
