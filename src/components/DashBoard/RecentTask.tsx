import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchDashBoardData from '../../api/dashboard/dashboardApi';
import Table from '../Common/Table';
import rightArrow from '../../assets/chevron-right.svg';

interface RecentDoneItem {
  adId: string;
  adName: string;
  adTaskDateTime: string;
}

const RecentTask = () => {
  const [recentDoneList, setRecentDoneList] = useState<RecentDoneItem[]>([]);
  const navigate = useNavigate();

  const handleMyTask = () => {
    navigate('/my-task');
  };

  useEffect(() => {
    const getRecentDoneList = async () => {
      try {
        const response = await fetchDashBoardData();
        if (response && response.data && response.data.data) {
          const { recentDoneList } = response.data.data;
          setRecentDoneList(recentDoneList);
          console.log(response.data);
        }
      } catch (error) {
        console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    getRecentDoneList();
  }, []);

  const getFormattedData = () => {
    return recentDoneList.slice(0, 5).map((item, index) => ({
      번호: index + 1,
      고유번호: item.adId,
      상품명: item.adName,
      작업날짜: item.adTaskDateTime,
    }));
  };

  const columns = [
    { name: '번호', width: '3vw', columnHeight: '22px', rowHeight: '7px' },
    { name: '고유번호', width: '6vw', columnHeight: '22px', rowHeight: '7px' },
    { name: '상품명', width: '8vw', columnHeight: '22px', rowHeight: '7px' },
    { name: '작업날짜', width: '9vw', columnHeight: '22px', rowHeight: '7px' },
  ];

  const data = getFormattedData();

  return (
    <section className="recent-wrapper">
      <div className="recent-wrapper__header">
        <div className="recent-wrapper__header__title">최근작업</div>
        <div className="recent-wrapper__header__detail">
          <div className="recent-wrapper__header__arrow" onClick={handleMyTask}>
            자세히 보기
            <img src={rightArrow} alt="내 작업 바로가기" />
          </div>
        </div>
      </div>
      <div className="recent-wrapper__table">
        <Table
          columns={columns}
          data={data}
          headerClassName="recent-wrapper__table"
          rowClassName="recent-wrapper__table__info"
        />
      </div>
    </section>
  );
};

export default RecentTask;
