import SearchBar from '../../components/Common/SearchBar';
import check from '../../assets/check-signup-request.svg';
import Table from '../../components/Common/Table';
import Button from '../../components/Common/Button';

const ManageTask = () => {
  return (
    <div className="manageTask-container">
      <SearchBar>
        <div className="manageTask-select-wrapper">
          총 20명
          <div className="manageTask-select-wrapper__slash">/</div>
          <div className="manageTask-select-wrapper__selectPeople">3명 선택</div>
          <div className="manageTask-select-wrapper__reset">초기화</div>
        </div>
        <Button type="button" state="default_white" width={62} height={40}>
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
              {
                번호: 3,
                고유번호: 'A13425',
                상품명: '삼성 냉장고',
                광고주: '삼성',
                업종구분: '가전',
              },
              {
                번호: 4,
                고유번호: 'A13425',
                상품명: '삼성 냉장고',
                광고주: '삼성',
                업종구분: '가전',
              },
              {
                번호: 5,
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
            data={[
              {
                체크박스: <input className="checkBox" type="checkbox" />,
                사원번호: 'A13425',
                이름: '이수아',
                총배분작업: '-',
              },
              {
                체크박스: <input className="checkBox" type="checkbox" />,
                사원번호: 'A13425',
                이름: '이수아',
                총배분작업: '-',
              },
              {
                체크박스: <input className="checkBox" type="checkbox" />,
                사원번호: 'A13425',
                이름: '이수아',
                총배분작업: '-',
              },
              {
                체크박스: <input className="checkBox" type="checkbox" />,
                사원번호: 'A13425',
                이름: '이수아',
                총배분작업: '-',
              },
              {
                체크박스: <input className="checkBox" type="checkbox" />,
                사원번호: 'A13425',
                이름: '이수아',
                총배분작업: '-',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageTask;
