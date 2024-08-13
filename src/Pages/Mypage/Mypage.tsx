const Mypage = () => {
  return (
    <div className="mypage">
      <div className="mypage__container">
        <div className="mypage__container__bg" />
        <div className="mypage__container__nav">
          <div className="mypage__container__nav__profile-image">재원</div>
          <div className="mypage__container__nav__name">송재원</div>
          <div className="mypage__container__nav__class">피해자</div>
          <div className="mypage__container__nav__nav-area">
            <div className="mypage__container__nav__nav-area_item">개인정보 수정</div>
            <div className="mypage__container__nav__nav-area_item">비밀번호 변경</div>
          </div>
          <div className="mypage__container__nav__save-btn">저장하기</div>
        </div>
        <div className="mypage__container__form-area">
          <div className="mypage__container__form-area-box">
            <div className="mypage__container__form-area-box__title">이름</div>
            <div className="mypage__container__form-area-box__content">송재원</div>
          </div>
          <div className="mypage__container__form-area-box">
            <div className="mypage__container__form-area-box__title">연락처</div>
            <input
              className="mypage__container__form-area-box__form-phone"
              placeholder="연락처 ('-'을 제외한 숫자만 입력)"
            />
            <button className="mypage__container__form-area-box__confirm-btn">인증요청</button>
          </div>
          <div className="mypage__container__form-area-box">
            <div className="mypage__container__form-area-box__title">아이디</div>
            <div className="mypage__container__form-area-box__content">dydtkwodnjs</div>
          </div>
          <div className="mypage__container__form-area-box">
            <div className="mypage__container__form-area-box__title">사원번호</div>
            <div className="mypage__container__form-area-box__content">AH18HAKI15</div>
          </div>
          <div className="mypage__container__form-area-box">
            <div className="mypage__container__form-area-box__title">이메일</div>
            <input className="mypage__container__form-area-box__form-email" placeholder="이메일" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
