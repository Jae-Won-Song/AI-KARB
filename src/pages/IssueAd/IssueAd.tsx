import SearchInput from '../../components/Common/SearchInput';
import SearchBar from '../../components/Common/SearchBar';
import Table from '../../components/Common/Table';
import TagFilter from '../../components/Common/TagFilter';
import Filter from '../../components/Common/Filter';
import Calendar from '../../components/Common/Calendar';
import ReviewTag from '../../components/Common/ReviewTag';
import { useNavigate } from 'react-router-dom';
import { fetchLoadIssueAdDetail, fetchLoadIssueAdList } from '../../api/issueAd/issueAdApi';
import { useEffect, useState } from 'react';

type Advertisement = {
  adId: string;
  media: string[];
  category: string[];
  product: string;
  advertiser: string;
  state: boolean;
  issue: boolean;
};

type IssueAdList = {
  totalElements: number;
  advertisementList: Advertisement[];
};

const IssueAd = () => {
  const [issueAdData, setIssueAdData] = useState<IssueAdList | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const payload = {
      cursorInfo: {
        cursorState: true,
        cursorId: 'A00001',
      },
      keyword: null,
      period: '2024-09-1',
      state: null,
      issue: null,
      media: [],
      category: [],
    };

    fetchLoadIssueAdList(payload)
      .then((response) => {
        if (response.data.code === 3405) {
          setIssueAdData(response.data.data);
        }
      })
      .catch((error) => {
        console.error('지적광로 리스트 조회 요청 실패', error);
      });
  }, []);

  const handleRowClick = (advertisementId: string) => {
    fetchLoadIssueAdDetail({ advertisementId })
      .then((response) => {
        const adDetails = response.data.data;
        if (response.data.code === 3400) {
          navigate('/issue-ad/result/', { state: { adDetails } });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <main className="issueAd">
      <SearchBar totalCount={1079}>
        <SearchInput placeholder="검색어를 2글자 이상 입력해주세요" onChange={() => {}} />
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
        data={
          issueAdData?.advertisementList && issueAdData.advertisementList.length > 0
            ? issueAdData.advertisementList.map((ad, index) => ({
                번호: index + 1,
                고유번호: ad.adId,
                매체명: Array.isArray(ad.media) ? ad.media.join(', ') : ad.media,
                업종구분: Array.isArray(ad.category) ? ad.category.join(', ') : ad.category,
                상품명: ad.product,
                광고주: ad.advertiser,
                담당자: '담당자',
                진행상황: (
                  <ReviewTag
                    size="large"
                    containerBg={ad.state ? '#FFEDDA' : '#DEEEED'}
                    circleBg={ad.state ? '#FFB566' : '#64ACA7'}
                    content={ad.state ? '검수전' : '검수완료'}
                  />
                ),
                지적비지적: (
                  <ReviewTag
                    size="large"
                    containerBg={ad.issue ? '#FDDFE6' : '#D5EFF8'}
                    circleBg={ad.issue ? '#EB003B' : '#4B98B2'}
                    content={ad.issue ? '지적' : '비지적'}
                  />
                ),
              }))
            : []
        }
        onRowClick={(row) => handleRowClick(row.고유번호)}
      />
    </main>
  );
};

export default IssueAd;
