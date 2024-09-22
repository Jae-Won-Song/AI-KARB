import { useState, useEffect, useRef } from 'react';
import SearchBar from '../../components/Common/SearchBar';
import { fetchEmpList, fetchAdList, fetchManageTask } from '../../api/admin/adminApi';
import check from '../../assets/check-signup-request.svg';
import Table from '../../components/Common/Table';
import Button from '../../components/Common/Button';
import Modal from '../../components/Common/Modal';
import Spinner from '../../components/Common/Spinner';

interface AdList {
  adId: string;
  product: string;
  advertiser: string;
  category: string;
}

interface EmpList {
  id: number;
  empNo: string;
  name: string;
  additionalTaskCount: number;
}

const ManageTask = () => {
  const [selectedWorkers, setSelectedWorkers] = useState<string[]>([]);
  const [distributedTasks, setDistributedTasks] = useState<{ [key: string]: number }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCursorId, setCurrentCursorId] = useState<string | null>(null);
  const [adList, setAdList] = useState<AdList[]>([]);
  const [empList, setEmpList] = useState<EmpList[]>([]);
  const adWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getEmpList = async () => {
      try {
        const response = await fetchEmpList();
        if (response && response.data && response.data.data) {
          const { assigneeList } = response.data.data;
          setEmpList(assigneeList);
        }
      } catch (error) {
        console.error('작업자 조회 실패:', error);
      }
    };

    getEmpList();
  }, []);

  const getAdList = async (cursorId: string | null) => {
    try {
      const response = await fetchAdList(cursorId);
      if (response && response.data && response.data.data) {
        const { contents, currentCursorId: newCursorId } = response.data.data;

        const existingAdIds = new Set(adList.map((ad) => ad.adId));

        const newAds = contents.filter((ad: AdList) => !existingAdIds.has(ad.adId));
        if (newAds.length > 0) {
          setAdList((prevAdList) => [...prevAdList, ...newAds]);
        }

        setCurrentCursorId(newCursorId);
      }
    } catch (error) {
      console.error('광고 조회 실패:', error);
    }
  };

  useEffect(() => {
    getAdList(null);
  });

  useEffect(() => {
    const handleScroll = () => {
      const adWrapper = adWrapperRef.current;
      if (adWrapper) {
        const { scrollTop, scrollHeight, clientHeight } = adWrapper;

        const isScrolledToBottom = scrollHeight - scrollTop <= clientHeight + 50;

        if (isScrolledToBottom && currentCursorId) {
          getAdList(currentCursorId);
        }
      }
    };

    const adWrapperElement = adWrapperRef.current;
    if (adWrapperElement) {
      adWrapperElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (adWrapperElement) {
        adWrapperElement.removeEventListener('scroll', handleScroll);
      }
    };
  });

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

    setIsLoading(true);

    setTimeout(() => {
      const tasksPerWorker = Math.floor(adList.length / selectedWorkers.length);
      const taskDistribution = selectedWorkers.reduce(
        (acc, workerId) => {
          acc[workerId] = tasksPerWorker;
          return acc;
        },
        {} as { [key: string]: number },
      );

      setDistributedTasks(taskDistribution);
      setIsLoading(false);
    }, 1000);
  };

  const resetSelection = () => {
    setSelectedWorkers([]);
    setDistributedTasks({});
  };

  const handleApply = () => {
    if (Object.keys(distributedTasks).length === 0) return;
    setIsModalOpen(true);
  };

  const applyDistribution = async () => {
    const selectedAssignments = selectedWorkers
      .map((workerId) => ({
        id: empList.find((worker) => worker.empNo === workerId)?.id,
        taskAssignmentAmount: distributedTasks[workerId] || 0,
      }))
      .filter(Boolean);

    const requestBody = { selectedAssigneeList: selectedAssignments };

    try {
      await fetchManageTask(requestBody);
      console.log('배분이 적용되었습니다:', requestBody);
    } catch (error) {
      console.error('배분 적용 실패:', error);
    }

    setIsModalOpen(false);
  };

  return (
    <div className="manageTask-container">
      <SearchBar totalCount={adList.length}>
        <div className="manageTask-select-wrapper">
          총 {empList.length}명<div className="manageTask-select-wrapper__slash">/</div>
          <div className="manageTask-select-wrapper__selectPeople">{selectedWorkers.length}명 선택</div>
          <div className="manageTask-select-wrapper__reset" onClick={resetSelection}>
            초기화
          </div>
        </div>
        <Button type="button" state="default_white" width={62} height={40} onClick={distributeTasks}>
          배분
        </Button>
        <Button type="button" state="default_gray" width={62} height={40} onClick={handleApply}>
          적용
        </Button>
      </SearchBar>
      {isLoading && <Spinner />}
      <div className="manageTask-wrapper">
        <div className="ad-wrapper" ref={adWrapperRef}>
          <Table
            columns={[
              { name: '번호', width: '80px', columnHeight: '60px', rowHeight: '64px' },
              { name: '고유번호', width: '120px' },
              { name: '상품명', width: '340px' },
              { name: '광고주', width: '200px' },
              { name: '업종구분', width: '180px' },
            ]}
            data={adList.map((ad, index) => ({
              번호: index + 1,
              고유번호: ad.adId,
              상품명: ad.product,
              광고주: ad.advertiser,
              업종구분: ad.category,
            }))}
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
            data={empList.map((worker) => ({
              체크박스: (
                <input
                  className="checkBox"
                  type="checkbox"
                  checked={selectedWorkers.includes(worker.empNo)}
                  onChange={() => handleWorkerSelection(worker.empNo)}
                />
              ),
              사원번호: worker.empNo,
              이름: worker.name,
              총배분작업: distributedTasks[worker.empNo] || '-',
            }))}
          />
        </div>
        {isModalOpen && (
          <Modal
            title="배분 적용"
            content="이대로 작업 배분을 진행하시겠습니까?"
            btnContentOne="취소"
            btnContentTwo="확인"
            add="blue"
            mode="default"
            onClickOne={() => setIsModalOpen(false)}
            onClickTwo={applyDistribution}
          />
        )}
      </div>
    </div>
  );
};

export default ManageTask;
