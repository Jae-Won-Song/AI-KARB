import Button from '../Common/Button';
import Input from '../Common/Input';
import { useState } from 'react';
import Toast, { ToastProps } from '../Common/Toast';
import { validateEmail, validatePhoneNumber, validateCertNo } from '../../utils/inputValidationUtils';

const EditProfileForm = () => {
  const [certifyForm, setCertForm] = useState(0);
  const [buttonState, setButtonState] = useState<
    'default_deepBlue' | 'danger' | 'default_white' | 'default_gray' | 'default' | 'disabled'
  >('disabled');
  const [toastMessage, setToastMessage] = useState<ToastProps | null>(null);

  const resCertNum = '111111'; // 지울거임

  const [newPhoneNum, setNewPhoneNum] = useState('');
  const [checkNewPhoneNum, setCheckNewPhoneNum] = useState(false);
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState('');

  const [cert, setCert] = useState('');
  const [checkErrorCert, setCheckErrorCert] = useState(false);
  const [certErrorMessage, setCertErrorMessage] = useState('');
  const [checkSuccessCert, setCheckSuccessCert] = useState(false);
  const [certSuccessMessage, setCertSuccessMessage] = useState('');

  const [email, setEmail] = useState('');
  const [checkErrorEmail, setCheckErrorEmail] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const updatePhoneNum = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewPhoneNum(value);

    if (validatePhoneNumber(value)) {
      setCheckNewPhoneNum(true);
      setPhoneNumberErrorMessage('연락처는 11글자, 숫자만 입력해주세요.');
    } else {
      setCheckNewPhoneNum(false);
      setPhoneNumberErrorMessage('');
    }

    if (value.trim() !== '') {
      setButtonState('default_deepBlue');
    } else {
      setButtonState('disabled');
    }
  };

  const checkCert = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCert(value);

    if (validateCertNo(value)) {
      setCheckErrorCert(true);
      setCertErrorMessage('인증번호가 올바르지 않습니다.');
    } else if (value !== resCertNum) {
      setCheckErrorCert(true);
      setCertErrorMessage('인증번호가 올바르지 않습니다.');
    } else if (value === resCertNum) {
      setCheckErrorCert(false);
      setCheckSuccessCert(true);
      setCertSuccessMessage('인증되었습니다.');
    } else {
      setCheckErrorCert(false);
      setCertErrorMessage('');
    }
  };

  const updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);

    if (validateEmail(value)) {
      setCheckErrorEmail(true);
      setEmailErrorMessage('이메일 형식이 올바르지 않습니다.');
    } else {
      setCheckErrorEmail(false);
      setEmailErrorMessage('');
    }
  };

  const checkPhoneNumber = () => {
    if (validatePhoneNumber(newPhoneNum)) {
      setCertForm(0);
    } else {
      setCertForm(1);
      setButtonState('disabled');
    }
  };

  const editInfo = () => {
    let certValid = true;
    let emailValid = true;

    if (cert !== resCertNum && cert.trim() !== '') {
      setToastMessage({
        mode: 'red',
        title: '개인정보 수정 실패',
        content: '개인정보 수정 중에 오류가 발생했습니다.',
      });
      certValid = false;
    } else if (cert === resCertNum) {
      setToastMessage({
        title: '개인정보 수정 완료',
        content: '개인정보 수정이 완료되었습니다.',
      });
    }

    if (validateEmail(email) && email.trim() !== '') {
      setToastMessage({
        mode: 'red',
        title: '개인정보 수정 실패',
        content: '개인정보 수정 중에 오류가 발생했습니다.',
      });
      emailValid = false;
    } else if (!validateEmail(email) && email.trim() !== '') {
      setToastMessage({
        title: '개인정보 수정 완료',
        content: '개인정보 수정이 완료되었습니다.',
      });
    }

    if (certValid && emailValid && cert.trim() !== '' && email.trim() !== '') {
      setToastMessage({
        title: '개인정보 수정 완료',
        content: '개인정보 수정이 완료되었습니다.',
      });
    }

    if (cert.trim() === '' && email.trim() === '') {
      setToastMessage({
        mode: 'red',
        title: '개인정보 수정 실패',
        content: '개인정보 수정 중에 오류가 발생했습니다.',
      });
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
                isError={checkNewPhoneNum}
                errorMessage={phoneNumberErrorMessage}
                placeholder="연락처임"
                size="small"
                value={newPhoneNum}
                onChange={updatePhoneNum}
              />
              <div className="mypage__container__form__info-box-content-box__gap" />
              <Button
                onClick={() => {
                  checkPhoneNumber();
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
                <Input
                  value={cert}
                  isError={checkErrorCert}
                  errorMessage={certErrorMessage}
                  isSuccess={checkSuccessCert}
                  successMessage={certSuccessMessage}
                  placeholder="인증번호를 입력해주세요."
                  size="small"
                  onChange={checkCert}
                  timer
                />
                <div className="mypage__container__form__info-box-content-box__gap" />
                {cert === resCertNum ? null : (
                  <Button
                    onClick={() => {
                      alert('인증번호가 전송되었습니다.');
                    }}
                    type="button"
                    state="default_white">
                    재전송
                  </Button>
                )}
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
            <Input
              value={email}
              isError={checkErrorEmail}
              errorMessage={emailErrorMessage}
              placeholder="이메일임"
              onChange={updateEmail}
            />
          </div>
        </div>
        <div className="mypage__container__form__btn">
          <Button onClick={editInfo} type="button" state="default" width="91px" height="41px">
            수정하기
          </Button>
          {toastMessage && (
            <Toast
              mode={toastMessage.mode}
              title={toastMessage.title}
              content={toastMessage.content}
              onClose={() => setToastMessage(null)}
            />
          )}
        </div>
      </div>
    </form>
  );
};

export default EditProfileForm;
