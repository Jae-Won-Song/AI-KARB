import SearchInput from '../../components/Common/SearchInput';
import SearchBar from '../../components/Common/SearchBar';
import Table from '../../components/Common/Table';
import TagFilter from '../../components/Common/TagFilter';
import Filter from '../../components/Common/Filter';
import Calendar from '../../components/Common/Calendar';

const SameAd = () => {
  return (
    <main className="SameAd">
      <SearchBar>
        <SearchInput placeholder="검색어를 2글자 이상 입력해주세요" />
        <TagFilter tag1="전체" tag2="동일" tag3="비동일" />
        <Filter />
        <Calendar />
      </SearchBar>
      <Table
        columns={[
          { name: '번호', width: '88px', rowHeight: '5.926vh', columnHeight: '5.556vh' },
          { name: '고유번호', width: '160px' },
          { name: '매체명', width: '240px' },
          { name: '업종구분', width: '200px' },
          { name: '상품명', width: '420px' },
          { name: '광고주', width: '240px' },
          { name: '검수결과', width: '200px' },
        ]}
        data={[
          {
            번호: 1,
            고유번호: 'A13425',
            매체명: '경상남도민일보',
            업종구분: '식품',
            상품명: '상품명상품명상품명',
            광고주: '한천KPS',
            검수결과: '동일',
          },
          {
            번호: 1,
            고유번호: 'A13425',
            매체명: '경상남도민일보',
            업종구분: '식품',
            상품명: '상품명상품명상품명',
            광고주: '한천KPS',
            검수결과: '동일',
          },
          {
            번호: 1,
            고유번호: 'A13425',
            매체명: '경상남도민일보',
            업종구분: '식품',
            상품명: '상품명상품명상품명',
            광고주: '한천KPS',
            검수결과: '동일',
          },
          {
            번호: 1,
            고유번호: 'A13425',
            매체명: '경상남도민일보',
            업종구분: '식품',
            상품명: '상품명상품명상품명',
            광고주: '한천KPS',
            검수결과: '동일',
          },
          {
            번호: 1,
            고유번호: 'A13425',
            매체명: '경상남도민일보',
            업종구분: '식품',
            상품명: '상품명상품명상품명',
            광고주: '한천KPS',
            검수결과: '동일',
          },
          {
            번호: 1,
            고유번호: 'A13425',
            매체명: '경상남도민일보',
            업종구분: '식품',
            상품명: '상품명상품명상품명',
            광고주: '한천KPS',
            검수결과: '동일',
          },
          {
            번호: 1,
            고유번호: 'A13425',
            매체명: '경상남도민일보',
            업종구분: '식품',
            상품명: '상품명상품명상품명',
            광고주: '한천KPS',
            검수결과: '동일',
          },
        ]}
      />
    </main>
  );
};

export default SameAd;
