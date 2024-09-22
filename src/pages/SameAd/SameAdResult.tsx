import arrowLeft from '../../assets/arrow-left.svg';
import chevronLeft from '../../assets/chevron-left.svg';
import SameAdResultBox from '../../components/SameAdResultBox';
import AdInfoTable from '../../components/AdInfoTable';
import ReviewAdNumber from '../../components/ReviewAdNumber';
import ReviewAdResult from '../../components/ReviewAdResult';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fileCheck from '../../assets/icon-file-check.svg';
import fileSearch from '../../assets/icon-file-search.svg';
import { fetchLoadSameAdResultDetail } from '../../api/sameAd/sameAdApi';

type SameAdType = {
  advertiser: string;
  category: string;
  id: string;
  postDate: string;
  product: string;
  sameSentenceCount: number;
  similarityPercent: number;
};

type SameAdDetailType = {
  similarityPercent: number;
  sameSentenceCount: number;
  content: string;
  sameSentence: string;
};

const SameAdResult = () => {
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [sameAd, setSameAd] = useState<SameAdType[]>([]);
  const [selectedAdDetail, setSelectedAdDetail] = useState<SameAdDetailType | null>(null);
  const [selectedSameAd, setSelectedSameAd] = useState<SameAdType | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  // 동일광고 목록 페이지에서 요청한 데이터 응답
  const adDetails = location.state?.adDetails;

  useEffect(() => {
    console.log(adDetails);

    if (adDetails && adDetails.adSimilarityInfoList) {
      setSameAd(
        adDetails.adSimilarityInfoList.map((sameAd: SameAdType, index: number) => ({
          advertiser: sameAd.advertiser,
          category: sameAd.category,
          id: sameAd.id,
          postDate: sameAd.postDate,
          product: sameAd.product,
          sameSentenceCount: sameAd.sameSentenceCount,
          similarityPercent: sameAd.similarityPercent,
        })),
      );
    }
  }, [adDetails]);

  const goBack = () => {
    navigate(-1);
  };

  const closeDetail = () => {
    setIsOpenDetail(false);
    setSelectedAdDetail(null);
  };

  const openDetail = (selectedAd: SameAdType) => {
    setSelectedSameAd(selectedAd);

    console.log('selectedAd', selectedAd);

    const payload = {
      inspectionAdvertisementId: adDetails?.inspectionAdInfo.id,
      comparisonAdvertisementId: selectedAd.id,
    };

    console.log('payload', payload);

    fetchLoadSameAdResultDetail(payload)
      .then((response) => {
        console.log('유사율 상세보기 조회', response);
        setSelectedAdDetail(response.data.data);
      })
      .catch((error) => {
        console.error('유사율 상세보기 조회 실패', error);
      });

    setIsOpenDetail(true);
  };

  const getShortProductName = (product: string) => {
    if (product.length > 10) {
      return `${product.substring(0, 10)}...`;
    }
    return product;
  };

  return (
    <main className="sameAdResult">
      <article className="sameAdResult__wrapperLeft">
        <button className="sameAdResult__wrapperLeft_arrow" onClick={goBack}>
          <img src={arrowLeft} alt="뒤로가기 화살표" />
        </button>
        <div className="sameAdResult__wrapperLeft_contents">
          <ReviewAdNumber adTitle="검수 광고" adNumber={adDetails?.inspectionAdInfo?.id} imgSrc={fileSearch} />
          <AdInfoTable
            title1="상품명"
            title2="광고주"
            content1={adDetails?.inspectionAdInfo?.product}
            content2={adDetails?.inspectionAdInfo?.advertiser}
          />
          <AdInfoTable
            title1="업종구분"
            title2="게재일"
            content1={adDetails?.inspectionAdInfo?.category}
            content2={adDetails?.inspectionAdInfo?.postDate}
          />
          <div className="sameAdResult__wrapperLeft_contents_article">{adDetails?.inspectionAdInfo?.content}</div>
        </div>
      </article>
      <div className="middleBar"> </div>
      <article className="sameAdResult__wrapperRight">
        {isOpenDetail && selectedSameAd && selectedAdDetail ? (
          <div className="sameAdResult__wrapperRight-isOpenDetail">
            <button className="sameAdResult__wrapperRight-isOpenDetail_arrow" onClick={closeDetail}>
              <img src={chevronLeft} alt="뒤로가기 화살표" />
              <span>이전으로</span>
            </button>
            <div className="sameAdResult__wrapperRight-isOpenDetail_contents">
              <div className="sameAdResult__wrapperRight-isOpenDetail_contents_box">
                <ReviewAdNumber adTitle="비교 광고" adNumber="A12345" imgSrc={fileCheck} />
                <div className="sameAdResult__wrapperRight-isOpenDetail_contents_box_comparison">
                  <div className="sameAdResult__wrapperRight-isOpenDetail_contents_box_comparison_ratio">
                    <span className="sameAdResult__wrapperRight-isOpenDetail_contents_box_comparison_ratio_span">
                      유사도
                    </span>
                    <div className="sameAdResult__wrapperRight-isOpenDetail_contents_box_comparison_ratio_num">
                      {selectedSameAd.similarityPercent}%
                    </div>
                  </div>
                  <div className="sameAdResult__wrapperRight-isOpenDetail_contents_box_comparison_border" />
                  <div className="sameAdResult__wrapperRight-isOpenDetail_contents_box_comparison_sameSentence">
                    <span className="sameAdResult__wrapperRight-isOpenDetail_contents_box_comparison_sameSentence_span">
                      동일문장
                    </span>
                    <div className="sameAdResult__wrapperRight-isOpenDetail_contents_box_comparison_sameSentence_num">
                      {selectedSameAd.sameSentenceCount}
                    </div>
                  </div>
                </div>
              </div>

              <AdInfoTable
                title1="상품명"
                title2="광고주"
                content1={selectedSameAd.product}
                content2={selectedSameAd.advertiser}
              />
              <AdInfoTable
                title1="업종구분"
                title2="게재일"
                content1={selectedSameAd.category}
                content2={selectedSameAd.postDate}
              />
              <div className="sameAdResult__wrapperRight-isOpenDetail_contents_article">{selectedAdDetail.content}</div>
            </div>
          </div>
        ) : (
          <div className="sameAdResult__wrapperRight_contents">
            <ReviewAdResult
              reviewNumber={adDetails?.adSimilarityInfoList.length}
              detailSpan="동일 광고는 유사도 80% 이상의 광고만 간주합니다."
            />
            <div className="sameAdResult__wrapperRight_contents_resultBox">
              {sameAd.map((ad, index) => (
                <SameAdResultBox
                  key={index}
                  id={ad.id}
                  product={getShortProductName(ad.product)}
                  advertiser={ad.advertiser}
                  category={ad.category}
                  postDate={ad.postDate}
                  similarityPercent={ad.similarityPercent}
                  sameSentenceCount={ad.sameSentenceCount}
                  onClick={() => openDetail(ad)}
                />
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
};

export default SameAdResult;
