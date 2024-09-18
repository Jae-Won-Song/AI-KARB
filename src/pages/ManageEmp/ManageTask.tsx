import React, { useState, ReactNode } from 'react';
import SearchBar from '../../components/Common/SearchBar';
import check from '../../assets/check-signup-request.svg';
import Table from '../../components/Common/Table';
import Button from '../../components/Common/Button';

interface Worker {
  사원번호: string;
  이름: string;
  총배분작업: string | number;
}

const ManageTask = (): ReactNode => {
  const [selectedWorkers, setSelectedWorkers] = useState<string[]>([]);
  const [distributedTasks, setDistributedTasks] = useState<{ [key: string]: number }>({});
  const totalTasks = 300;

  const handleWorkerSelection = (workerId: string) => {
    setSelectedWorkers((prevSelectedWorkers) => {
      if (prevSelectedWorkers.includes(workerId)) {
        return prevSelectedWorkers.filter((id) => id !== workerId);
      }
      return [...prevSelectedWorkers, workerId];
    });
  };

  const distributeTasks = () => {
    if (selectedWorkers.length === 0) return;

    const tasksPerWorker = Math.floor(totalTasks / selectedWorkers.length);

    const taskDistribution = selectedWorkers.reduce(
      (acc, workerId) => {
        acc[workerId] = tasksPerWorker;
        return acc;
      },
      {} as { [key: string]: number },
    );

    setDistributedTasks(taskDistribution);
  };

  const resetSelection = () => {
    setSelectedWorkers([]);
    setDistributedTasks({});
  };

  const workerData: Worker[] = [
    { 사원번호: 'A13425', 이름: '이수아', 총배분작업: '-' },
    { 사원번호: 'A13426', 이름: '김철수', 총배분작업: '-' },
    { 사원번호: 'A13427', 이름: '박영희', 총배분작업: '-' },
    { 사원번호: 'A13428', 이름: '최민수', 총배분작업: '-' },
    { 사원번호: 'A13429', 이름: '홍길동', 총배분작업: '-' },
  ];

  return (
    <div className="manageTask-container">
      <SearchBar>
        <div className="manageTask-select-wrapper">
          총 {totalTasks}건<div className="manageTask-select-wrapper__slash">/</div>
          <div className="manageTask-select-wrapper__selectPeople">{selectedWorkers.length}명 선택</div>
          <div className="manageTask-select-wrapper__reset" onClick={resetSelection}>
            초기화
          </div>
        </div>
        <Button type="button" state="default_white" width={62} height={40} onClick={distributeTasks}>
          배분
        </Button>
        <Button type="button" state="default_gray" width={62} height={40}>
          적용
        </Button>
      </SearchBar>
      <div className="manageTask-wrapper">
        <div className="ad-wrapper">
          <Table
            columns={[
              { name: '번호', width: '80px', columnHeight: '60px', rowHeight: '64px' },
              { name: '고유번호', width: '120px' },
              { name: '상품명', width: '340px' },
              { name: '광고주', width: '200px' },
              { name: '업종구분', width: '180px' },
            ]}
            data={[
              {
                번호: 1,
                고유번호: 'A13425',
                상품명: '삼성 냉장고',
                광고주: '삼성',
                업종구분: '가전',
              },
              {
                번호: 2,
                고유번호: 'A13425',
                상품명: '삼성 냉장고',
                광고주: '삼성',
                업종구분: '가전',
              },
            ]}
          />
        </div>
        <div className="divide-wrapper">
          <Table
            columns={[
              {
                name: '체크박스',
                img: <img src={check} alt="체크박스" />,
                width: '60px',
                columnHeight: '60px',
                rowHeight: '64px',
              },
              { name: '사원번호', width: '160px' },
              { name: '이름', width: '160px' },
              { name: '총배분작업', width: '160px' },
            ]}
            data={workerData.map((worker) => ({
              체크박스: (
                <input
                  className="checkBox"
                  type="checkbox"
                  checked={selectedWorkers.includes(worker.사원번호)}
                  onChange={() => handleWorkerSelection(worker.사원번호)}
                />
              ),
              사원번호: worker.사원번호,
              이름: worker.이름,
              총배분작업: distributedTasks[worker.사원번호] || '-',
            }))}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageTask;
