import SearchBar from '../components/Common/SearchBar';
import SearchInput from '../components/Common/SearchInput';
import Filter from '../components/Common/Filter';
import TagFilter from '../components/Common/TagFilter';
import Calendar from '../components/Common/Calendar';
import Table from '../components/Common/Table';

const MyTasks = () => {
  return (
    <div className="myTasks">
      <div className="myTasks__container">
        <div className="myTasks__container__tasksBox">
          <div className="myTasks__container__tasksBox__tasks">
            <div className="myTasks__container__tasksBox__tasks__task">
              <div className="myTasks__container__tasksBox__tasks__task_title">전체 작업</div>
              <div className="myTasks__container__tasksBox__tasks__task_content">200건</div>
            </div>
            <div className="myTasks__container__tasksBox__tasks__task">
              <div className="myTasks__container__tasksBox__tasks__task_title">전체 작업</div>
              <div className="myTasks__container__tasksBox__tasks__task_content">200건</div>
            </div>
            <div className="myTasks__container__tasksBox__tasks__task">
              <div className="myTasks__container__tasksBox__tasks__task_title">전체 작업</div>
              <div className="myTasks__container__tasksBox__tasks__task_content">200건</div>
            </div>
            <div className="myTasks__container__tasksBox__tasks__task">
              <div className="myTasks__container__tasksBox__tasks__task_title">전체 작업</div>
              <div className="myTasks__container__tasksBox__tasks__task_content">200건</div>
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
            { name: '번호', width: '4.167vw' },
            { name: '고유번호', width: '6.25vw' },
            { name: '매체명', width: '12.5vw' },
            { name: '업종구분', width: '9.375vw' },
            { name: '상품명', width: '19.792vw' },
            { name: '광고주', width: '12.5vw' },
            { name: '진행상황', width: '8.333vw' },
            { name: '작업진척도', width: '9.375vw' },
          ]}
          data={[
            {
              번호: 1,
              고유번호: 'A13425',
              매체명: '홍길동',
              업종구분: '10건',
              상품명: '2건',
              광고주: '8건',
              진행상황: '80%',
              작업진척도: '80%',
            },
            {
              번호: 1,
              고유번호: 'A13425',
              매체명: '홍길동',
              업종구분: '10건',
              상품명: '2건',
              광고주: '8건',
              진행상황: '80%',
              작업진척도: '80%',
            },
            {
              번호: 1,
              고유번호: 'A13425',
              매체명: '홍길동',
              업종구분: '10건',
              상품명: '2건',
              광고주: '8건',
              진행상황: '80%',
              작업진척도: '80%',
            },
            {
              번호: 1,
              고유번호: 'A13425',
              매체명: '홍길동',
              업종구분: '10건',
              상품명: '2건',
              광고주: '8건',
              진행상황: '80%',
              작업진척도: '80%',
            },
            {
              번호: 1,
              고유번호: 'A13425',
              매체명: '홍길동',
              업종구분: '10건',
              상품명: '2건',
              광고주: '8건',
              진행상황: '80%',
              작업진척도: '80%',
            },
            {
              번호: 1,
              고유번호: 'A13425',
              매체명: '홍길동',
              업종구분: '10건',
              상품명: '2건',
              광고주: '8건',
              진행상황: '80%',
              작업진척도: '80%',
            },
            {
              번호: 1,
              고유번호: 'A13425',
              매체명: '홍길동',
              업종구분: '10건',
              상품명: '2건',
              광고주: '8건',
              진행상황: '80%',
              작업진척도: '80%',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default MyTasks;
