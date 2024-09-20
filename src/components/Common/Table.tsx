import React from 'react';
import ProgressBar from '../ProgressBar';
import clipBoard from '../../assets/icon-clipBoard.svg';

interface Column {
  name?: string;
  width?: string | number;
  columnHeight?: string | number;
  rowHeight?: string | number;
  img?: JSX.Element;
}

export interface EmpData {
  번호?: number;
  사원번호?: number | string;
  고유번호?: number | string;
  매체명?: string;
  업종구분?: string;
  상품명?: string;
  광고주?: string;
  작업자?: string;
  담당자?: string;
  전체작업?: number | string;
  미완료건?: number | string;
  완료건?: number | string;
  작업진척도?: string;
  이름?: string;
  총배분작업?: string | number;
  연락처?: string | number;
  이메일?: string;
  연락처관리?: string;
  회원가입일?: string | number;
  최종로그인일?: string | number;
  가입요청일?: string | number;
  권한?: string;
  검수결과?: JSX.Element | string;
  지적비지적?: JSX.Element | string;
  진행상황?: JSX.Element | string;
  아이디?: string | number;
  관리?: JSX.Element;
  체크박스?: JSX.Element;
  작업날짜?: string | number;
}

interface EmpInfo {
  columns: Column[];
  data: EmpData[];
  onRowClick?: (row: EmpData) => void;
  headerClassName?: string;
  rowClassName?: string;
}

const Table = (props: EmpInfo) => {
  const { columns, data, onRowClick, headerClassName = 'table', rowClassName = 'info' } = props;

  const copyClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('복사 완료');
      })
      .catch((err) => {
        console.error('복사 실패:', err);
      });
  };

  return (
    <div>
      <table>
        <thead className={headerClassName}>
          <tr className={`${headerClassName}__head`}>
            {columns.map((column, index) => (
              <th
                key={index}
                className={`${headerClassName}__head__${column.name || 'img'}`}
                style={{ width: column.width, height: column.columnHeight }}>
                {column.name === '지적비지적'
                  ? '지적/비지적'
                  : column.name === '총배분작업'
                    ? '총 배분작업'
                    : column.img
                      ? column.img
                      : column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={rowClassName}>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${rowClassName}__data`}
              onClick={() => {
                if (onRowClick) {
                  onRowClick(row);
                }
              }}>
              {columns.map((column, colIndex) => {
                const cellData = row[column.name as keyof EmpData];
                return (
                  <td
                    key={colIndex}
                    className={`${rowClassName}__data__${column.name || 'img'}`}
                    style={{ width: column.width, height: column.rowHeight }}>
                    {React.isValidElement(cellData) ? (
                      cellData
                    ) : column.name === '작업진척도' ? (
                      <ProgressBar width={10.417} height={15} progressGauge={30} className="mine" />
                    ) : column.name === '지적/비지적' ? (
                      cellData
                    ) : (
                      cellData
                    )}
                    {(column.name === '연락처' || column.name === '이메일') && cellData ? (
                      <button
                        style={{ marginLeft: '10px', background: 'none', border: 'none', cursor: 'pointer' }}
                        onClick={() => copyClipboard(cellData as string)}
                        aria-label="복사하기">
                        <img src={clipBoard} alt="클립보드" />
                      </button>
                    ) : null}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
