import Button from '../Common/Button';
import Input from '../Common/Input';
import { useState } from 'react';
import Toast from '../Common/Toast';

const EditProfileForm = () => {
  const [certifyForm, setCertyfyForm] = useState(0);
  const [contact, setContact] = useState('');
  const [buttonState, setButtonState] = useState<'danger' | 'default_white' | 'default_gray' | 'default' | 'disabled'>(
    'disabled',
  );
  const [showToast, setShowToast] = useState<JSX.Element | null>(null);

  const handleContactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setContact(value);

    if (value.trim() !== '') {
      setButtonState('default');
    } else {
      setButtonState('disabled');
    }
  };

  return (
    <form className="mypage__container__form">
      <div className="mypage__container__form__info">
        <div className="mypage__container__form__info-box">
          <div className="mypage__container__form__info-box-title">이름</div>
          <div className="mypage__container__form__info-box-content">김뉴로</div>
        </div>
        <div className="mypage__container__form__info-box">
          <div className="mypage__container__form__info-box-title_call">연락처</div>
          <div className="mypage__container__form__info-box-content">
            <div className="mypage__container__form__info-box-content-box">
              <Input
                isError
                errorMessage="asd"
                placeholder="연락처임"
                size="small"
                value={contact}
                onChange={handleContactChange}
              />
              <div className="mypage__container__form__info-box-content-box__gap" />
              <Button
                onClick={() => {
                  setCertyfyForm(1);
                  alert('인증번호를 보냈습니다.');
                }}
                type="button"
                state={buttonState}>
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
                <Input isError errorMessage="sdsac" placeholder="인증번호를 입력해주세요." size="small" />
                <div className="mypage__container__form__info-box-content-box__gap" />
                <Button
                  onClick={() => {
                    alert('인증번호 확인이 완료됐습니다.');
                  }}
                  type="button"
                  state="default">
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
            <Input isSuccess successMessage="sd" placeholder="이메일임" />
          </div>
        </div>
        <div className="mypage__container__form__btn">
          <Button
            onClick={() => {
              setShowToast(<Toast title="sd" content="sd" />);
            }}
            type="button"
            state="default"
            width="91px"
            height="41px">
            수정하기
          </Button>
          {showToast}
        </div>
      </div>
    </form>
  );
};

export default EditProfileForm;
