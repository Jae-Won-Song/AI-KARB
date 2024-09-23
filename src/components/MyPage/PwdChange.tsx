import { useState } from 'react';
import instance from '../../api/apiConfig';
import Button from '../Common/Button';
import Input from '../Common/Input';
import { validatePassword } from '../../utils/inputValidationUtils';
import Toast, { ToastProps } from '../Common/Toast';

const PwdChange = () => {
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

  const [toastMessage, setToastMessage] = useState<ToastProps | null>(null);

  const updateCurrentPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentPwdValue = e.target.value;
    setCurrentPwd(currentPwdValue);

    if (currentPwdValue === '') {
      setCheckErrorCurrentPwd(true);
      setCurrentPwdErrorMessage('비밀번호를 입력해주세요.');
    } else if (validatePassword(currentPwdValue)) {
      setCheckErrorCurrentPwd(true);
      setCurrentPwdErrorMessage('비밀번호 형식이 맞지 않습니다.');
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

  const submitEditPwd = async () => {
    try {
      if (validatePassword(newPwd) || validatePassword(confirmNewPwd) || confirmNewPwd !== newPwd) {
        setToastMessage({
          mode: 'red',
          title: '비밀번호 변경 실패',
          content: '비밀번호 변경 중에 오류가 발생했습니다.',
        });
        return;
      }

      const response = await instance.put('/api/v1/user/password', {
        currentPassword: currentPwd,
        newPassword: newPwd,
      });

      if (response.status === 200) {
        setToastMessage({
          title: '비밀번호 변경 완료',
          content: '비밀번호 변경이 완료되었습니다.',
        });
      } else {
        setToastMessage({
          mode: 'red',
          title: '비밀번호 변경 실패',
          content: '비밀번호 변경 중에 오류가 발생했습니다.',
        });
      }
    } catch (error) {
      setToastMessage({
        mode: 'red',
        title: '비밀번호 변경 실패',
        content: '비밀번호 변경 중에 오류가 발생했습니다.',
      });
    }
  };

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
            onClick={submitEditPwd}
            type="button"
            state="default"
            width="4.74vw"
            height="3.796vh"
            fontSize="0.781vw">
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

export default PwdChange;
