import { useEffect, useState, useCallback } from 'react';
import SearchBar from '../components/Common/SearchBar';
import SearchInput from '../components/Common/SearchInput';
import Filter from '../components/Common/Filter';
import TagFilter from '../components/Common/TagFilter';
import Calendar from '../components/Common/Calendar';
import Table from '../components/Common/Table';
import totalTask from '../assets/icon-totalTask.svg';
import doneTask from '../assets/icon-doneTask.svg';
import notDoneTask from '../assets/icon-notDoneTask.svg';
import ReviewTag from '../components/Common/ReviewTag';
import { fetchMyTaskData } from '../api/user/userApi';
import Spinner from '../components/Common/Spinner';

interface Advertisement {
  adId: string;
  media: string[];
  category: string[];
  product: string;
  advertiser: string;
  state: boolean;
  issue: boolean;
}

interface Advertisement {
  adId: string;
  media: string[];
  category: string[];
  product: string;
  advertiser: string;
  state: boolean;
  issue: boolean;
}

const MyTasks = () => {
  const [taskData, setTaskData] = useState<Advertisement[]>([]);
  const [adCount, setAdCount] = useState({ myTotalAd: 0, myDoneAd: 0, myNotDoneAd: 0 });
  const [cursorId, setCursorId] = useState<string | null>('N00001');
  const [hasMore, setHasMore] = useState(true);

  const fetchTaskData = useCallback(async () => {
    if (!cursorId) return;

    try {
      const response = await fetchMyTaskData(cursorId, taskData.length);

      const newTaskData = response.data.data.taskList.advertisementList;
      const newAdCount = response.data.data.adCount;
      const newCursorId = response.data.data.taskList.cursorInfo?.cursorId || null;

      setTaskData((prev) => [...prev, ...newTaskData]);
      setAdCount(newAdCount);
      setCursorId(newCursorId);
      setHasMore(newTaskData.length > 0);
    } catch (error) {
      console.error('에러', error);
    }
  }, [cursorId, taskData]);

  useEffect(() => {
    fetchTaskData();
  }, [fetchTaskData]);

  if (!taskData || taskData.length === 0) {
    return <Spinner />;
  }

  return (
    <div className="myTasks">
      <div className="myTasks__container">
        <div className="myTasks__container__tasksBox">
          <div className="myTasks__container__tasksBox__tasks">
            <div className="myTasks__container__tasksBox__tasks__task">
              <div className="myTasks__container__tasksBox__tasks__task__area">
                <div className="myTasks__container__tasksBox__tasks__task__area_title">전체 작업</div>
                <div className="myTasks__container__tasksBox__tasks__task__area_content">{adCount.myTotalAd}건</div>
              </div>
              <img src={totalTask} alt="전체 작업 수" />
            </div>
            <div className="myTasks__container__tasksBox__tasks__task">
              <div className="myTasks__container__tasksBox__tasks__task__area">
                <div className="myTasks__container__tasksBox__tasks__task__area_title">완료건</div>
                <div className="myTasks__container__tasksBox__tasks__task__area_content">{adCount.myDoneAd}건</div>
              </div>
              <img src={doneTask} alt="완료 작업 수" />
            </div>
            <div className="myTasks__container__tasksBox__tasks__task">
              <div className="myTasks__container__tasksBox__tasks__task__area">
                <div className="myTasks__container__tasksBox__tasks__task__area_title">미완료건</div>
                <div className="myTasks__container__tasksBox__tasks__task__area_content">{adCount.myNotDoneAd}건</div>
              </div>
              <img src={notDoneTask} alt="미완료 작업 수" />
            </div>
          </div>
        </div>
        <SearchBar>
          <SearchInput placeholder="검색할거임" />
          <TagFilter tag1="전체" tag2="지적" tag3="비지적" />
          <TagFilter tag1="전체" tag2="검수" tag3="검수완료" />
          <Filter />
          <Calendar />
        </SearchBar>

        <Table
          columns={[
            { name: '번호', width: '4.167vw', rowHeight: '5.926vh', columnHeight: '5.556vh' },
            { name: '고유번호', width: '6.25vw' },
            { name: '매체명', width: '12.5vw' },
            { name: '업종구분', width: '9.375vw' },
            { name: '상품명', width: '19.792vw' },
            { name: '광고주', width: '12.5vw' },
            { name: '진행상황', width: '8.333vw' },
            { name: '지적비지적', width: '9.375vw' },
          ]}
          data={
            taskData && taskData.length > 0
              ? taskData.map((task, index) => ({
                  번호: index + 1,
                  고유번호: task.adId,
                  매체명: Array.isArray(task.media) ? task.media.join(', ') : task.media,
                  업종구분: Array.isArray(task.category) ? task.category.join(', ') : task.category,
                  상품명: task.product,
                  광고주: task.advertiser,
                  진행상황: (
                    <ReviewTag
                      size="large"
                      containerBg={task.state ? '#DEEEED' : '#FFEDDA'}
                      circleBg={task.state ? '#64ACA7' : '#FFB566'}
                      content={task.state ? '검수완료' : '검수전'}
                    />
                  ),
                  지적비지적: (
                    <ReviewTag
                      size="large"
                      containerBg={task.issue ? '#FDDFE6' : '#D5EFF8'}
                      circleBg={task.issue ? '#EB003B' : '#4B98B2'}
                      content={task.issue ? '지적' : '비지적'}
                    />
                  ),
                }))
              : []
          }
        />
      </div>
      {hasMore && <Spinner />}
    </div>
  );
};

export default MyTasks;
