import SearchInput from '../../components/Common/SearchInput';
import SearchBar from '../../components/Common/SearchBar';
import Table from '../../components/Common/Table';
import TagFilter from '../../components/Common/TagFilter';
import Filter from '../../components/Common/Filter';
import Calendar from '../../components/Common/Calendar';
import ReviewTag from '../../components/Common/ReviewTag';
import { useNavigate } from 'react-router-dom';
import { fetchLoadIssueAdDetail } from '../../api/issueAd/issueAdApi';

const IssueAd = () => {
  const navigate = useNavigate();

  const handleRowClick = (advertisementId: string) => {
    fetchLoadIssueAdDetail({ advertisementId })
      .then((response) => {
        if (response.data.code === 3400) {
          const adDetails = response.data;
          navigate('/issue-ad/result', { state: { adDetails } });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <main className="issueAd">
      <SearchBar>
        <SearchInput placeholder="검색어를 2글자 이상 입력해주세요" />
        <TagFilter tag1="전체" tag2="지적" tag3="비지적" />
        <TagFilter tag1="전체" tag2="검수전" tag3="검수완료" />
        <Filter />
        <Calendar />
      </SearchBar>
      <Table
        columns={[
          { name: '번호', width: '4.878vw', columnHeight: '5.556vh', rowHeight: '5.926vh' },
          { name: '고유번호', width: '7.317vw' },
          { name: '매체명', width: '10.976vw' },
          { name: '업종구분', width: '10.976vw' },
          { name: '상품명', width: '23.171vw' },
          { name: '광고주', width: '10.976vw' },
          { name: '담당자', width: '9.756vw' },
          { name: '진행상황', width: '8.537vw' },
          { name: '지적비지적', width: '9.756vw' },
        ]}
        data={[
          {
            번호: 1,
            고유번호: '202409A00001',
            매체명: '경상남도민일보',
            업종구분: '식품',
            상품명: '상품명상품명상품명',
            광고주: '한천KPS',
            담당자: '동일',
            진행상황: <ReviewTag size="large" containerBg="#FFEDDA" circleBg="orange" content="검수전" />,
            지적비지적: <ReviewTag size="large" containerBg="#FDDFE6" circleBg="red" content="지적" />,
          },
          {
            번호: 1,
            고유번호: '202409A00001',
            매체명: '경상남도민일보',
            업종구분: '식품',
            상품명: '상품명상품명상품명',
            광고주: '한천KPS',
            담당자: '동일',
            진행상황: <ReviewTag size="large" containerBg="#FFEDDA" circleBg="orange" content="검수전" />,
            지적비지적: <ReviewTag size="large" containerBg="#FDDFE6" circleBg="red" content="지적" />,
          },
          {
            번호: 1,
            고유번호: '202409A00001',
            매체명: '경상남도민일보',
            업종구분: '식품',
            상품명: '상품명상품명상품명',
            광고주: '한천KPS',
            담당자: '동일',
            진행상황: <ReviewTag size="large" containerBg="#FFEDDA" circleBg="orange" content="검수전" />,
            지적비지적: <ReviewTag size="large" containerBg="#FDDFE6" circleBg="red" content="지적" />,
          },
        ]}
        onRowClick={(row) => handleRowClick(row.고유번호)}
      />
    </main>
  );
};

export default IssueAd;
