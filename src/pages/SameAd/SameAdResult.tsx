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

type SameAdType = {
  advertiser: string;
  category: string;
  id: string;
  postDate: string;
  product: string;
  sameSentenceCount: number;
  similarityPercent: number;
};

const SameAdResult = () => {
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [sameAd, setSameAd] = useState<SameAdType[]>([]);

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
  };

  const openDetail: React.MouseEventHandler<HTMLDivElement> = () => {
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
        {isOpenDetail ? (
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
                    <div className="sameAdResult__wrapperRight-isOpenDetail_contents_box_comparison_ratio_num">94%</div>
                  </div>
                  <div className="sameAdResult__wrapperRight-isOpenDetail_contents_box_comparison_border" />
                  <div className="sameAdResult__wrapperRight-isOpenDetail_contents_box_comparison_sameSentence">
                    <span className="sameAdResult__wrapperRight-isOpenDetail_contents_box_comparison_sameSentence_span">
                      동일문장
                    </span>
                    <div className="sameAdResult__wrapperRight-isOpenDetail_contents_box_comparison_sameSentence_num">
                      7
                    </div>
                  </div>
                </div>
              </div>

              <AdInfoTable title1="상품명" title2="광고주" content1="명작수" content2="아모레퍼시픽 코리아" />
              <AdInfoTable title1="업종구분" title2="게재일" content1="식품/음료" content2="2024-07-26" />
              <div className="sameAdResult__wrapperRight-isOpenDetail_contents_article">
                기사내용 (스크롤 테스트 완료)
              </div>
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
                  onClick={openDetail}
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
