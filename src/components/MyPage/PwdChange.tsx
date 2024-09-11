import { useState } from 'react';
import Button from '../Common/Button';
import Input from '../Common/Input';
import { validatePassword } from '../../utils/inputValidationUtils';
import Toast from '../Common/Toast';

const PwdChange = () => {
  const adminPwd = '1111111a';

  const [newPwd, setNewPwd] = useState('');
  const [confirmNewPwd, setConfirmNewPwd] = useState('');

  const [currentPwd, setCurrentPwd] = useState('');
  const [checkErrorCurrentPwd, setCheckErrorCurrentPwd] = useState(false);
  const [currentPwdErrorMessage, setCurrentPwdErrorMessage] = useState('');

  const [checkErrorNewPwd, setCheckErrorNewPwd] = useState(false);
  const [newPwdErrorMessage, setNewPwdErrorMessage] = useState('');

  const [checkErrorConfirmNewPwd, setCheckErrorConfirmNewPwd] = useState(false);
  const [confirmNewPwdErrorMessage, setConfirmNewPwdErrorMessage] = useState('');
  const [checkSuccessConfirmNewPwd, setCheckSuccessConfirmNewPwd] = useState(false);
  const [confirmNewPwdSuccessMessage, setConfirmNewPwdSuccessMessage] = useState('');

  const [toastMessage, setToastMessage] = useState<{ mode?: string; title: string; content: string } | null>(null);

  const updateCurrentPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentPwdValue = e.target.value;
    setCurrentPwd(currentPwdValue);

    if (currentPwdValue === '') {
      setCheckErrorCurrentPwd(true);
      setCurrentPwdErrorMessage('비밀번호를 입력해주세요.');
    } else if (validatePassword(currentPwdValue)) {
      setCheckErrorCurrentPwd(true);
      setCurrentPwdErrorMessage('비밀번호 형식이 맞지 않습니다.');
    } else if (currentPwdValue !== adminPwd) {
      setCheckErrorCurrentPwd(true);
      setCurrentPwdErrorMessage('현재 비밀번호와 일치하지 않습니다.');
    } else {
      setCheckErrorCurrentPwd(false);
      setCurrentPwdErrorMessage('');
    }
  };

  const updateNewPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewPwd(value);

    if (value === '') {
      setCheckErrorNewPwd(true);
      setCheckSuccessConfirmNewPwd(false);
      setNewPwdErrorMessage('비밀번호를 입력해주세요.');
    } else if (value === adminPwd) {
      setCheckErrorNewPwd(true);
      setNewPwdErrorMessage('현재 비밀번호와 같은 비밀번호 입니다.');
    } else if (validatePassword(value)) {
      setCheckErrorNewPwd(true);
      setNewPwdErrorMessage('비밀번호 형식이 맞지 않습니다.');
    } else {
      setCheckErrorNewPwd(false);
      setNewPwdErrorMessage('');
    }

    if (value === confirmNewPwd) {
      setCheckErrorConfirmNewPwd(false);
      setCheckSuccessConfirmNewPwd(true);
      setConfirmNewPwdSuccessMessage('비밀번호가 일치합니다.');
    } else {
      setCheckSuccessConfirmNewPwd(false);
      setCheckErrorConfirmNewPwd(true);
      setConfirmNewPwdErrorMessage('새 비밀번호가 일치하지 않습니다.');
    }
  };

  const updateConfirmNewPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setConfirmNewPwd(value);

    if (value === '') {
      setCheckSuccessConfirmNewPwd(false);
      setCheckErrorConfirmNewPwd(true);
      setConfirmNewPwdErrorMessage('비밀번호를 입력해주세요.');
    } else if (value === newPwd) {
      setCheckErrorConfirmNewPwd(false);
      setCheckSuccessConfirmNewPwd(true);
      setConfirmNewPwdSuccessMessage('비밀번호가 일치합니다.');
    } else {
      setCheckSuccessConfirmNewPwd(false);
      setCheckErrorConfirmNewPwd(true);
      setConfirmNewPwdErrorMessage('새 비밀번호가 일치하지 않습니다.');
    }
  };

  function submitEditPwd() {
    if (
      validatePassword(newPwd) ||
      validatePassword(confirmNewPwd) ||
      currentPwd !== adminPwd ||
      confirmNewPwd !== newPwd
    ) {
      setToastMessage({ mode: 'red', title: '개인정보 수정 실패', content: '개인정보 수정 중에 오류가 발생했습니다.' });
    } else {
      setToastMessage({ title: '개인정보 수정 완료', content: '개인정보 수정이 완료되었습니다.' });
    }
  }

  return (
    <form className="mypage__container__form">
      <div className="mypage__container__form__info">
        <div className="mypage__container__form__info-box">
          <div className="mypage__container__form__info-box-title">현재 비밀번호</div>
          <div className="mypage__container__form__info-box-content">
            <Input
              onChange={updateCurrentPwd}
              value={currentPwd}
              placeholder="영문자/숫자/특수문자 사용 가능, 8~16자"
              errorMessage={currentPwdErrorMessage}
              isError={checkErrorCurrentPwd}
            />
          </div>
        </div>
        <div className="mypage__container__form__info-box">
          <div className="mypage__container__form__info-box-title">새 비밀번호</div>
          <div className="mypage__container__form__info-box-content">
            <Input
              value={newPwd}
              onChange={updateNewPwd}
              isError={checkErrorNewPwd}
              errorMessage={newPwdErrorMessage}
              placeholder="영문자/숫자/특수문자 사용 가능, 8~16자"
            />
          </div>
        </div>
        <div className="mypage__container__form__info-box">
          <div className="mypage__container__form__info-box-title">새 비밀번호 확인</div>
          <div className="mypage__container__form__info-box-content">
            <Input
              onChange={updateConfirmNewPwd}
              value={confirmNewPwd}
              isError={checkErrorConfirmNewPwd}
              isSuccess={checkSuccessConfirmNewPwd}
              successMessage={confirmNewPwdSuccessMessage}
              errorMessage={confirmNewPwdErrorMessage}
              placeholder="영문자/숫자/특수문자 사용 가능, 8~16자"
            />
          </div>
        </div>
        <div className="mypage__container__form__btn">
          <Button
            onClick={() => {
              submitEditPwd();
            }}
            type="button"
            state="default"
            width="91px"
            height="41px">
            수정하기
          </Button>
          {toastMessage && <Toast mode={toastMessage.mode} title={toastMessage.title} content={toastMessage.content} />}
        </div>
      </div>
    </form>
  );
};

export default PwdChange;
