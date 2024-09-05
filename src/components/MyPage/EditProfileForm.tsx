import Button from '../Common/Button';
import Input from '../Common/Input';
import { useState } from 'react';

const EditProfileForm = () => {
  const [certifyForm, setCertyfyForm] = useState(0);
  return (
    <form className="mypage__container__form">
      <div className="mypage__container__form__info">
        <div className="mypage__container__form__info-box">
          <div className="mypage__container__form__info-box-title">이름</div>
          <div className="mypage__container__form__info-box-content">김뉴로</div>
        </div>
        <div className="mypage__container__form__info-box">
          <div className="mypage__container__form__info-box-title">연락처</div>
          <div className="mypage__container__form__info-box-content">
            <div className="mypage__container__form__info-box-content-box">
              <Input placeholder="연락처임" size="small" />
              <div className="mypage__container__form__info-box-content-box__gap" />
              <Button
                onClick={() => {
                  setCertyfyForm(1);
                }}
                type="button"
                state="disabled">
                인증요청
              </Button>
            </div>
          </div>
        </div>
        {certifyForm === 1 && (
          <div className="mypage__container__form__info-box">
            <div className="mypage__container__form__info-box-title">인증번호</div>
            <div className="mypage__container__form__info-box-content">
              <div className="mypage__container__form__info-box-content-box">
                <Input placeholder="인증번호를 입력해주세요." size="small" />
                <div className="mypage__container__form__info-box-content-box__gap" />
                <Button type="button" state="default">
                  확인
                </Button>
              </div>
            </div>
          </div>
        )}
        <div className="mypage__container__form__info-box">
          <div className="mypage__container__form__info-box-title">아이디</div>
          <div className="mypage__container__form__info-box-content">KIMSONGPARK</div>
        </div>
        <div className="mypage__container__form__info-box">
          <div className="mypage__container__form__info-box-title">사원번호</div>
          <div className="mypage__container__form__info-box-content">AHAKI57</div>
        </div>
        <div className="mypage__container__form__info-box">
          <div className="mypage__container__form__info-box-title">이메일</div>
          <div className="mypage__container__form__info-box-content">
            <Input placeholder="이메일임" />
          </div>
        </div>
        <div className="mypage__container__form__btn">
          <Button type="button" state="default" width="91px" height="41px">
            수정하기
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EditProfileForm;
