import SearchInput from '../../components/Common/SearchInput';
import SearchBar from '../../components/Common/SearchBar';
import Table from '../../components/Common/Table';
import TagFilter from '../../components/Common/TagFilter';
import Filter from '../../components/Common/Filter';
import Calendar from '../../components/Common/Calendar';
import ReviewTag from '../../components/Common/ReviewTag';
import { useEffect, useState } from 'react';
import { fetchLoadSameAdList, fetchLoadSameAdResult } from '../../api/sameAd/sameAdApi';
import { useNavigate } from 'react-router-dom';

type Advertisement = {
  adId: string;
  media: string[];
  category: string[];
  product: string;
  advertiser: string;
  same: boolean;
};

type SameAdList = {
  totalElements: number;
  sameAdvertisementList: Advertisement[];
};

const SameAd = () => {
  const [sameAdData, setSameAdData] = useState<SameAdList | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const payload = {
      cursorId: '202409N00001',
      keyword: null,
      period: '2024-09-2',
      same: null,
      media: [],
      category: [],
    };

    fetchLoadSameAdList(payload)
      .then((response) => {
        console.log(response);
        if (response.data.code === 3700) {
          console.log('동일광고 리스트', response);
          setSameAdData(response.data.data);
        }
      })
      .catch((error) => {
        console.error('동일광고 리스트 조회 실패', error);
      });
  }, []);

  const handleRowClick = (inspectionAdvertisementId: string | number | undefined) => {
    if (typeof inspectionAdvertisementId === 'string') {
      fetchLoadSameAdResult({ inspectionAdvertisementId })
        .then((response) => {
          const adDetails = response.data.data;
          if (response.data.code === 3701) {
            console.log('동일광고 유사율 조회', response);
            navigate('/same-ad/result/', { state: { adDetails } });
          }
        })
        .catch((error) => {
          console.error('동일광고 유사율 조회 실패', error);
        });
    }
  };

  return (
    <main className="SameAd">
      <SearchBar totalCount={sameAdData?.totalElements || 0}>
        <SearchInput placeholder="검색어를 2글자 이상 입력해주세요" onChange={() => {}} />
        <TagFilter tag1="전체" tag2="동일" tag3="비동일" />
        <Filter />
        <Calendar />
      </SearchBar>
      <Table
        columns={[
          { name: '번호', width: '6.250vw', rowHeight: '5.926vh', columnHeight: '5.556vh' },
          { name: '고유번호', width: '8.333vw' },
          { name: '매체명', width: '12.5vw' },
          { name: '업종구분', width: '10.417vw' },
          { name: '상품명', width: '21.875vw' },
          { name: '광고주', width: '12.5vw' },
          { name: '검수결과', width: '10.417vw' },
        ]}
        data={
          sameAdData?.sameAdvertisementList && sameAdData.sameAdvertisementList.length > 0
            ? sameAdData.sameAdvertisementList.map((ad, index) => ({
                번호: index + 1,
                고유번호: ad.adId,
                매체명: Array.isArray(ad.media) ? ad.media.join(', ') : ad.media,
                업종구분: Array.isArray(ad.category) ? ad.category.join(', ') : ad.category,
                상품명: ad.product,
                광고주: ad.advertiser,
                검수결과: (
                  <ReviewTag
                    size="large"
                    containerBg={ad.same ? '#D9DFF9' : '#E4E4E4'}
                    circleBg={ad.same ? '#5A6CBD' : '#8E8E8E'}
                    content={ad.same ? '동일' : '비동일'}
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

export default SameAd;
