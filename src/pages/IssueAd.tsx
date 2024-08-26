import SearchBar from '../components/SearchBar';
import Table from '../components/Table';

const IssueAd = () => {
  return (
    <main className="issueAd">
      <SearchBar />
      <Table
        columns={[
          { name: '번호', width: '48px' },
          { name: '고유번호', width: '120px' },
          { name: '매체명', width: '180px' },
          { name: '업종구분', width: '180px' },
          { name: '상품명', width: '380px' },
          { name: '광고주', width: '180px' },
          { name: '담당자', width: '160px' },
          { name: '진행상황', width: '140px' },
          { name: '지적비지적', width: '160px' },
        ]}
        data={[
          {
            번호: 1,
            고유번호: 'A13425',
            매체명: '경상남도민일보',
            업종구분: '식품',
            상품명: '상품명상품명상품명',
            광고주: '한천KPS',
            담당자: '동일',
            진행상황: '검수전',
            지적비지적: '지적',
          },
          {
            번호: 1,
            고유번호: 'A13425',
            매체명: '경상남도민일보',
            업종구분: '식품',
            상품명: '상품명상품명상품명',
            광고주: '한천KPS',
            담당자: '동일',
            진행상황: '검수전',
            지적비지적: '지적',
          },
          {
            번호: 1,
            고유번호: 'A13425',
            매체명: '경상남도민일보',
            업종구분: '식품',
            상품명: '상품명상품명상품명',
            광고주: '한천KPS',
            담당자: '동일',
            진행상황: '검수전',
            지적비지적: '지적',
          },
        ]}
      />
    </main>
  );
};

export default IssueAd;
